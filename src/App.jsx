import React, { useState } from 'react';
import DiagonalPosterFlow from './components/landing/DiagonalPosterFlow';
import SelectionTray from './components/landing/SelectionTray';
import MbtiGridSelector from './components/onboarding/MbtiGridSelector';

/**
 * MVTI 메인 애플리케이션 컴포넌트
 */
export default function App() {
  const [step, setStep] = useState('landing'); // 'landing' | 'onboarding'
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [mbti, setMbti] = useState(null);

  // 포스터 클릭 토글 처리
  const handleMovieClick = (movie) => {
    setSelectedMovies((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        return prev.filter((m) => m.id !== movie.id); // 이미 선택 시 해제
      } else {
        return [...prev, movie]; // 신규 선택 추가
      }
    });
  };

  // 트레이에서 삭제 처리
  const handleRemoveMovie = (movieId) => {
    setSelectedMovies((prev) => prev.filter((m) => m.id !== movieId));
  };

  // 분석 시작 단계 진입
  const handleStartAnalysis = () => {
    setStep('onboarding');
  };

  // MBTI 변경 처리
  const handleMbtiChange = (selectedMbti) => {
    setMbti(selectedMbti);
  };

  return (
    <div className="app-container">
      {/* 글로벌 네비게이션 헤더 */}
      <header className="app-header">
        <h1 className="logo">MVTI</h1>
        <p className="subtitle">Movie Taste Indicator</p>
      </header>

      {/* 메인 뷰 스위칭 */}
      <main className="app-main">
        {step === 'landing' && (
          <div className="landing-view">
            <div className="landing-hero">
              <h2>당신의 숨겨진 영화 취향을 찾아서</h2>
              <p>흐르는 영화 포스터 중에서 좋아하는 작품을 6편 선택해 보세요.</p>
            </div>
            
            <DiagonalPosterFlow 
              onMovieClick={handleMovieClick} 
              selectedMovieIds={selectedMovies.map(m => m.id)} 
            />
            
            <SelectionTray 
              selectedMovies={selectedMovies} 
              onRemoveMovie={handleRemoveMovie} 
              onSubmit={handleStartAnalysis} 
            />
          </div>
        )}

        {step === 'onboarding' && (
          <div className="onboarding-view glass-panel">
            <MbtiGridSelector value={mbti} onChange={handleMbtiChange} />
            <div className="onboarding-actions">
              <button className="btn-back" onClick={() => setStep('landing')}>
                이전 단계로
              </button>
              <button 
                className="btn-next" 
                onClick={() => alert(`[데모 안내]\n선택 완료!\n- 영화 개수: ${selectedMovies.length}편\n- 선택한 MBTI: ${mbti || '입력 안함(잘 모름)'}\n\n다음 Phase 구현 시 상세한 취향 분석 결과 및 간극 해석 페이지로 연결됩니다.`)}
              >
                결과 분석하기
              </button>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 140px; /* 하단 트레이 배치 공간 확보 */
          position: relative;
        }

        .app-header {
          text-align: center;
          margin-top: 40px;
          margin-bottom: 20px;
          z-index: 5;
        }

        .logo {
          font-size: 3rem;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-shadow: 0 4px 20px rgba(102, 252, 241, 0.2);
        }

        .subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          margin-top: -5px;
        }

        .app-main {
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
          z-index: 2;
        }

        .landing-view {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .landing-hero {
          text-align: center;
          margin-bottom: 30px;
        }

        .landing-hero h2 {
          font-size: 1.8rem;
          color: var(--text-main);
          margin-bottom: 10px;
          font-weight: 700;
        }

        .landing-hero p {
          font-size: 0.95rem;
          color: var(--text-desc);
        }

        .onboarding-view {
          margin: 40px auto;
          max-width: 650px;
          padding: 45px 30px;
        }

        .onboarding-actions {
          display: flex;
          justify-content: space-between;
          max-width: 600px;
          margin: 35px auto 0 auto;
          padding: 0 20px;
        }

        .btn-back {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-desc);
          padding: 12px 26px;
          border-radius: 10px;
          cursor: pointer;
          font-family: var(--font-title);
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .btn-back:hover {
          border-color: var(--text-main);
          color: var(--text-main);
        }

        .btn-next {
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
          border: none;
          color: var(--bg-color);
          padding: 12px 32px;
          border-radius: 10px;
          cursor: pointer;
          font-family: var(--font-title);
          font-weight: 700;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 15px var(--primary-glow);
        }

        .btn-next:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--primary-glow);
        }

        .btn-next:active {
          transform: translateY(1px);
        }
      `}</style>
    </div>
  );
}
