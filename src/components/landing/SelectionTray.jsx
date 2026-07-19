import React from 'react';

/**
 * 하단 고정 영화 선택 트레이 컴포넌트 (좋아하는 영화 / 싫어하는 영화 2단계 모드 지원)
 * @param {object} props { selectedMovies, onRemoveMovie, onSubmit, minRequired = 3, mode = 'like' }
 */
export default function SelectionTray({ selectedMovies, onRemoveMovie, onSubmit, minRequired = 3, mode = 'like' }) {
  const count = selectedMovies.length;
  const isReady = count >= minRequired;
  const progressPercent = minRequired === 0 ? 100 : Math.min((count / minRequired) * 100, 100);

  const isLikeMode = mode === 'like';
  const isOnboardingCompleted = minRequired === 0;

  // 모드별 텍스트 및 가이드 다이내믹 변경
  const titleText = isLikeMode ? "1단계: 좋아하는 명작 고르기" : "2단계: 굳이 싫어하는 명작 고르기";
  
  let guideText = '';
  if (isOnboardingCompleted) {
    guideText = isLikeMode 
      ? "💡 포스터를 누르면 즉시 '내 취향' 리스트에 가감 및 취향이 실시간 업데이트됩니다."
      : "💡 포스터를 누르면 즉시 '나는 별로' 리스트에 가감 및 취향이 실시간 업데이트됩니다.";
  } else {
    guideText = isLikeMode
      ? (isReady ? "🎉 다음 단계(불호 영화 선택)로 진행할 수 있습니다." : `좋아하는 영화를 최소 ${minRequired}편 이상 선택해주세요.`)
      : (isReady ? "🎉 준비 완료! 이제 성격(MBTI) 정보를 입력하러 갑니다." : `남들은 인생작이라 하지만, 나는 굳이 싫은 명작을 최소 ${minRequired}편 선택해주세요.`);
  }
  
  let buttonText = '';
  if (isOnboardingCompleted) {
    buttonText = isLikeMode ? "다음 (불호 편집) ➔" : "완료 (진단서로) ➔";
  } else {
    buttonText = isLikeMode ? "다음 단계로" : "MBTI 입력하기";
  }

  // 모드별 CSS 변수 동적 설정 (like: 네온 시안, dislike: 네온 엠버)
  const activeColor = isLikeMode ? "#66fcf1" : "#ff9f1c";
  const activeGlow = isLikeMode ? "rgba(102, 252, 241, 0.4)" : "rgba(255, 159, 28, 0.4)";

  return (
    <div 
      className={`selection-tray glass-panel ${mode}-mode`} 
      style={{
        '--active-color': activeColor,
        '--active-glow': activeGlow
      }}
      aria-label="영화 선택 트레이"
    >
      <div className="tray-content">
        
        {/* 왼쪽 영역: 카운트 및 프로그레스 */}
        <div className="tray-info">
          <div className="info-text">
            <h4>{titleText}</h4>
            <p className="counter">
              <span>{count}</span> / {minRequired} 편 선택됨
            </p>
          </div>
          <div className="progress-track" aria-hidden="true">
            <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="guide-text">{guideText}</p>
        </div>

        {/* 중앙 영역: 선택한 미니 포스터 카드 리스트 */}
        <div className="tray-list">
          {selectedMovies.length === 0 ? (
            <div className="empty-tray-msg">
              {isLikeMode 
                ? "위의 움직이는 포스터에서 정말 좋아하는 작품을 탭해 보세요." 
                : "남들은 명작이라 찬사하지만, 나는 굳이 싫은 영화를 탭해 보세요."}
            </div>
          ) : (
            selectedMovies.map(movie => (
              <MiniPosterCard 
                key={`mini-${movie.id}`} 
                movie={movie} 
                onRemove={() => onRemoveMovie(movie.id)} 
                mode={mode}
              />
            ))
          )}
        </div>

        {/* 오른쪽 영역: 시작/다음단계 CTA 버튼 */}
        <div className="tray-action">
          <button 
            className={`btn-start ${isReady ? 'active' : ''}`}
            disabled={!isReady}
            onClick={onSubmit}
          >
            {buttonText}
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
          background: rgba(11, 12, 16, 0.9);
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.7);
          padding: 10px 30px;
          border-top: 2px solid var(--border-color);
          transition: border-color 0.4s ease;
        }

        /* 불호/호 모드별 보더 칼라 교체 */
        .selection-tray.like-mode {
          border-top-color: rgba(102, 252, 241, 0.25);
        }
        
        .selection-tray.dislike-mode {
          border-top-color: rgba(255, 159, 28, 0.25);
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
          width: 280px;
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
          color: var(--active-color);
          font-weight: 700;
          font-size: 1.1rem;
          text-shadow: 0 0 10px var(--active-glow);
          transition: color 0.4s ease;
        }

        .progress-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .progress-bar {
          height: 100%;
          background: var(--active-color);
          box-shadow: 0 0 8px var(--active-glow);
          border-radius: 10px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s;
        }

        .guide-text {
          font-size: 0.75rem;
          color: var(--text-desc);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .tray-list::-webkit-scrollbar {
          height: 4px;
        }

        .empty-tray-msg {
          font-size: 0.82rem;
          color: var(--text-muted);
          text-align: center;
          width: 100%;
          opacity: 0.7;
        }

        /* 3. 오른쪽 시작 버튼 */
        .tray-action {
          flex-shrink: 0;
        }

        .btn-start {
          background: #1f2833;
          color: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          font-family: var(--font-title);
          font-size: 0.95rem;
          font-weight: 700;
          padding: 14px 24px;
          border-radius: 12px;
          cursor: not-allowed;
          transition: var(--transition-smooth);
        }

        .btn-start.active {
          background: var(--active-color);
          color: var(--bg-color);
          border-color: transparent;
          cursor: pointer;
          box-shadow: 0 4px 15px var(--active-glow);
        }

        .btn-start.active:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--active-glow);
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
function MiniPosterCard({ movie, onRemove, mode }) {
  const [imgSrc, setImgSrc] = React.useState(movie.posterPath);
  const btnColor = mode === 'like' ? 'rgba(255, 77, 77, 0.9)' : 'rgba(102, 252, 241, 0.95)';
  const btnTextColor = mode === 'like' ? 'white' : '#0b0c10';

  return (
    <div className={`mini-card ${mode}-badge`} aria-label={`${movie.titleKo} 선택 취소`}>
      <img 
        src={imgSrc} 
        alt="" 
        onError={() => setImgSrc('/poster-placeholder.svg')} 
      />
      <button 
        className="btn-remove" 
        style={{
          background: btnColor,
          color: btnTextColor
        }}
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
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
          transition: transform 0.2s;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .mini-card:hover {
          transform: scale(1.08);
        }

        /* 모드별 미니 포스터 연한 형광 테두리 장식 */
        .mini-card.like-badge {
          border-color: rgba(102, 252, 241, 0.3);
        }
        
        .mini-card.dislike-badge {
          border-color: rgba(255, 159, 28, 0.3);
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
