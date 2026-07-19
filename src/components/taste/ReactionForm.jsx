import React, { useState, useEffect, useRef } from 'react';
import moviesData from '../../data/movies.json';

/**
 * ReactionForm 컴포넌트 - 신규 영화 검색 및 취향 반응 추가 폼
 * @param {object} props { onAddSuccess, existingMovieIds }
 */
export default function ReactionForm({ onAddSuccess, existingMovieIds = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // 반응 필드 상태
  const [sentiment, setSentiment] = useState('like');
  const [strength, setStrength] = useState(2);
  const [watchStatus, setWatchStatus] = useState('seen');
  const [note, setNote] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const dropdownRef = useRef(null);

  // 검색 로직
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = moviesData.filter(movie => {
      const term = searchTerm.toLowerCase();
      const matchKo = movie.titleKo?.toLowerCase().includes(term);
      const matchOri = movie.originalTitle?.toLowerCase().includes(term);
      // 이미 반응이 추가된 영화는 제외
      const isAlreadyAdded = existingMovieIds.includes(movie.id);
      return (matchKo || matchOri) && !isAlreadyAdded;
    });

    setSearchResults(filtered.slice(0, 8)); // 최대 8개만 노출
  }, [searchTerm, existingMovieIds]);

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setSearchTerm('');
    setSearchResults([]);
    setShowDropdown(false);
    setErrorMsg('');
  };

  const handleCancelSelection = () => {
    setSelectedMovie(null);
    setSentiment('like');
    setStrength(2);
    setWatchStatus('seen');
    setNote('');
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMovie) {
      setErrorMsg('영화를 먼저 선택해주세요.');
      return;
    }

    try {
      // 상위로 반응 정보 전달
      onAddSuccess({
        movieId: selectedMovie.id,
        sentiment,
        strength: Number(strength),
        watchStatus,
        note: note.trim()
      });
      // 폼 초기화
      handleCancelSelection();
    } catch (err) {
      setErrorMsg(err.message || '반응 등록에 실패했습니다.');
    }
  };

  // 포스터 이미지 URL 처리 헬퍼
  const getPosterUrl = (posterPath) => {
    if (!posterPath) return '/poster-placeholder.svg';
    if (posterPath.startsWith('http')) return posterPath;
    return `https://image.tmdb.org/t/p/w200${posterPath}`;
  };

  return (
    <div className="reaction-form-container glass-panel">
      <h3 className="form-title">영화 반응 추가</h3>
      
      {!selectedMovie ? (
        <div className="search-section" ref={dropdownRef}>
          <label className="form-label">영화 검색</label>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="영화 제목을 입력하세요 (예: 쇼생크 탈출, 인터스텔라)..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          {showDropdown && searchResults.length > 0 && (
            <ul className="search-dropdown">
              {searchResults.map((movie) => (
                <li key={movie.id} onClick={() => handleSelectMovie(movie)} className="dropdown-item">
                  <img src={getPosterUrl(movie.posterPath)} alt={movie.titleKo} className="dropdown-poster" />
                  <div className="dropdown-info">
                    <span className="dropdown-title">{movie.titleKo}</span>
                    <span className="dropdown-meta">{movie.releaseYear} • {movie.primaryGenre}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {showDropdown && searchTerm.trim() && searchResults.length === 0 && (
            <div className="search-no-results">검색 결과가 없거나 이미 등록된 영화입니다.</div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-content">
          <div className="selected-movie-header">
            <img src={getPosterUrl(selectedMovie.posterPath)} alt={selectedMovie.titleKo} className="selected-poster" />
            <div className="selected-info">
              <h4>{selectedMovie.titleKo}</h4>
              <p className="selected-meta">{selectedMovie.releaseYear} • {selectedMovie.primaryGenre}</p>
              <button type="button" className="btn-change-movie" onClick={handleCancelSelection}>다른 영화 선택</button>
            </div>
          </div>

          <div className="form-grid">
            {/* 반응 종류 */}
            <div className="form-group">
              <label className="form-label">나의 반응</label>
              <div className="sentiment-selector">
                <button
                  type="button"
                  className={`btn-sentiment like ${sentiment === 'like' ? 'active' : ''}`}
                  onClick={() => setSentiment('like')}
                >
                  ❤️ 내 취향
                </button>
                <button
                  type="button"
                  className={`btn-sentiment dislike ${sentiment === 'dislike' ? 'active' : ''}`}
                  onClick={() => setSentiment('dislike')}
                >
                  🤷 나는 별로
                </button>
              </div>
            </div>

            {/* 반응 강도 (좋아요/싫어요 일때만 의미있음) */}
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
          </div>

          {/* 한줄 메모 */}
          <div className="form-group">
            <label className="form-label">나만의 감상평/메모 (선택)</label>
            <textarea
              placeholder="이 영화에 대해 느낀 주관적인 평가를 가볍게 적어주세요. (최대 200자)"
              value={note}
              onChange={(e) => setNote(e.target.value.slice(0, 200))}
              className="form-textarea"
              rows={3}
            />
            <div className="textarea-counter">{note.length}/200자</div>
          </div>

          {errorMsg && <div className="form-error">⚠️ {errorMsg}</div>}

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={handleCancelSelection}>취소</button>
            <button type="submit" className="btn-submit">기록 저장하기</button>
          </div>
        </form>
      )}

      <style jsx>{`
        .reaction-form-container {
          padding: 24px;
          margin-bottom: 30px;
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
        }

        .form-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main, #ffffff);
          margin-top: 0;
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-desc, #a0aec0);
          margin-bottom: 8px;
        }

        .search-section {
          position: relative;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-input {
          width: 100%;
          padding: 12px 40px 12px 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          border-color: var(--primary-color);
        }

        .search-icon {
          position: absolute;
          right: 14px;
          color: #a0aec0;
          font-size: 1.1rem;
        }

        .search-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-md);
          margin-top: 5px;
          padding: 0;
          list-style: none;
          max-height: 280px;
          overflow-y: auto;
          z-index: 1000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 10px 14px;
          cursor: pointer;
          transition: background 0.2s;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .dropdown-poster {
          width: 36px;
          height: 50px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 12px;
          background: #2d3748;
        }

        .dropdown-info {
          display: flex;
          flex-direction: column;
        }

        .dropdown-title {
          font-size: 0.95rem;
          color: #fff;
          font-weight: 500;
        }

        .dropdown-meta {
          font-size: 0.8rem;
          color: #a0aec0;
          margin-top: 2px;
        }

        .search-no-results {
          padding: 14px;
          text-align: center;
          color: #a0aec0;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          margin-top: 5px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .selected-movie-header {
          display: flex;
          align-items: center;
          padding: 14px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .selected-poster {
          width: 50px;
          height: 70px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 16px;
        }

        .selected-info h4 {
          margin: 0 0 4px 0;
          font-size: 1.1rem;
          color: #fff;
        }

        .selected-meta {
          margin: 0 0 8px 0;
          font-size: 0.85rem;
          color: #a0aec0;
        }

        .btn-change-movie {
          background: transparent;
          border: none;
          color: var(--accent-warm);
          font-size: 0.8rem;
          text-decoration: underline;
          cursor: pointer;
          padding: 0;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: 2fr 1.2fr 1fr;
          }
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
          background: var(--primary-muted);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .form-select {
          width: 100%;
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
          width: 100%;
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
          border-color: var(--primary-color);
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
          margin-bottom: 20px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
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
          border-radius: var(--radius-md);
          background: var(--primary-color);
          border: none;
          color: var(--bg-color);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-submit:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
