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
  
  // 온보딩 시 입력한 프로필 정보를 로컬스토리지에서 가져옴
  const [profile, setProfile] = useLocalStorage('mvti_user_profile_v1', {
    mbti: null,
    onboardingCompleted: false,
  });

  // MVTI 계산 연산
  const mvtiResult = useMemo(() => {
    return calculateMvti(reactions, profile.mbti);
  }, [reactions, profile.mbti]);

  const { mvtiCode, scores, confidence, stats } = mvtiResult;

  // 최소 조건 검증: seen 상태이고 like/dislike인 반응의 합이 6편 이상이어야 함
  const isEligible = stats.totalCount >= 6;

  // 유형 세부 정보
  const typeDetails = MVTI_TYPES[mvtiCode];

  // 데이터 완전 초기화 핸들러
  const handleResetAll = () => {
    if (window.confirm('⚠️ 주의: 모든 영화 반응 기록과 MBTI 온보딩 프로필이 삭제됩니다. 정말 초기화하시겠습니까?')) {
      clearAllReactions();
      setProfile({ mbti: null, onboardingCompleted: false });
      navigate('/');
    }
  };

  if (!isEligible) {
    return (
      <div className="result-page-container empty-case">
        <div className="empty-result-card glass-panel">
          <div className="warning-icon">🧭</div>
          <h2>취향 분석에 필요한 기록이 부족합니다</h2>
          <p>
            선호하는 영화와 비선호하는 영화를 합하여 <strong>최소 6편 이상</strong> 기록하셔야 
            정밀 취향 분석(MVTI)을 진행할 수 있습니다.
          </p>
          <div className="current-stats">
            <p>현재 평가한 영화 개수: <span className="stat-highlight">{stats.totalCount} / 6</span> 편</p>
            <div className="progress-bar-mini-track">
              <div className="progress-bar-mini-fill" style={{ width: `${Math.min((stats.totalCount / 6) * 100, 100)}%` }}></div>
            </div>
          </div>
          <button className="btn-go-taste" onClick={() => navigate('/my-taste')}>
            영화 기록하러 가기 (CRUD)
          </button>
        </div>
        <style jsx>{`
          .result-page-container.empty-case {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 80px 20px;
          }
          .empty-result-card {
            max-width: 500px;
            padding: 40px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
          .warning-icon {
            font-size: 3.5rem;
            margin-bottom: 20px;
          }
          .empty-result-card h2 {
            font-size: 1.4rem;
            color: #fff;
            margin-top: 0;
            margin-bottom: 12px;
          }
          .empty-result-card p {
            font-size: 0.95rem;
            color: #a0aec0;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          .current-stats {
            background: rgba(255, 255, 255, 0.02);
            padding: 16px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            margin-bottom: 30px;
          }
          .stat-highlight {
            color: var(--primary-color, #66fcf1);
            font-weight: 700;
          }
          .progress-bar-mini-track {
            height: 6px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
            margin-top: 10px;
            overflow: hidden;
          }
          .progress-bar-mini-fill {
            height: 100%;
            background: var(--primary-color, #66fcf1);
            border-radius: 3px;
            transition: width 0.5s ease;
          }
          .btn-go-taste {
            background: linear-gradient(135deg, var(--secondary-color, #c8a2c8) 0%, var(--primary-color, #66fcf1) 100%);
            border: none;
            color: #121212;
            padding: 12px 30px;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s;
          }
          .btn-go-taste:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 252, 241, 0.25);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="result-page-container">
      <div className="result-header">
        <h2>🔬 나의 영화 취향 진단서</h2>
        <p>당신의 영화 평가를 정밀 분석하여 산출한 MVTI 결과입니다.</p>
      </div>

      <div className="result-grid">
        {/* 왼쪽 영역: 유형 성격 설명 & 신뢰도 */}
        <div className="result-main-col">
          <div className="type-reveal-card glass-panel text-center">
            <span className="type-prefix">MOVIE TASTE CODE</span>
            <h1 className="type-code">{mvtiCode}</h1>
            <h2 className="type-name">“{typeDetails?.title || '영화 탐구자'}”</h2>
            
            <p className="type-description">{typeDetails?.description}</p>
            
            <div className="type-keywords">
              {typeDetails?.keywords.map((kw, idx) => (
                <span key={idx} className="keyword-tag">#{kw}</span>
              ))}
            </div>

            <div className="tip-box">
              <strong>💡 취향 가이드: </strong>
              <span>{typeDetails?.recommendationTip}</span>
            </div>
          </div>

          {/* 신뢰도 및 통계 분석 카드 */}
          <div className="confidence-card glass-panel">
            <div className="confidence-header">
              <h3 className="confidence-title">🔍 분석 신뢰도</h3>
              <span className="confidence-percentage">{confidence}%</span>
            </div>
            
            <div className="confidence-bar-track">
              <div className="confidence-bar-fill" style={{ width: `${confidence}%` }}></div>
            </div>

            <div className="confidence-stats-grid">
              <div className="conf-stat-item">
                <span className="conf-stat-val">{stats.totalCount}편</span>
                <span className="conf-stat-label">총 유효 평가 수</span>
              </div>
              <div className="conf-stat-item">
                <span className="conf-stat-val">{stats.likeCount}편</span>
                <span className="conf-stat-label">선호 영화 (Like)</span>
              </div>
              <div className="conf-stat-item">
                <span className="conf-stat-val">{stats.dislikeCount}편</span>
                <span className="conf-stat-label">비선호 영화 (Dislike)</span>
              </div>
              <div className="conf-stat-item">
                <span className="conf-stat-val">{stats.genreCount}개</span>
                <span className="conf-stat-label">평가한 장르 종류</span>
              </div>
            </div>

            <p className="confidence-desc">
              {confidence >= 80 
                ? '충분한 평가 편수와 장르 다양성이 확보되어 매우 안정적인 취향 진단 결과를 보여줍니다.'
                : confidence >= 50
                ? '보통 수준의 진단 신뢰도입니다. 취향 기록(CRUD)에서 선호/불호 영화를 12편 이상 등록하면 더욱 신뢰도가 높아집니다.'
                : '임시 진단 결과입니다. 다양한 장르의 선호/비선호 영화를 골고루 추가해 보세요.'}
            </p>
          </div>
        </div>

        {/* 오른쪽 영역: 4대 성향 차트 & MBTI 대조 */}
        <div className="result-sub-col">
          <AxisChart scores={scores} />

          {profile.mbti && (
            <MbtiMvtiComparison mbti={profile.mbti} mvtiCode={mvtiCode} />
          )}

          {/* 하단 제어 및 공유 */}
          <div className="result-actions-card glass-panel">
            <h4>⚙️ 프로필 관리</h4>
            <div className="action-buttons-group">
              <button className="btn-action dashboard" onClick={() => navigate('/dashboard')}>
                🚀 오늘의 영화 추천 대시보드
              </button>
              <button className="btn-action taste" onClick={() => navigate('/my-taste')}>
                ✍️ 취향 기록 수동 관리 (CRUD)
              </button>
              <button className="btn-action reset" onClick={handleResetAll}>
                🗑️ 나의 진단 데이터 완전 초기화
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .result-page-container {
          padding: 20px 0;
          animation: fadeIn 0.5s ease;
        }

        .result-header {
          margin-bottom: 30px;
        }

        .result-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          margin-top: 0;
          margin-bottom: 8px;
        }

        .result-header p {
          font-size: 0.95rem;
          color: var(--text-desc, #a0aec0);
          margin: 0;
        }

        .result-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        @media (min-width: 992px) {
          .result-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .type-reveal-card {
          padding: 40px 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 30px;
        }

        .type-prefix {
          font-size: 0.75rem;
          color: var(--text-muted, #718096);
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .type-code {
          font-size: 3.5rem;
          margin: 15px 0 5px 0;
          font-weight: 850;
          background: linear-gradient(135deg, var(--secondary-color, #c8a2c8) 0%, var(--primary-color, #66fcf1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 20px rgba(102, 252, 241, 0.15);
        }

        .type-name {
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          margin-top: 0;
          margin-bottom: 24px;
        }

        .type-description {
          font-size: 0.95rem;
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 24px;
          padding: 0 10px;
        }

        .type-keywords {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }

        .keyword-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-color, #66fcf1);
          background: rgba(102, 252, 241, 0.08);
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid rgba(102, 252, 241, 0.15);
        }

        .tip-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          padding: 14px 18px;
          font-size: 0.85rem;
          color: #cbd5e0;
          line-height: 1.5;
        }

        .tip-box strong {
          color: var(--secondary-color, #c8a2c8);
        }

        .confidence-card {
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .confidence-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .confidence-title {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        .confidence-percentage {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary-color, #66fcf1);
        }

        .confidence-bar-track {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          margin-bottom: 24px;
          overflow: hidden;
        }

        .confidence-bar-fill {
          height: 100%;
          background: var(--primary-color, #66fcf1);
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(102, 252, 241, 0.3);
          transition: width 1s ease-out;
        }

        .confidence-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }

        @media (min-width: 480px) {
          .confidence-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .conf-stat-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          padding: 12px;
          text-align: center;
        }

        .conf-stat-val {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
        }

        .conf-stat-label {
          display: block;
          font-size: 0.7rem;
          color: #718096;
          margin-top: 4px;
        }

        .confidence-desc {
          font-size: 0.85rem;
          color: #a0aec0;
          line-height: 1.5;
          margin: 0;
        }

        .result-actions-card {
          margin-top: 30px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .result-actions-card h4 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
        }

        .action-buttons-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn-action {
          padding: 12px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .btn-action.dashboard {
          background: linear-gradient(135deg, var(--secondary-color, #c8a2c8) 0%, var(--primary-color, #66fcf1) 100%);
          color: #121212;
        }

        .btn-action.dashboard:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(102, 252, 241, 0.3);
        }

        .btn-action.taste {
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-action.taste:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .btn-action.reset {
          background: rgba(229, 62, 109, 0.08);
          color: #fc8181;
          border: 1px solid rgba(229, 62, 109, 0.2);
        }

        .btn-action.reset:hover {
          background: rgba(229, 62, 109, 0.15);
          border-color: rgba(229, 62, 109, 0.3);
        }

        .text-center {
          text-align: center;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
