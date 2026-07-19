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
  const [feedbackGiven, setFeedbackGiven] = useState({});

  const mvtiResult = useMemo(() => {
    return calculateMvti(reactions, profile.mbti);
  }, [reactions, profile.mbti]);

  const { scores, stats } = mvtiResult;
  const isEligible = stats.totalCount >= 6;

  const dailySeed = useMemo(() => {
    return new Date().toLocaleDateString('ko-KR', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    }).replace(/\. /g, '-').replace(/\./g, '');
  }, []);

  const evaluatedMovieIds = useMemo(() => {
    return reactions.map((r) => r.movieId);
  }, [reactions]);

  const recommendations = useMemo(() => {
    if (!isEligible) return null;
    return getDailyRecommendations(scores, evaluatedMovieIds, dailySeed);
  }, [isEligible, scores, evaluatedMovieIds, dailySeed]);

  const handleFeedback = (movieId, sentiment, watchStatus, title) => {
    try {
      addReaction({
        movieId,
        sentiment,
        strength: 2,
        watchStatus,
        note: `대시보드 추천에서 반응 등록 (${new Date().toLocaleDateString()})`
      });
      setFeedbackGiven(prev => ({ ...prev, [movieId]: sentiment }));
      showToast(`"${title}" — 반응이 저장되었습니다`);
    } catch (err) {
      showToast(`저장 실패: ${err.message}`);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const getPosterUrl = (posterPath) => {
    if (!posterPath) return '/poster-placeholder.svg';
    if (posterPath.startsWith('http')) return posterPath;
    return `https://image.tmdb.org/t/p/w300${posterPath}`;
  };

  // ─── 미자격 상태 ───
  if (!isEligible) {
    return (
      <div className="dash-page">
        <div className="dash-empty">
          <div className="dash-empty__icon">✦</div>
          <h2 className="dash-empty__title">추천을 준비하고 있습니다</h2>
          <p className="dash-empty__desc">
            영화 반응이 <strong>6편</strong> 이상 기록되면<br />
            매일 새로운 큐레이션이 열립니다.
          </p>
          <div className="dash-empty__progress">
            <div className="dash-empty__bar">
              <div className="dash-empty__fill" style={{ width: `${Math.min((stats.totalCount / 6) * 100, 100)}%` }}></div>
            </div>
            <span className="dash-empty__count">{stats.totalCount} / 6</span>
          </div>
          <button className="btn-primary" onClick={() => navigate('/my-taste')}>
            취향 기록 시작하기
          </button>
        </div>

        <style jsx>{`
          .dash-page { padding: 20px 0; animation: fadeIn 0.3s ease; }
          .dash-empty {
            max-width: 420px;
            margin: 80px auto;
            text-align: center;
          }
          .dash-empty__icon {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 20px;
            opacity: 0.7;
          }
          .dash-empty__title {
            font-size: 1.35rem;
            color: var(--text-main);
            margin-bottom: 12px;
          }
          .dash-empty__desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 28px;
          }
          .dash-empty__desc strong { color: var(--text-main); }
          .dash-empty__progress {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 28px;
          }
          .dash-empty__bar {
            flex: 1;
            height: 4px;
            background: var(--border-subtle);
            border-radius: 2px;
            overflow: hidden;
          }
          .dash-empty__fill {
            height: 100%;
            background: var(--primary-color);
            border-radius: 2px;
            transition: width 0.6s ease;
          }
          .dash-empty__count {
            font-size: 0.8rem;
            color: var(--text-muted);
            font-weight: 500;
            white-space: nowrap;
          }
        `}</style>
      </div>
    );
  }

  const { bestMatch, expansion, serendipity } = recommendations;

  const slots = [
    { key: 'best', label: 'Best Match', sublabel: '취향 정확 매칭', data: bestMatch, color: 'var(--primary-color)' },
    { key: 'expansion', label: 'Taste Expansion', sublabel: '취향 확장 추천', data: expansion, color: 'var(--accent-warm)' },
    { key: 'serendipity', label: 'Serendipity', sublabel: '의외의 발견', data: serendipity, color: 'var(--accent-rose)' }
  ];

  return (
    <div className="dash-page">
      {toastMessage && <div className="dash-toast">{toastMessage}</div>}

      <header className="dash-header">
        <div>
          <p className="dash-header__date">{dailySeed}</p>
          <h2 className="dash-header__title">오늘의 추천</h2>
        </div>
        <button className="btn-secondary" onClick={() => navigate('/result')}>
          진단서 보기 →
        </button>
      </header>

      <div className="dash-slots">
        {slots.map((slot) => {
          const { movie, reason } = slot.data;
          if (!movie) return null;
          const given = feedbackGiven[movie.id];

          return (
            <article key={slot.key} className="slot-card">
              <div className="slot-card__accent" style={{ background: slot.color }}></div>
              
              <div className="slot-card__header">
                <span className="slot-card__label" style={{ color: slot.color }}>{slot.label}</span>
                <span className="slot-card__sublabel">{slot.sublabel}</span>
              </div>

              <div className="slot-card__body">
                <img
                  src={getPosterUrl(movie.posterPath)}
                  alt={movie.titleKo}
                  className="slot-card__poster"
                />
                
                <div className="slot-card__info">
                  <h3 className="slot-card__title">{movie.titleKo}</h3>
                  <span className="slot-card__meta">{movie.releaseYear} · {movie.primaryGenre}</span>
                  
                  <p className="slot-card__overview">
                    {movie.overviewKo
                      ? (movie.overviewKo.length > 150 ? `${movie.overviewKo.slice(0, 150)}…` : movie.overviewKo)
                      : '시놉시스가 등록되지 않았습니다.'}
                  </p>

                  <div className="slot-card__reason">
                    <span className="slot-card__reason-label" style={{ color: slot.color }}>추천 사유</span>
                    <p>{reason}</p>
                  </div>

                  {given ? (
                    <div className="slot-card__done">
                      {given === 'like' ? '❤️ 내 취향으로 등록됨' : '🤷 별로로 등록됨'}
                    </div>
                  ) : (
                    <div className="slot-card__actions">
                      <button
                        className="action-btn action-btn--like"
                        onClick={() => handleFeedback(movie.id, 'like', 'seen', movie.titleKo)}
                      >
                        ❤️ 내 취향
                      </button>
                      <button
                        className="action-btn action-btn--pass"
                        onClick={() => handleFeedback(movie.id, 'dislike', 'seen', movie.titleKo)}
                      >
                        🤷 별로
                      </button>
                      <button
                        className="action-btn action-btn--want"
                        onClick={() => handleFeedback(movie.id, 'like', 'wantToWatch', movie.titleKo)}
                      >
                        👀 보고 싶어
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style jsx>{`
        .dash-page {
          padding: 20px 0 60px 0;
          animation: fadeIn 0.3s ease;
          position: relative;
        }

        /* 토스트 */
        .dash-toast {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          color: var(--text-main);
          font-weight: 500;
          padding: 12px 24px;
          border-radius: var(--radius-md);
          z-index: 3000;
          font-size: 0.85rem;
          animation: slideDown 0.25s ease-out;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }

        /* 헤더 */
        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 36px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .dash-header__date {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }
        .dash-header__title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
        }

        /* 슬롯 레이아웃 */
        .dash-slots {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* 슬롯 카드 */
        .slot-card {
          position: relative;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .slot-card:hover {
          border-color: var(--border-default);
        }

        .slot-card__accent {
          height: 3px;
          width: 100%;
        }

        .slot-card__header {
          padding: 16px 20px 0 20px;
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .slot-card__label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .slot-card__sublabel {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .slot-card__body {
          display: flex;
          flex-direction: column;
          padding: 16px 20px 20px 20px;
          gap: 16px;
        }
        @media (min-width: 580px) {
          .slot-card__body {
            flex-direction: row;
            gap: 20px;
          }
        }

        .slot-card__poster {
          width: 110px;
          height: 160px;
          object-fit: cover;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          flex-shrink: 0;
          align-self: center;
        }
        @media (min-width: 580px) {
          .slot-card__poster { align-self: flex-start; }
        }

        .slot-card__info {
          flex: 1;
          min-width: 0;
        }
        .slot-card__title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 4px;
        }
        .slot-card__meta {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 10px;
        }
        .slot-card__overview {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .slot-card__reason {
          padding: 10px 14px;
          background: rgba(255,255,255,0.02);
          border-left: 2px solid var(--border-subtle);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 16px;
        }
        .slot-card__reason-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }
        .slot-card__reason p {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .slot-card__actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 7px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          background: transparent;
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .action-btn--like:hover {
          background: var(--accent-rose-muted);
          border-color: var(--accent-rose);
          color: var(--accent-rose);
        }
        .action-btn--pass:hover {
          background: var(--accent-warm-muted);
          border-color: var(--accent-warm);
          color: var(--accent-warm);
        }
        .action-btn--want:hover {
          background: var(--primary-muted);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .slot-card__done {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
          padding: 8px 0;
        }
      `}</style>
    </div>
  );
}
