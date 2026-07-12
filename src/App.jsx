import React, { useState } from 'react';
import DiagonalPosterFlow from './components/landing/DiagonalPosterFlow';
import SelectionTray from './components/landing/SelectionTray';
import MbtiGridSelector from './components/onboarding/MbtiGridSelector';

/**
 * MVTI 메인 애플리케이션 컴포넌트 (2단계 영화 선택 + 약식 MBTI 연동)
 */
export default function App() {
  const [step, setStep] = useState('landing'); // 'landing' (좋아요 선택) | 'dislike-selection' (싫어요 선택) | 'onboarding' (mbti 선택)
  const [selectedLikeMovies, setSelectedLikeMovies] = useState([]);
  const [selectedDislikeMovies, setSelectedDislikeMovies] = useState([]);
  const [mbti, setMbti] = useState(null);

  // 1단계: 좋아하는 영화 선택 핸들러
  const handleLikeMovieClick = (movie) => {
    setSelectedLikeMovies((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  const handleRemoveLikeMovie = (movieId) => {
    setSelectedLikeMovies((prev) => prev.filter((m) => m.id !== movieId));
  };

  // 2단계: 굳이 싫어하는 영화 선택 핸들러
  const handleDislikeMovieClick = (movie) => {
    // 1단계에서 좋아하는 영화로 고른 것은 불호 등록 불가 가드
    const isAlreadyLiked = selectedLikeMovies.some((m) => m.id === movie.id);
    if (isAlreadyLiked) {
      alert(`⚠️ '${movie.titleKo}' 영화는 이미 1단계에서 '좋아하는 영화'로 선택하셨습니다. 다른 영화를 선택해 주세요!`);
      return;
    }

    setSelectedDislikeMovies((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  const handleRemoveDislikeMovie = (movieId) => {
    setSelectedDislikeMovies((prev) => prev.filter((m) => m.id !== movieId));
  };

  // 단계별 분기 처리 버튼 함수들
  const goToDislikeStep = () => {
    setStep('dislike-selection');
  };

  const goToMbtiStep = () => {
    setStep('onboarding');
  };

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
        {/* 1단계: 좋아하는 영화 선택 */}
        {step === 'landing' && (
          <div className="landing-view">
            <div className="landing-hero">
              <h2>당신이 진짜 좋아하는 영화는?</h2>
              <p>흐르는 영화 포스터 중에서 가장 선호하고 좋았던 영화를 3편 이상 선택해 주세요.</p>
            </div>
            
            <DiagonalPosterFlow 
              onMovieClick={handleLikeMovieClick} 
              selectedMovieIds={selectedLikeMovies.map(m => m.id)} 
            />
            
            <SelectionTray 
              selectedMovies={selectedLikeMovies} 
              onRemoveMovie={handleRemoveLikeMovie} 
              onSubmit={goToDislikeStep}
              minRequired={3}
              mode="like"
            />
          </div>
        )}

        {/* 2단계: 남들은 다 명작이라는데 굳이 싫어하는 영화 선택 */}
        {step === 'dislike-selection' && (
          <div className="landing-view">
            <div className="landing-hero select-dislike-hero">
              <h2 className="amber-glow">남들은 명작이라 하지만, 나는 굳이 싫은 영화는?</h2>
              <p>대다수가 극찬하지만, 당신은 독특하게 불호(비선호)를 느끼는 영화를 3편 이상 골라보세요.</p>
            </div>
            
            <DiagonalPosterFlow 
              onMovieClick={handleDislikeMovieClick} 
              selectedMovieIds={selectedDislikeMovies.map(m => m.id)} 
            />
            
            <SelectionTray 
              selectedMovies={selectedDislikeMovies} 
              onRemoveMovie={handleRemoveDislikeMovie} 
              onSubmit={goToMbtiStep}
              minRequired={3}
              mode="dislike"
            />
            <button className="btn-absolute-back" onClick={() => setStep('landing')}>
              ← 1단계(선호 선택)로 돌아가기
            </button>
          </div>
        )}

        {/* 3단계: MBTI 선택 및 약식 테스트 연동 */}
        {step === 'onboarding' && (
          <div className="onboarding-view glass-panel">
            <MbtiGridSelector value={mbti} onChange={handleMbtiChange} />
            <div className="onboarding-actions">
              <button className="btn-back" onClick={() => setStep('dislike-selection')}>
                이전 단계로
              </button>
              <button 
                className="btn-next" 
                onClick={() => alert(`[데모 안내]\n진단 분석 완료!\n\n[선택 내역]\n- 좋아하는 영화: ${selectedLikeMovies.map(m => m.titleKo).join(', ')}\n- 굳이 싫어하는 영화: ${selectedDislikeMovies.map(m => m.titleKo).join(', ')}\n- 입력한 MBTI: ${mbti || '없음(잘 모름)'}\n\n다음 단계에서 취향 점수 산출 및 불호 일치도 기반 인생 영화 추천 뷰가 이어집니다.`)}
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
          padding-bottom: 140px; /* 하단 트레이 배치 공간 */
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
          transition: color 0.4s ease;
        }

        .landing-hero h2.amber-glow {
          color: var(--warning-color);
          text-shadow: 0 0 15px rgba(255, 159, 28, 0.2);
        }

        .landing-hero p {
          font-size: 0.95rem;
          color: var(--text-desc);
        }

        .btn-absolute-back {
          position: fixed;
          top: 40px;
          left: 40px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          color: var(--text-desc);
          padding: 10px 18px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition-smooth);
          z-index: 100;
        }

        .btn-absolute-back:hover {
          background: rgba(255,255,255,0.08);
          color: var(--text-main);
          border-color: var(--text-main);
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

        @media (max-width: 900px) {
          .btn-absolute-back {
            position: relative;
            top: 0;
            left: 0;
            margin-top: 15px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
