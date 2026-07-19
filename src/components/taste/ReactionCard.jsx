import React from 'react';
import moviesData from '../../data/movies.json';

/**
 * ReactionCard 컴포넌트 - 사용자의 개별 영화 반응 카드
 * @param {object} props { reaction, onEditClick, onDeleteClick }
 */
export default function ReactionCard({ reaction, onEditClick, onDeleteClick }) {
  const { movieId, sentiment, strength, watchStatus, note, updatedAt } = reaction;

  // 영화 메타데이터 매핑
  const movie = moviesData.find((m) => m.id === movieId);

  if (!movie) {
    return (
      <div className="reaction-card error">
        <p>⚠️ 영화 데이터를 찾을 수 없습니다. (ID: {movieId})</p>
      </div>
    );
  }

  // 포스터 이미지 URL 헬퍼
  const getPosterUrl = (posterPath) => {
    if (!posterPath) return '/poster-placeholder.svg';
    if (posterPath.startsWith('http')) return posterPath;
    return `https://image.tmdb.org/t/p/w200${posterPath}`;
  };

  // 반응 렌더링 헬퍼
  const renderSentiment = () => {
    switch (sentiment) {
      case 'like':
        return <span className="badge sentiment-badge like">❤️ 내 취향</span>;
      case 'dislike':
        return <span className="badge sentiment-badge dislike">🤷 나는 별로</span>;
      case 'neutral':
      default:
        return <span className="badge sentiment-badge neutral">😐 그냥 그래요</span>;
    }
  };

  // 강도 렌더링 헬퍼 (별 또는 하트 등으로 강도를 시각화)
  const renderStrength = () => {
    if (sentiment === 'neutral') return null;
    
    const icons = [];
    const iconChar = sentiment === 'like' ? '🔥' : '⚡'; // 선호는 불꽃, 불호는 번개 등으로 시각적 차별화
    for (let i = 0; i < strength; i++) {
      icons.push(<span key={i} className="strength-icon">{iconChar}</span>);
    }

    const text = strength === 1 ? '약함' : strength === 2 ? '보통' : '강렬함';

    return (
      <div className="strength-display">
        <span className="strength-text">강도 ({text}): </span>
        <div className="strength-icons">{icons}</div>
      </div>
    );
  };

  // 관람상태 렌더링
  const renderWatchStatus = () => {
    switch (watchStatus) {
      case 'seen':
        return <span className="badge status-badge seen">이미 봄</span>;
      case 'wantToWatch':
        return <span className="badge status-badge want">보고 싶음</span>;
      case 'notNow':
        return <span className="badge status-badge not-now">관심 없음</span>;
      default:
        return null;
    }
  };

  const formattedDate = new Date(updatedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className={`reaction-card glass-panel sentiment-${sentiment}`}>
      <div className="card-poster-wrapper">
        <img src={getPosterUrl(movie.posterPath)} alt={movie.titleKo} className="card-poster" />
        <div className="card-sentiment-overlay">{renderSentiment()}</div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <div className="card-title-group">
            <h4 className="card-title">{movie.titleKo}</h4>
            <span className="card-meta">{movie.releaseYear} • {movie.primaryGenre}</span>
          </div>
          <div className="card-status">{renderWatchStatus()}</div>
        </div>

        <div className="card-body">
          {renderStrength()}

          {note ? (
            <div className="card-note">
              <span className="note-label">나의 기록:</span>
              <p className="note-text">"{note}"</p>
            </div>
          ) : (
            <div className="card-note empty">
              <p className="note-text">작성된 메모가 없습니다.</p>
            </div>
          )}
        </div>

        <div className="card-footer">
          <span className="card-date">최종 수정: {formattedDate}</span>
          <div className="card-actions">
            <button className="btn-card-edit" onClick={() => onEditClick(reaction)}>수정</button>
            <button className="btn-card-delete" onClick={() => onDeleteClick(reaction.id)}>삭제</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reaction-card {
          display: flex;
          flex-direction: row;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 16px;
          transition: var(--transition-smooth);
        }

        .reaction-card:hover {
          transform: translateY(-1px);
          border-color: var(--border-default);
        }

        .reaction-card.sentiment-like {
          border-left: 3px solid var(--accent-rose);
        }

        .reaction-card.sentiment-dislike {
          border-left: 3px solid var(--accent-warm);
        }

        .reaction-card.sentiment-neutral {
          border-left: 3px solid var(--text-muted);
        }

        .card-poster-wrapper {
          position: relative;
          width: 90px;
          min-width: 90px;
          height: 100%;
          background: var(--bg-surface);
        }

        @media (min-width: 480px) {
          .card-poster-wrapper {
            width: 110px;
            min-width: 110px;
          }
        }

        .card-poster {
          width: 100%;
          height: 100%;
          min-height: 130px;
          object-fit: cover;
          display: block;
        }

        .card-sentiment-overlay {
          position: absolute;
          bottom: 8px;
          left: 4px;
          right: 4px;
          text-align: center;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          justify-content: space-between;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 10px;
        }

        .card-title {
          margin: 0;
          font-size: 1.05rem;
          color: var(--text-main);
          font-weight: 700;
          line-height: 1.3;
        }

        .card-meta {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 4px;
          display: block;
        }

        .badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }

        .sentiment-badge.like {
          background: var(--accent-rose-muted);
          color: var(--accent-rose);
          border: 1px solid var(--accent-rose);
        }

        .sentiment-badge.dislike {
          background: var(--accent-warm-muted);
          color: var(--accent-warm);
          border: 1px solid var(--accent-warm);
        }

        .sentiment-badge.neutral {
          background: var(--bg-surface);
          color: var(--text-secondary);
          border: 1px solid var(--border-default);
        }

        .status-badge {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
        }

        .status-badge.seen {
          border-color: rgba(93, 228, 216, 0.2);
          color: var(--primary-color);
        }

        .card-body {
          margin-bottom: 14px;
          flex: 1;
        }

        .strength-display {
          display: flex;
          align-items: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .strength-icons {
          display: flex;
          gap: 2px;
          margin-left: 6px;
        }

        .strength-icon {
          font-size: 0.8rem;
        }

        .card-note {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
        }

        .card-note.empty {
          background: transparent;
          border: none;
          padding: 0;
        }

        .note-label {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 2px;
          font-weight: 500;
        }

        .note-text {
          margin: 0;
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-style: italic;
          line-height: 1.4;
        }

        .card-note.empty .note-text {
          color: var(--text-muted);
          font-style: normal;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-subtle);
          padding-top: 10px;
          margin-top: auto;
        }

        .card-date {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .card-actions {
          display: flex;
          gap: 6px;
        }

        .btn-card-edit {
          background: transparent;
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          padding: 5px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-card-edit:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background: var(--primary-muted);
        }

        .btn-card-delete {
          background: transparent;
          border: 1px solid rgba(229, 90, 111, 0.2);
          color: var(--danger-color);
          padding: 5px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-card-delete:hover {
          background: rgba(229, 90, 111, 0.08);
          border-color: var(--danger-color);
        }
      `}</style>
    </div>
  );
}
