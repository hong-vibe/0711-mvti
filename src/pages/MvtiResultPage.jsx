import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactions } from '../hooks/useReactions';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { calculateMvti } from '../utils/mvtiCalculator';
import { MVTI_TYPES } from '../constants/mvtiTypes';
import AxisChart from '../components/result/AxisChart';
import MbtiMvtiComparison from '../components/result/MbtiMvtiComparison';

/**
 * MvtiResultPage 컴포넌트 - 최종 영화 취향 진단 결과 페이지
 */
export default function MvtiResultPage() {
  const navigate = useNavigate();
  const { reactions, clearAllReactions } = useReactions();
  
  const [profile, setProfile] = useLocalStorage('mvti_user_profile_v1', {
    mbti: null,
    onboardingCompleted: false,
  });

  const mvtiResult = useMemo(() => {
    return calculateMvti(reactions, profile.mbti);
  }, [reactions, profile.mbti]);

  const { mvtiCode, scores, confidence, stats } = mvtiResult;
  const isEligible = stats.totalCount >= 6;
  const typeDetails = MVTI_TYPES[mvtiCode];

  const handleResetAll = () => {
    if (window.confirm('모든 영화 반응 기록과 프로필이 삭제됩니다. 정말 초기화하시겠습니까?')) {
      clearAllReactions();
      setProfile({ mbti: null, onboardingCompleted: false });
      navigate('/');
    }
  };

  // ─── 미자격 상태 ───
  if (!isEligible) {
    return (
      <div className="result-page">
        <div className="result-empty">
          <div className="result-empty__icon">◇</div>
          <h2 className="result-empty__title">분석에 필요한 기록이 부족합니다</h2>
          <p className="result-empty__desc">
            선호/비선호 영화를 합하여 <strong>6편 이상</strong> 기록하시면<br />
            정밀 취향 분석을 진행할 수 있습니다.
          </p>
          <div className="result-empty__progress">
            <div className="result-empty__bar">
              <div className="result-empty__fill" style={{ width: `${Math.min((stats.totalCount / 6) * 100, 100)}%` }}></div>
            </div>
            <span className="result-empty__count">{stats.totalCount} / 6</span>
          </div>
          <button className="btn-primary" onClick={() => navigate('/my-taste')}>
            취향 기록하러 가기
          </button>
        </div>

        <style jsx>{`
          .result-page { padding: 20px 0; animation: fadeIn 0.3s ease; }
          .result-empty {
            max-width: 420px;
            margin: 80px auto;
            text-align: center;
          }
          .result-empty__icon {
            font-size: 2rem;
            color: var(--accent-warm);
            margin-bottom: 20px;
            opacity: 0.6;
          }
          .result-empty__title {
            font-size: 1.3rem;
            color: var(--text-main);
            margin-bottom: 12px;
          }
          .result-empty__desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 28px;
          }
          .result-empty__desc strong { color: var(--text-main); }
          .result-empty__progress {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 28px;
          }
          .result-empty__bar {
            flex: 1;
            height: 4px;
            background: var(--border-subtle);
            border-radius: 2px;
            overflow: hidden;
          }
          .result-empty__fill {
            height: 100%;
            background: var(--primary-color);
            border-radius: 2px;
            transition: width 0.6s ease;
          }
          .result-empty__count {
            font-size: 0.8rem;
            color: var(--text-muted);
            font-weight: 500;
            white-space: nowrap;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="result-page">
      <header className="result-header">
        <div>
          <p className="result-header__label">MVTI Analysis</p>
          <h2 className="result-header__title">나의 영화 취향 진단서</h2>
        </div>
      </header>

      {/* ─── 유형 공개 카드 ─── */}
      <section className="type-card">
        <span className="type-card__prefix">MOVIE TASTE CODE</span>
        <h1 className="type-card__code">{mvtiCode}</h1>
        <h2 className="type-card__name">{typeDetails?.title || '영화 탐구자'}</h2>
        
        <p className="type-card__desc">{typeDetails?.description}</p>
        
        <div className="type-card__tags">
          {typeDetails?.keywords.map((kw, idx) => (
            <span key={idx} className="type-tag">#{kw}</span>
          ))}
        </div>

        {typeDetails?.recommendationTip && (
          <div className="type-card__tip">
            <span className="tip-label">취향 가이드</span>
            <p>{typeDetails.recommendationTip}</p>
          </div>
        )}
      </section>

      {/* ─── 신뢰도 & 통계 ─── */}
      <section className="conf-section">
        <div className="conf-header">
          <h3 className="conf-title">분석 신뢰도</h3>
          <span className="conf-pct">{confidence}%</span>
        </div>
        
        <div className="conf-bar">
          <div className="conf-fill" style={{ width: `${confidence}%` }}></div>
        </div>

        <div className="conf-grid">
          <div className="conf-item">
            <span className="conf-val">{stats.totalCount}</span>
            <span className="conf-label">평가 수</span>
          </div>
          <div className="conf-item">
            <span className="conf-val">{stats.likeCount}</span>
            <span className="conf-label">내 취향</span>
          </div>
          <div className="conf-item">
            <span className="conf-val">{stats.dislikeCount}</span>
            <span className="conf-label">별로</span>
          </div>
          <div className="conf-item">
            <span className="conf-val">{stats.genreCount}</span>
            <span className="conf-label">장르 수</span>
          </div>
        </div>

        <p className="conf-note">
          {confidence >= 80 
            ? '충분한 데이터로 안정적인 진단 결과를 보여줍니다.'
            : confidence >= 50
            ? '선호/불호 영화를 12편 이상 등록하면 더욱 신뢰도가 높아집니다.'
            : '다양한 장르의 선호/비선호 영화를 골고루 추가해 보세요.'}
        </p>
      </section>

      {/* ─── 4축 차트 ─── */}
      <AxisChart scores={scores} />

      {/* ─── MBTI 대조 ─── */}
      {profile.mbti && (
        <MbtiMvtiComparison mbti={profile.mbti} mvtiCode={mvtiCode} />
      )}

      {/* ─── 하단 액션 ─── */}
      <section className="result-actions">
        <button className="btn-primary" onClick={() => navigate('/dashboard')}>
          오늘의 추천 보기 →
        </button>
        <button className="btn-secondary" onClick={() => navigate('/my-taste')}>
          취향 기록 관리
        </button>
        <button className="btn-danger" onClick={handleResetAll}>
          데이터 초기화
        </button>
      </section>

      <style jsx>{`
        .result-page {
          padding: 20px 0 60px 0;
          animation: fadeIn 0.3s ease;
        }

        /* 헤더 */
        .result-header {
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .result-header__label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .result-header__title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
        }

        /* 유형 카드 */
        .type-card {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 36px 28px;
          text-align: center;
          margin-bottom: 20px;
        }
        .type-card__prefix {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .type-card__code {
          font-size: 3rem;
          margin: 12px 0 6px 0;
          font-weight: 850;
          color: var(--primary-color);
          letter-spacing: 0.06em;
        }
        .type-card__name {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 20px;
        }
        .type-card__desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }
        .type-card__tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .type-tag {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--primary-color);
          background: var(--primary-muted);
          padding: 5px 12px;
          border-radius: 20px;
        }
        .type-card__tip {
          text-align: left;
          padding: 14px 16px;
          background: rgba(255,255,255,0.02);
          border-left: 2px solid var(--accent-warm);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          max-width: 520px;
          margin: 0 auto;
        }
        .tip-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent-warm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }
        .type-card__tip p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        /* 신뢰도 섹션 */
        .conf-section {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 22px 22px;
          margin-bottom: 20px;
        }
        .conf-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .conf-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          margin: 0;
        }
        .conf-pct {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--primary-color);
        }
        .conf-bar {
          width: 100%;
          height: 4px;
          background: var(--border-subtle);
          border-radius: 2px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        .conf-fill {
          height: 100%;
          background: var(--primary-color);
          border-radius: 2px;
          transition: width 1s ease-out;
        }
        .conf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 14px;
        }
        @media (max-width: 480px) {
          .conf-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .conf-item {
          text-align: center;
          padding: 10px 0;
          background: rgba(255,255,255,0.02);
          border-radius: var(--radius-sm);
        }
        .conf-val {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .conf-label {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .conf-note {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }

        /* 하단 액션 */
        .result-actions {
          margin-top: 28px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn-danger {
          background: transparent;
          border: 1px solid rgba(229, 90, 111, 0.25);
          color: var(--danger-color);
          padding: 10px 20px;
          border-radius: var(--radius-md);
          cursor: pointer;
          font-weight: 500;
          font-size: 0.85rem;
          transition: var(--transition-smooth);
        }
        .btn-danger:hover {
          background: rgba(229, 90, 111, 0.08);
          border-color: var(--danger-color);
        }
      `}</style>
    </div>
  );
}
