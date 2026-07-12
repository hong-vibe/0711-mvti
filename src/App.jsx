import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import DiagonalPosterFlow from './components/landing/DiagonalPosterFlow';
import SelectionTray from './components/landing/SelectionTray';
import MbtiGridSelector from './components/onboarding/MbtiGridSelector';
import MyTastePage from './pages/MyTastePage';
import MvtiResultPage from './pages/MvtiResultPage';
import DashboardPage from './pages/DashboardPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useReactions } from './hooks/useReactions';

/**
 * 온보딩 플로우를 관장하는 서브 컴포넌트
 */
function OnboardingFlow({ profile, setProfile }) {
  const navigate = useNavigate();
  const { addReaction } = useReactions();
  const [step, setStep] = useState('landing'); // 'landing' | 'dislike-selection' | 'onboarding'
  const [selectedLikeMovies, setSelectedLikeMovies] = useState([]);
  const [selectedDislikeMovies, setSelectedDislikeMovies] = useState([]);
  const [mbti, setMbti] = useState(null);

  // 좋아하는 영화 선택 핸들러
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

  // 싫어하는 영화 선택 핸들러
  const handleDislikeMovieClick = (movie) => {
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

  const goToDislikeStep = () => setStep('dislike-selection');
  const goToMbtiStep = () => setStep('onboarding');

  // 온보딩 완료 및 데이터 일괄 적재 핸들러
  const handleCompleteOnboarding = () => {
    try {
      // A. 선택한 선호 영화 등록 (Strength: 3으로 등록하여 강한 선호 표출)
      selectedLikeMovies.forEach((movie) => {
        addReaction({
          movieId: movie.id,
          sentiment: 'like',
          strength: 3,
          watchStatus: 'seen',
          note: '온보딩 단계를 통해 선택함'
        });
      });

      // B. 선택한 불호 영화 등록 (Strength: 3으로 등록하여 강한 불호 표출)
      selectedDislikeMovies.forEach((movie) => {
        addReaction({
          movieId: movie.id,
          sentiment: 'dislike',
          strength: 3,
          watchStatus: 'seen',
          note: '온보딩 단계를 통해 선택함'
        });
      });

      // C. 프로필 업데이트 및 온보딩 완료 처리
      setProfile({
        mbti,
        onboardingCompleted: true
      });

      // D. 결과 페이지로 이동
      navigate('/result');
    } catch (err) {
      alert(`⚠️ 오류가 발생했습니다: ${err.message || '온보딩 처리에 실패했습니다.'}`);
    }
  };

  return (
    <div className="onboarding-flow-wrapper">
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

      {step === 'onboarding' && (
        <div className="onboarding-view glass-panel">
          <MbtiGridSelector value={mbti} onChange={(selected) => setMbti(selected)} />
          <div className="onboarding-actions">
            <button className="btn-back" onClick={() => setStep('dislike-selection')}>
              이전 단계로
            </button>
            <button 
              className="btn-next" 
              onClick={handleCompleteOnboarding}
            >
              결과 분석하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 루트 경로("/")에서 온보딩 분기를 처리해 주는 컴포넌트
 */
function HomeRouteHandler({ profile, setProfile }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (profile.onboardingCompleted) {
      // 온보딩이 이미 되어 있으면 대시보드로 이동
      navigate('/dashboard');
    }
  }, [profile.onboardingCompleted, navigate]);

  return <OnboardingFlow profile={profile} setProfile={setProfile} />;
}

/**
 * 네비게이션 헤더 및 경로 활성화를 담당하는 컴포넌트
 */
function NavigationHeader({ profile }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (profile.onboardingCompleted) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <header className="app-header">
      <div className="header-logo-section" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <h1 className="logo">MVTI</h1>
        <p className="subtitle">Movie Taste Indicator</p>
      </div>

      {profile.onboardingCompleted && (
        <nav className="header-nav">
          <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            🚀 오늘의 추천
          </Link>
          <Link to="/my-taste" className={`nav-link ${location.pathname === '/my-taste' ? 'active' : ''}`}>
            ✍️ 취향 기록 (CRUD)
          </Link>
          <Link to="/result" className={`nav-link ${location.pathname === '/result' ? 'active' : ''}`}>
            🔬 취향 진단서
          </Link>
        </nav>
      )}
    </header>
  );
}

export default function App() {
  const [profile, setProfile] = useLocalStorage('mvti_user_profile_v1', {
    mbti: null,
    onboardingCompleted: false,
  });

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* 공통 상단 네비게이션 헤더 */}
        <NavigationHeader profile={profile} />

        {/* 라우트 분기 */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomeRouteHandler profile={profile} setProfile={setProfile} />} />
            <Route path="/result" element={<MvtiResultPage />} />
            <Route path="/my-taste" element={<MyTastePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
