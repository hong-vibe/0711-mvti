import React from 'react';

/**
 * 하단 고정 영화 선택 트레이 컴포넌트
 * @param {object} props { selectedMovies, onRemoveMovie, onSubmit, minRequired = 6 }
 */
export default function SelectionTray({ selectedMovies, onRemoveMovie, onSubmit, minRequired = 6 }) {
  const count = selectedMovies.length;
  const isReady = count >= minRequired;
  const progressPercent = Math.min((count / minRequired) * 100, 100);

  return (
    <div className="selection-tray glass-panel" aria-label="선택한 영화 트레이">
      <div className="tray-content">
        
        {/* 왼쪽 영역: 카운트 및 프로그레스 */}
        <div className="tray-info">
          <div className="info-text">
            <h4>좋아하는 영화 고르기</h4>
            <p className="counter">
              <span>{count}</span> / {minRequired} 편 선택됨
            </p>
          </div>
          <div className="progress-track" aria-hidden="true">
            <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="guide-text">
            {isReady 
              ? "🎉 분석 준비가 완료되었습니다! 버튼을 눌러주세요." 
              : `최소 ${minRequired}편 이상을 선택하시면 취향 분석이 시작됩니다.`}
          </p>
        </div>

        {/* 중앙 영역: 선택한 미니 포스터 카드 리스트 */}
        <div className="tray-list">
          {selectedMovies.length === 0 ? (
            <div className="empty-tray-msg">위의 움직이는 포스터에서 좋아하는 영화를 탭해보세요.</div>
          ) : (
            selectedMovies.map(movie => (
              <MiniPosterCard 
                key={`mini-${movie.id}`} 
                movie={movie} 
                onRemove={() => onRemoveMovie(movie.id)} 
              />
            ))
          )}
        </div>

        {/* 오른쪽 영역: 분석 시작 CTA 버튼 */}
        <div className="tray-action">
          <button 
            className={`btn-start ${isReady ? 'active' : ''}`}
            disabled={!isReady}
            onClick={onSubmit}
          >
            취향 분석 시작
            <span className="btn-glow-effect"></span>
          </button>
        </div>

      </div>

      <style jsx>{`
        .selection-tray {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          z-index: 1000;
          border-radius: 20px 20px 0 0;
          border-left: none;
          border-right: none;
          border-bottom: none;
          background: rgba(11, 12, 16, 0.85);
          box-shadow: 0 -10px 40px rgba(0,0,0,0.6);
          padding: 10px 30px;
        }

        .tray-content {
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        /* 1. 왼쪽 정보 구역 */
        .tray-info {
          flex-shrink: 0;
          width: 250px;
        }

        .info-text {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .info-text h4 {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .counter {
          font-size: 0.9rem;
          color: var(--text-desc);
          font-weight: 500;
        }

        .counter span {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .progress-track {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--secondary-color) 0%, var(--primary-color) 100%);
          border-radius: 10px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .guide-text {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* 2. 중앙 리스트 구역 */
        .tray-list {
          display: flex;
          flex-grow: 1;
          gap: 12px;
          overflow-x: auto;
          padding: 5px 10px;
          height: 90px;
          align-items: center;
          background: rgba(0,0,0,0.2);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.03);
        }

        .tray-list::-webkit-scrollbar {
          height: 4px;
        }

        .empty-tray-msg {
          font-size: 0.85rem;
          color: var(--text-desc);
          text-align: center;
          width: 100%;
          opacity: 0.7;
        }

        /* 3. 오른쪽 시작 버튼 */
        .tray-action {
          flex-shrink: 0;
        }

        .btn-start {
          position: relative;
          background: #1f2833;
          color: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.05);
          font-family: var(--font-title);
          font-size: 1rem;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 12px;
          cursor: not-allowed;
          transition: var(--transition-smooth);
          overflow: hidden;
        }

        .btn-start.active {
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
          color: var(--bg-color);
          border-color: transparent;
          cursor: pointer;
          box-shadow: 0 4px 20px var(--primary-glow);
        }

        .btn-start.active:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px var(--primary-glow), 0 0 15px var(--secondary-glow);
        }

        .btn-start.active:active {
          transform: translateY(1px);
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .selection-tray {
            height: 180px;
            padding: 10px 15px;
          }
          .tray-content {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .tray-info {
            width: 100%;
          }
          .tray-list {
            height: 70px;
          }
          .btn-start {
            width: 100%;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * 미니 포스터 카드 컴포넌트
 */
function MiniPosterCard({ movie, onRemove }) {
  const [imgSrc, setImgSrc] = React.useState(movie.posterPath);

  return (
    <div className="mini-card" aria-label={`${movie.titleKo} 선택 취소 가능`}>
      <img 
        src={imgSrc} 
        alt="" 
        onError={() => setImgSrc('/poster-placeholder.svg')} 
      />
      <button 
        className="btn-remove" 
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        aria-label={`${movie.titleKo} 선택 해제`}
      >
        ×
      </button>
      
      <style jsx>{`
        .mini-card {
          position: relative;
          width: 50px;
          height: 75px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
          transition: transform 0.2s;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .mini-card:hover {
          transform: scale(1.08);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .btn-remove {
          position: absolute;
          top: 2px;
          right: 2px;
          background: rgba(255, 77, 77, 0.95);
          color: white;
          border: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          line-height: 14px;
          text-align: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }

        .mini-card:hover .btn-remove {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
