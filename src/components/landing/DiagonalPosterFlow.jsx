import React from 'react';
import moviesData from '../../data/movies.json';

/**
 * 랜딩 페이지 사선 포스터 흐름 애니메이션 컴포넌트
 * @param {object} props { onMovieClick, selectedMovieIds }
 */
export default function DiagonalPosterFlow({ onMovieClick, selectedMovieIds = [], reactions = [] }) {
  // 온보딩에 노출하기 적절하고 인지도가 높은 48편만 골라 3개 레인(각 16편)으로 분할
  // seed 데이터 중 8개 장르별로 균등하게 6편씩 총 48편 추출
  const targetMovies = React.useMemo(() => {
    const genres = [
      '드라마', '코미디', '액션·어드벤처', 'SF',
      '판타지·애니메이션', '스릴러·미스터리·범죄', '공포', '로맨스'
    ];
    const selected = [];
    genres.forEach(g => {
      const filtered = moviesData.filter(m => m.primaryGenre === g).slice(0, 6);
      selected.push(...filtered);
    });
    return selected;
  }, []);

  const reactionMap = React.useMemo(() => {
    const map = {};
    reactions.forEach(r => {
      map[r.movieId] = r.sentiment;
    });
    return map;
  }, [reactions]);

  const row1 = targetMovies.slice(0, 16);
  const row2 = targetMovies.slice(16, 32);
  const row3 = targetMovies.slice(32, 48);

  // 무한 롤링 루프를 위해 배열을 3배 복사하여 렌더링
  const getTripleArray = (arr) => [...arr, ...arr, ...arr];

  return (
    <div className="poster-flow-container" aria-label="영화 선택 포스터 플로우">
      {/* 1번 레인 (왼쪽 스크롤) */}
      <div className="poster-row flow-left">
        {getTripleArray(row1).map((movie, idx) => {
          const sentiment = reactionMap[movie.id];
          const isSelected = selectedMovieIds.includes(movie.id) || !!sentiment;
          return (
            <PosterItem
              key={`row1-${movie.id}-${idx}`}
              movie={movie}
              isSelected={isSelected}
              sentiment={sentiment}
              onClick={() => onMovieClick(movie)}
              index={idx}
            />
          );
        })}
      </div>

      {/* 2번 레인 (오른쪽 스크롤) */}
      <div className="poster-row flow-right">
        {getTripleArray(row2).map((movie, idx) => {
          const sentiment = reactionMap[movie.id];
          const isSelected = selectedMovieIds.includes(movie.id) || !!sentiment;
          return (
            <PosterItem
              key={`row2-${movie.id}-${idx}`}
              movie={movie}
              isSelected={isSelected}
              sentiment={sentiment}
              onClick={() => onMovieClick(movie)}
              index={idx}
            />
          );
        })}
      </div>

      {/* 3번 레인 (왼쪽 스크롤) */}
      <div className="poster-row flow-left">
        {getTripleArray(row3).map((movie, idx) => {
          const sentiment = reactionMap[movie.id];
          const isSelected = selectedMovieIds.includes(movie.id) || !!sentiment;
          return (
            <PosterItem
              key={`row3-${movie.id}-${idx}`}
              movie={movie}
              isSelected={isSelected}
              sentiment={sentiment}
              onClick={() => onMovieClick(movie)}
              index={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

/**
 * 개별 포스터 아이템 컴포넌트 (내부 최적화)
 */
function PosterItem({ movie, isSelected, sentiment, onClick, index }) {
  const [imgSrc, setImgSrc] = React.useState(movie.posterPath);

  const handleImageError = () => {
    setImgSrc('/poster-placeholder.svg');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const renderBadge = () => {
    if (sentiment === 'like') {
      return <div className="selected-badge badge-like">❤️ 내 취향</div>;
    }
    if (sentiment === 'dislike') {
      return <div className="selected-badge badge-dislike">🤷 별로</div>;
    }
    if (isSelected) {
      return <div className="selected-badge">✓ 선택됨</div>;
    }
    return null;
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`poster-card ${isSelected ? 'selected' : ''} ${sentiment ? `sentiment-${sentiment}` : ''}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      style={{ animationDelay: `${(index % 16) * 0.05}s` }}
      aria-label={`${movie.titleKo} (${movie.releaseYear}년)`}
      aria-pressed={isSelected}
    >
      <img
        src={imgSrc}
        alt={`${movie.titleKo} 포스터`}
        onError={handleImageError}
        loading="lazy"
      />
      <div className="poster-overlay">
        <p className="poster-title">{movie.titleKo}</p>
        <span className="poster-genre">{movie.primaryGenre}</span>
      </div>
      {renderBadge()}

      <style jsx>{`
        .poster-card {
          position: relative;
          width: 140px;
          height: 210px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          background: #1f2833;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s;
          border: 2px solid transparent;
          opacity: 0;
          animation: cardFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes cardFadeIn {
          to {
            opacity: 1;
          }
        }

        .poster-card:hover, .poster-card:focus-visible {
          outline: none;
          transform: translateY(-8px) scale(1.05) skewY(5deg); /* 사선 역보정 */
          border-color: var(--primary-color);
          box-shadow: 0 8px 25px var(--primary-glow);
          z-index: 10;
        }

        .poster-card.selected {
          border-color: var(--primary-color);
        }

        .poster-card.sentiment-like {
          border-color: #fc8181;
          box-shadow: 0 0 15px rgba(229, 62, 109, 0.4);
        }

        .poster-card.sentiment-dislike {
          border-color: #fbd38d;
          box-shadow: 0 0 15px rgba(221, 107, 32, 0.4);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .poster-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(0deg, rgba(11,12,16,1) 0%, rgba(11,12,16,0) 100%);
          padding: 15px 10px 10px 10px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .poster-card:hover .poster-overlay, .poster-card:focus-visible .poster-overlay {
          opacity: 1;
        }

        .poster-title {
          font-family: var(--font-title);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .poster-genre {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .selected-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: var(--primary-color);
          color: var(--bg-color);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .selected-badge.badge-like {
          background: #e53e3e;
          color: #fff;
          box-shadow: 0 2px 8px rgba(229, 62, 109, 0.4);
        }

        .selected-badge.badge-dislike {
          background: #dd6b20;
          color: #fff;
          box-shadow: 0 2px 8px rgba(221, 107, 32, 0.4);
        }
      `}</style>
    </div>
  );
}
