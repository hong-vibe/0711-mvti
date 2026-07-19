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
import moviesData from './data/movies.json';

/**
 * 온보딩 플로우를 관장하는 서브 컴포넌트
 */
function OnboardingFlow({ profile, setProfile }) {
  const navigate = useNavigate();
  const { reactions, addReaction, deleteReaction, getReactionByMovieId } = useReactions();
  
  const [step, setStep] = useState('landing'); // 'landing' | 'dislike-selection' | 'onboarding'
  const [selectedLikeMovies, setSelectedLikeMovies] = useState([]);
  const [selectedDislikeMovies, setSelectedDislikeMovies] = useState([]);
  const [mbti, setMbti] = useState(null);
  const [isMbtiTesting, setIsMbtiTesting] = useState(false);

  // 온보딩 완료 사용자인 경우, 로컬 reactions 상태와 동기화
  useEffect(() => {
    if (profile.onboardingCompleted) {
      const liked = [];
      const disliked = [];
      reactions.forEach((r) => {
        const movie = moviesData.find((m) => m.id === r.movieId);
        if (movie) {
          if (r.sentiment === 'like') liked.push(movie);
          else if (r.sentiment === 'dislike') disliked.push(movie);
        }
      });
      setSelectedLikeMovies(liked);
      setSelectedDislikeMovies(disliked);
      if (profile.mbti) {
        setMbti(profile.mbti);
      }
    }
  }, [reactions, profile.onboardingCompleted, profile.mbti]);

  // 좋아하는 영화 선택 핸들러
  const handleLikeMovieClick = (movie) => {
    if (profile.onboardingCompleted) {
      // 온보딩 완료 회원은 즉시 저장소에 반영
      const existing = getReactionByMovieId(movie.id);
      if (existing) {
        if (existing.sentiment === 'like') {
          deleteReaction(existing.id);
        } else {
          alert(`⚠️ 이 영화는 이미 '나는 별로' 상태로 등록되어 있습니다. 변경하려면 취향 기록 페이지나 해당 카드에서 관리해 주세요.`);
        }
      } else {
        addReaction({
          movieId: movie.id,
          sentiment: 'like',
          strength: 2,
          watchStatus: 'seen',
          note: '추가 영화 선택에서 등록'
        });
      }
    } else {
      // 최초 가입/온보딩 게스트 상태
      setSelectedLikeMovies((prev) => {
        const exists = prev.some((m) => m.id === movie.id);
        if (exists) {
          return prev.filter((m) => m.id !== movie.id);
        } else {
          return [...prev, movie];
        }
      });
    }
  };

  const handleRemoveLikeMovie = (movieId) => {
    if (profile.onboardingCompleted) {
      const existing = getReactionByMovieId(movieId);
      if (existing) deleteReaction(existing.id);
    } else {
      setSelectedLikeMovies((prev) => prev.filter((m) => m.id !== movieId));
    }
  };

  // 싫어하는 영화 선택 핸들러
  const handleDislikeMovieClick = (movie) => {
    if (profile.onboardingCompleted) {
      // 온보딩 완료 회원은 즉시 저장소에 반영
      const existing = getReactionByMovieId(movie.id);
      if (existing) {
        if (existing.sentiment === 'dislike') {
          deleteReaction(existing.id);
        } else {
          alert(`⚠️ 이 영화는 이미 '내 취향' 상태로 등록되어 있습니다. 변경하려면 취향 기록 페이지나 해당 카드에서 관리해 주세요.`);
        }
      } else {
        addReaction({
          movieId: movie.id,
          sentiment: 'dislike',
          strength: 2,
          watchStatus: 'seen',
          note: '추가 영화 선택에서 등록'
        });
      }
    } else {
      // 최초 가입/온보딩 게스트 상태
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
    }
  };

  const handleRemoveDislikeMovie = (movieId) => {
    if (profile.onboardingCompleted) {
      const existing = getReactionByMovieId(movieId);
      if (existing) deleteReaction(existing.id);
    } else {
      setSelectedDislikeMovies((prev) => prev.filter((m) => m.id !== movieId));
    }
  };

  const goToDislikeStep = () => setStep('dislike-selection');
  
  const goToNextOrComplete = () => {
    if (profile.onboardingCompleted) {
      // 이미 온보딩 완료된 회원은 바로 진단서로 이동
      navigate('/result');
    } else {
      setStep('onboarding');
    }
  };

  // 온보딩 완료 및 데이터 일괄 적재 핸들러 (최초 가입용)
  const handleCompleteOnboarding = () => {
    try {
      // A. 선택한 선호 영화 등록 (기본 강도 2로 저장)
      selectedLikeMovies.forEach((movie) => {
        addReaction({
          movieId: movie.id,
          sentiment: 'like',
          strength: 2,
          watchStatus: 'seen',
          note: '온보딩 단계를 통해 선택함'
        });
      });

      // B. 선택한 불호 영화 등록 (기본 강도 2로 저장)
      selectedDislikeMovies.forEach((movie) => {
        addReaction({
          movieId: movie.id,
          sentiment: 'dislike',
          strength: 2,
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
            reactions={reactions}
          />
          
          <SelectionTray 
            selectedMovies={selectedLikeMovies} 
            onRemoveMovie={handleRemoveLikeMovie} 
            onSubmit={goToDislikeStep}
            minRequired={profile.onboardingCompleted ? 0 : 3}
            mode="like"
          />
        </div>
      )}

      {step === 'dislike-selection' && (
        <div className="landing-view">
          <div className="landing-hero select-dislike-hero">
            <h2 className="amber-glow">남들은 명작이라 하지만, 나는 굳이 싫은 영화는?</h2>
            <p>대다수가 극찬하지만, 당신은 독특하게 불호(비선호)를 느끼는 영화를 골라보세요.</p>
          </div>
          
          <DiagonalPosterFlow 
            onMovieClick={handleDislikeMovieClick} 
            selectedMovieIds={selectedDislikeMovies.map(m => m.id)}
            reactions={reactions}
          />
          
          <SelectionTray 
            selectedMovies={selectedDislikeMovies} 
            onRemoveMovie={handleRemoveDislikeMovie} 
            onSubmit={goToNextOrComplete}
            minRequired={profile.onboardingCompleted ? 0 : 3}
            mode="dislike"
          />
          <button className="btn-absolute-back" onClick={() => setStep('landing')}>
            ← 1단계(선호 선택)로 돌아가기
          </button>
        </div>
      )}

      {step === 'onboarding' && (
        <div className="onboarding-view glass-panel">
          <MbtiGridSelector 
            value={mbti} 
            onChange={(selected) => setMbti(selected)} 
            onTestModeChange={setIsMbtiTesting}
          />
          {!isMbtiTesting && (
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
          )}
        </div>
      )}
    </div>
  );
}

/**
 * 루트 경로("/")에서 온보딩 분기를 처리해 주는 컴포넌트
 */
function HomeRouteHandler({ profile, setProfile }) {
  // 온보딩 완료 사용자도 리다이렉트하지 않고 OnboardingFlow(추가 선택 모드)로 진입할 수 있도록 개선
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

      <nav className="header-nav">
        {/* 온보딩 여부에 상관없이 홈 링크 노출 (온보딩 완료 시 '영화 더 고르기' 텍스트 적용) */}
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          {profile.onboardingCompleted ? '🎬 영화 더 고르기' : '🏠 홈'}
        </Link>
        {profile.onboardingCompleted && (
          <>
            <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
              🚀 오늘의 추천
            </Link>
            <Link to="/my-taste" className={`nav-link ${location.pathname === '/my-taste' ? 'active' : ''}`}>
              ✍️ 취향 기록 (CRUD)
            </Link>
            <Link to="/result" className={`nav-link ${location.pathname === '/result' ? 'active' : ''}`}>
              🔬 취향 진단서
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default function App() {
  const [profile, setProfile] = useLocalStorage('mvti_user_profile_v1', {
    mbti: null,
    onboardingCompleted: false,
  });

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
