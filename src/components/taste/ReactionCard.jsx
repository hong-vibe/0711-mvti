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
        return <span className="badge sentiment-badge like">❤️ 좋았어요</span>;
      case 'dislike':
        return <span className="badge sentiment-badge dislike">👎 별로였어요</span>;
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
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 20px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .reaction-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .reaction-card.sentiment-like {
          border-left: 4px solid #e53e3e;
        }

        .reaction-card.sentiment-dislike {
          border-left: 4px solid #dd6b20;
        }

        .reaction-card.sentiment-neutral {
          border-left: 4px solid #718096;
        }

        .card-poster-wrapper {
          position: relative;
          width: 90px;
          min-width: 90px;
          height: 100%;
          background: #1a202c;
        }

        @media (min-width: 480px) {
          .card-poster-wrapper {
            width: 120px;
            min-width: 120px;
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
          margin-bottom: 12px;
        }

        .card-title {
          margin: 0;
          font-size: 1.1rem;
          color: #fff;
          font-weight: 700;
          line-height: 1.3;
        }

        .card-meta {
          font-size: 0.8rem;
          color: #a0aec0;
          margin-top: 4px;
          display: block;
        }

        .badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .sentiment-badge.like {
          background: rgba(229, 62, 109, 0.9);
          color: #fff;
        }

        .sentiment-badge.dislike {
          background: rgba(221, 107, 32, 0.9);
          color: #fff;
        }

        .sentiment-badge.neutral {
          background: rgba(74, 85, 104, 0.9);
          color: #fff;
        }

        .status-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
        }

        .status-badge.seen {
          border-color: rgba(102, 252, 241, 0.3);
          color: var(--primary-color, #66fcf1);
        }

        .card-body {
          margin-bottom: 16px;
          flex: 1;
        }

        .strength-display {
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          color: #cbd5e0;
          margin-bottom: 10px;
        }

        .strength-icons {
          display: flex;
          gap: 2px;
          margin-left: 6px;
        }

        .strength-icon {
          font-size: 0.85rem;
        }

        .card-note {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 6px;
          padding: 8px 12px;
        }

        .card-note.empty {
          background: transparent;
          border: none;
          padding: 0;
        }

        .note-label {
          display: block;
          font-size: 0.75rem;
          color: #718096;
          margin-bottom: 4px;
        }

        .note-text {
          margin: 0;
          font-size: 0.85rem;
          color: #e2e8f0;
          font-style: italic;
          line-height: 1.4;
        }

        .card-note.empty .note-text {
          color: #4a5568;
          font-style: normal;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 12px;
          margin-top: auto;
        }

        .card-date {
          font-size: 0.75rem;
          color: #718096;
        }

        .card-actions {
          display: flex;
          gap: 8px;
        }

        .btn-card-edit {
          background: transparent;
          border: 1px solid rgba(102, 252, 241, 0.3);
          color: var(--primary-color, #66fcf1);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-card-edit:hover {
          background: rgba(102, 252, 241, 0.1);
          border-color: var(--primary-color, #66fcf1);
        }

        .btn-card-delete {
          background: transparent;
          border: 1px solid rgba(229, 62, 109, 0.3);
          color: #fc8181;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-card-delete:hover {
          background: rgba(229, 62, 109, 0.1);
          border-color: #e53e3e;
        }
      `}</style>
    </div>
  );
}
