import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactions } from '../hooks/useReactions';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { calculateMvti } from '../utils/mvtiCalculator';
import { getDailyRecommendations } from '../utils/recommendationEngine';

/**
 * DashboardPage 컴포넌트 - 오늘의 영화 추천 대시보드
 */
export default function DashboardPage() {
  const navigate = useNavigate();
  const { reactions, addReaction } = useReactions();
  const [profile] = useLocalStorage('mvti_user_profile_v1', {
    mbti: null,
    onboardingCompleted: false,
  });

  const [toastMessage, setToastMessage] = useState('');

  // 1. 현재 MVTI 및 평점 상태 도출
  const mvtiResult = useMemo(() => {
    return calculateMvti(reactions, profile.mbti);
  }, [reactions, profile.mbti]);

  const { scores, stats } = mvtiResult;

  // 최소 조건 검증 (Seen 상태 Like/Dislike 6편 이상)
  const isEligible = stats.totalCount >= 6;

  // 2. 날짜 시드 생성
  const dailySeed = useMemo(() => {
    return new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\. /g, '-').replace(/\./g, '');
  }, []);

  // 3. 이미 반응한 영화 ID 추출 (추천 후보 제외)
  const evaluatedMovieIds = useMemo(() => {
    return reactions.map((r) => r.movieId);
  }, [reactions]);

  // 4. 추천 산출
  const recommendations = useMemo(() => {
    if (!isEligible) return null;
    return getDailyRecommendations(scores, evaluatedMovieIds, dailySeed);
  }, [isEligible, scores, evaluatedMovieIds, dailySeed]);

  // 추천 영화 피드백 처리 핸들러
  const handleFeedback = (movieId, sentiment, watchStatus, title) => {
    try {
      addReaction({
        movieId,
        sentiment,
        strength: 2, // 대시보드 퀵 등록은 보통 강도로 고정
        watchStatus,
        note: `대시보드 추천에서 반응 등록 (${new Date().toLocaleDateString()})`
      });

      // 피드백 등록 성공 알림
      showToast(`🎬 '${title}' 영화 반응이 저장되어 MVTI 분석에 반영되었습니다!`);
    } catch (err) {
      showToast(`⚠️ 에러: ${err.message || '저장에 실패했습니다.'}`);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const getPosterUrl = (posterPath) => {
    if (!posterPath) return '/poster-placeholder.svg';
    if (posterPath.startsWith('http')) return posterPath;
    return `https://image.tmdb.org/t/p/w200${posterPath}`;
  };

  if (!isEligible) {
    return (
      <div className="dashboard-page-container empty-case">
        <div className="empty-result-card glass-panel">
          <div className="warning-icon">🔮</div>
          <h2>추천 대시보드가 준비되지 않았습니다</h2>
          <p>
            당신의 고유 취향을 파악할 수 있는 최소 평점이 모이지 않았습니다.<br />
            선호/불호 영화를 <strong>최소 6편 이상</strong> 기록하시면 매일 밤 당신만을 위해 연산되는
            정확 매칭, 취향 확장, 의외의 발견 슬롯 추천이 개방됩니다.
          </p>
          <div className="current-stats">
            <p>현재 평가한 영화 개수: <span className="stat-highlight">{stats.totalCount} / 6</span> 편</p>
            <div className="progress-bar-mini-track">
              <div className="progress-bar-mini-fill" style={{ width: `${Math.min((stats.totalCount / 6) * 100, 100)}%` }}></div>
            </div>
          </div>
          <button className="btn-go-taste" onClick={() => navigate('/my-taste')}>
            영화 취향 기록하러 가기
          </button>
        </div>
        <style jsx>{`
          .dashboard-page-container.empty-case {
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

  const { bestMatch, expansion, serendipity } = recommendations;

  const slots = [
    { key: 'best', type: '정확 추천 (Best Match)', data: bestMatch, icon: '🎯' },
    { key: 'expansion', type: '취향 확장 (Taste Expansion)', data: expansion, icon: '🚀' },
    { key: 'serendipity', type: '의외의 발견 (Serendipity)', data: serendipity, icon: '🎲' }
  ];

  return (
    <div className="dashboard-page-container">
      {toastMessage && <div className="toast-notification">{toastMessage}</div>}

      <div className="dashboard-header">
        <div className="header-info">
          <h2>📅 오늘의 3편 추천 대시보드</h2>
          <p>날짜({dailySeed})와 당신의 고유 영화 취향성향을 정교하게 조합한 인메모리 추천 큐레이션입니다.</p>
        </div>
        <button className="btn-result-view" onClick={() => navigate('/result')}>
          ← 내 MVTI 진단서 보기
        </button>
      </div>

      <div className="recommendations-container">
        {slots.map((slot) => {
          const { movie, reason } = slot.data;
          if (!movie) return null;

          return (
            <div key={slot.key} className={`recommend-card-box glass-panel slot-${slot.key}`}>
              <div className="slot-type-header">
                <span className="slot-icon">{slot.icon}</span>
                <span className="slot-type-title">{slot.type}</span>
              </div>

              <div className="movie-detail-content">
                <img src={getPosterUrl(movie.posterPath)} alt={movie.titleKo} className="recommend-poster" />
                
                <div className="movie-details">
                  <div className="movie-meta-header">
                    <h3 className="movie-title">{movie.titleKo}</h3>
                    <span className="movie-meta">{movie.releaseYear} • {movie.primaryGenre}</span>
                  </div>
                  
                  <p className="movie-overview">
                    {movie.overviewKo ? (movie.overviewKo.length > 180 ? `${movie.overviewKo.slice(0, 180)}...` : movie.overviewKo) : '등록된 시놉시스가 없습니다.'}
                  </p>

                  <div className="recommendation-reason">
                    <strong>추천 사유:</strong> {reason}
                  </div>

                  {/* 퀵 피드백 버튼 */}
                  <div className="feedback-section">
                    <span className="feedback-label">이 영화에 피드백 남기기:</span>
                    <div className="feedback-buttons">
                      <button
                        className="btn-feedback like"
                        onClick={() => handleFeedback(movie.id, 'like', 'seen', movie.titleKo)}
                      >
                        ❤️ 좋았어요
                      </button>
                      <button
                        className="btn-feedback dislike"
                        onClick={() => handleFeedback(movie.id, 'dislike', 'seen', movie.titleKo)}
                      >
                        👎 싫어해요
                      </button>
                      <button
                        className="btn-feedback want"
                        onClick={() => handleFeedback(movie.id, 'like', 'wantToWatch', movie.titleKo)}
                      >
                        👀 보고 싶어요
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .dashboard-page-container {
          padding: 20px 0;
          animation: fadeIn 0.4s ease;
          position: relative;
        }

        .toast-notification {
          position: fixed;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(102, 252, 241, 0.95);
          border: 1px solid var(--primary-color, #66fcf1);
          color: #121212;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 8px;
          z-index: 3000;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(102, 252, 241, 0.3);
          font-size: 0.9rem;
          animation: slideDown 0.3s ease-out;
        }

        .dashboard-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
        }

        @media (min-width: 768px) {
          .dashboard-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .header-info h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          margin-top: 0;
          margin-bottom: 8px;
        }

        .header-info p {
          font-size: 0.95rem;
          color: var(--text-desc, #a0aec0);
          margin: 0;
          line-height: 1.5;
        }

        .btn-result-view {
          background: transparent;
          border: 1px solid rgba(102, 252, 241, 0.3);
          color: var(--primary-color, #66fcf1);
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .btn-result-view:hover {
          background: rgba(102, 252, 241, 0.08);
          border-color: var(--primary-color, #66fcf1);
        }

        .recommendations-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .recommend-card-box {
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .recommend-card-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .slot-best {
          border-left: 4px solid var(--primary-color, #66fcf1);
        }

        .slot-expansion {
          border-left: 4px solid var(--secondary-color, #c8a2c8);
        }

        .slot-serendipity {
          border-left: 4px solid #ed8936;
        }

        .slot-type-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 10px;
        }

        .slot-icon {
          font-size: 1.25rem;
        }

        .slot-type-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #e2e8f0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .movie-detail-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        @media (min-width: 600px) {
          .movie-detail-content {
            flex-direction: row;
          }
        }

        .recommend-poster {
          width: 120px;
          height: 170px;
          object-fit: cover;
          border-radius: 8px;
          background: #1a202c;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          align-self: center;
        }

        @media (min-width: 600px) {
          .recommend-poster {
            align-self: flex-start;
          }
        }

        .movie-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .movie-meta-header {
          margin-bottom: 8px;
        }

        .movie-title {
          margin: 0 0 4px 0;
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
        }

        .movie-meta {
          font-size: 0.85rem;
          color: #a0aec0;
        }

        .movie-overview {
          font-size: 0.9rem;
          color: #cbd5e0;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .recommendation-reason {
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 10px 14px;
          font-size: 0.85rem;
          color: #e2e8f0;
          line-height: 1.4;
          margin-bottom: 20px;
        }

        .recommendation-reason strong {
          color: var(--primary-color, #66fcf1);
        }

        .slot-expansion .recommendation-reason strong {
          color: var(--secondary-color, #c8a2c8);
        }

        .slot-serendipity .recommendation-reason strong {
          color: #ed8936;
        }

        .feedback-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: 16px;
        }

        @media (min-width: 768px) {
          .feedback-section {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .feedback-label {
          font-size: 0.8rem;
          color: #718096;
          font-weight: 600;
        }

        .feedback-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .btn-feedback {
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e0;
          transition: all 0.2s;
        }

        .btn-feedback.like:hover {
          background: rgba(229, 62, 109, 0.15);
          border-color: #e53e3e;
          color: #fc8181;
        }

        .btn-feedback.dislike:hover {
          background: rgba(221, 107, 32, 0.15);
          border-color: #dd6b20;
          color: #fbd38d;
        }

        .btn-feedback.want:hover {
          background: rgba(102, 252, 241, 0.12);
          border-color: var(--primary-color, #66fcf1);
          color: var(--primary-color, #66fcf1);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { transform: translate(-50%, -20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
