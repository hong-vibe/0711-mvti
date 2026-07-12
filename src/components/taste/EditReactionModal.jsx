import React, { useState, useEffect } from 'react';
import moviesData from '../../data/movies.json';

/**
 * EditReactionModal 컴포넌트 - 영화 반응 수정을 위한 글래스모피즘 모달 창
 * @param {object} props { reaction, isOpen, onClose, onSave }
 */
export default function EditReactionModal({ reaction, isOpen, onClose, onSave }) {
  const [sentiment, setSentiment] = useState('like');
  const [strength, setStrength] = useState(2);
  const [watchStatus, setWatchStatus] = useState('seen');
  const [note, setNote] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // 모달이 열리거나 reaction이 바뀔 때 초기 상태 세팅
  useEffect(() => {
    if (reaction) {
      setSentiment(reaction.sentiment || 'like');
      setStrength(reaction.strength || 2);
      setWatchStatus(reaction.watchStatus || 'seen');
      setNote(reaction.note || '');
      setErrorMsg('');
    }
  }, [reaction, isOpen]);

  if (!isOpen || !reaction) return null;

  const movie = moviesData.find((m) => m.id === reaction.movieId);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      onSave(reaction.id, {
        sentiment,
        strength: Number(strength),
        watchStatus,
        note: note.trim(),
      });
      onClose();
    } catch (err) {
      setErrorMsg(err.message || '수정에 실패했습니다.');
    }
  };

  const getPosterUrl = (posterPath) => {
    if (!posterPath) return '/poster-placeholder.svg';
    if (posterPath.startsWith('http')) return posterPath;
    return `https://image.tmdb.org/t/p/w200${posterPath}`;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass-panel">
        <button className="btn-modal-close" onClick={onClose}>✕</button>
        
        <h3 className="modal-title">✏️ 취향 기록 수정</h3>

        {movie && (
          <div className="modal-movie-info">
            <img src={getPosterUrl(movie.posterPath)} alt={movie.titleKo} className="modal-poster" />
            <div className="modal-movie-text">
              <h4>{movie.titleKo}</h4>
              <p>{movie.releaseYear} • {movie.primaryGenre}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          {/* 반응 종류 */}
          <div className="form-group">
            <label className="form-label">나의 반응</label>
            <div className="sentiment-selector">
              <button
                type="button"
                className={`btn-sentiment like ${sentiment === 'like' ? 'active' : ''}`}
                onClick={() => setSentiment('like')}
              >
                ❤️ 좋았어요
              </button>
              <button
                type="button"
                className={`btn-sentiment dislike ${sentiment === 'dislike' ? 'active' : ''}`}
                onClick={() => setSentiment('dislike')}
              >
                👎 별로였어요
              </button>
              <button
                type="button"
                className={`btn-sentiment neutral ${sentiment === 'neutral' ? 'active' : ''}`}
                onClick={() => setSentiment('neutral')}
              >
                😐 그냥 그래요
              </button>
            </div>
          </div>

          {/* 반응 강도 */}
          <div className="form-group">
            <label className="form-label">반응 강도</label>
            <div className="strength-selector">
              {[1, 2, 3].map((val) => (
                <button
                  key={val}
                  type="button"
                  className={`btn-strength ${strength === val ? 'active' : ''}`}
                  onClick={() => setStrength(val)}
                >
                  {val === 1 && '잔잔함'}
                  {val === 2 && '보통'}
                  {val === 3 && '강렬함'}
                </button>
              ))}
            </div>
          </div>

          {/* 관람 상태 */}
          <div className="form-group">
            <label className="form-label">관람 상태</label>
            <select
              value={watchStatus}
              onChange={(e) => setWatchStatus(e.target.value)}
              className="form-select"
            >
              <option value="seen">이미 봄</option>
              <option value="wantToWatch">보고 싶음</option>
              <option value="notNow">관심 없음</option>
            </select>
          </div>

          {/* 한줄 메모 */}
          <div className="form-group">
            <label className="form-label">나만의 감상평/메모</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value.slice(0, 200))}
              className="form-textarea"
              rows={3}
              placeholder="감상을 수정해 보세요."
            />
            <div className="textarea-counter">{note.length}/200자</div>
          </div>

          {errorMsg && <div className="form-error">⚠️ {errorMsg}</div>}

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>취소</button>
            <button type="submit" className="btn-submit">변경사항 저장</button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(8px);
          padding: 20px;
        }

        .modal-content {
          position: relative;
          width: 100%;
          max-width: 550px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          max-height: 90vh;
          overflow-y: auto;
        }

        .btn-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: #a0aec0;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 4px;
        }

        .btn-modal-close:hover {
          color: #fff;
        }

        .modal-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 20px;
          color: #fff;
        }

        .modal-movie-info {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .modal-poster {
          width: 44px;
          height: 60px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 14px;
        }

        .modal-movie-text h4 {
          margin: 0 0 4px 0;
          font-size: 1rem;
          color: #fff;
        }

        .modal-movie-text p {
          margin: 0;
          font-size: 0.8rem;
          color: #a0aec0;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #a0aec0;
          margin-bottom: 8px;
        }

        .sentiment-selector {
          display: flex;
          gap: 8px;
        }

        .btn-sentiment {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          color: #a0aec0;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-sentiment.like.active {
          background: rgba(229, 62, 109, 0.15);
          border-color: #e53e3e;
          color: #fc8181;
        }

        .btn-sentiment.dislike.active {
          background: rgba(221, 107, 32, 0.15);
          border-color: #dd6b20;
          color: #fbd38d;
        }

        .btn-sentiment.neutral.active {
          background: rgba(74, 85, 104, 0.3);
          border-color: #718096;
          color: #e2e8f0;
        }

        .strength-selector {
          display: flex;
          gap: 6px;
        }

        .btn-strength {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          color: #a0aec0;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-strength.active {
          background: rgba(102, 252, 241, 0.12);
          border-color: var(--primary-color, #66fcf1);
          color: var(--primary-color, #66fcf1);
        }

        .form-select {
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
        }

        .form-textarea {
          padding: 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 0.9rem;
          resize: none;
          outline: none;
        }

        .form-textarea:focus {
          border-color: var(--primary-color, #66fcf1);
        }

        .textarea-counter {
          text-align: right;
          font-size: 0.75rem;
          color: #718096;
          margin-top: 4px;
        }

        .form-error {
          padding: 10px 14px;
          background: rgba(229, 62, 109, 0.1);
          border: 1px solid #e53e3e;
          border-radius: 8px;
          color: #fc8181;
          font-size: 0.85rem;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 10px;
        }

        .btn-cancel {
          padding: 10px 20px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #a0aec0;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-cancel:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-submit {
          padding: 10px 24px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--secondary-color, #c8a2c8) 0%, var(--primary-color, #66fcf1) 100%);
          border: none;
          color: #121212;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(102, 252, 241, 0.25);
        }
      `}</style>
    </div>
  );
}
