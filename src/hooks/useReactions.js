import { useLocalStorage } from './useLocalStorage';

/**
 * UserMovieReaction 엔터티에 대한 CRUD 비즈니스 로직을 제어하는 Custom Hook
 * @returns {object} reactions 배열 및 C/R/U/D 핸들러 메서드들
 */
export function useReactions() {
  const [reactions, setReactions] = useLocalStorage('mvti_user_reactions_v1', []);

  /**
   * 1. Create - 영화 반응 추가
   * @param {object} params { movieId, sentiment, strength, watchStatus, note }
   * @returns {object} 생성된 reaction 객체
   */
  const addReaction = ({ movieId, sentiment, strength = 2, watchStatus = 'seen', note = '' }) => {
    // A. 입력 유효성 검증
    if (!movieId) {
      throw new Error('영화 식별자(movieId)가 누락되었습니다.');
    }
    if (!sentiment) {
      throw new Error('선호도 반응(sentiment)은 필수 선택 사항입니다.');
    }
    if (!['like', 'dislike', 'neutral'].includes(sentiment)) {
      throw new Error('올바르지 않은 선호도 형식입니다.');
    }

    // B. 중복 등록 차단 가드
    const isDuplicate = reactions.some(r => r.movieId === movieId);
    if (isDuplicate) {
      throw new Error('이미 이 영화에 대한 반응이 등록되어 있습니다.');
    }

    // C. 신규 객체 캡슐화
    const newReaction = {
      id: `react-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      movieId,
      sentiment,
      strength: Number(strength),
      watchStatus,
      note: note.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // D. 상태 불변성을 지키며 새 배열로 갱신 (직접 push 금지)
    setReactions(prev => [newReaction, ...prev]);
    return newReaction;
  };

  /**
   * 2. Read Helper - 개별 영화 ID 기반 매핑 반응 검색
   * @param {string} movieId
   * @returns {object|null}
   */
  const getReactionByMovieId = (movieId) => {
    return reactions.find(r => r.movieId === movieId) || null;
  };

  /**
   * 3. Update - 기존 반응 기록 편집
   * @param {string} reactionId 수정 대상 reaction.id
   * @param {object} updates 변경할 필드셋 객체 (ex: { strength, note, sentiment })
   */
  const updateReaction = (reactionId, updates) => {
    if (!reactionId) {
      throw new Error('수정할 반응 식별자(reactionId)가 필요합니다.');
    }

    const exists = reactions.some(r => r.id === reactionId);
    if (!exists) {
      throw new Error('존재하지 않는 반응 기록은 수정할 수 없습니다.');
    }

    // 불변성을 지키며 map 함수를 통해 기존 배열의 값을 수정 교체
    setReactions(prev =>
      prev.map(r =>
        r.id === reactionId
          ? {
              ...r,
              ...updates,
              updatedAt: new Date().toISOString(), // 최종 수정 시각 갱신
            }
          : r
      )
    );
  };

  /**
   * 4. Delete - 반응 삭제 및 영구 제거
   * @param {string} reactionId 삭제 대상 reaction.id
   */
  const deleteReaction = (reactionId) => {
    if (!reactionId) {
      throw new Error('삭제할 반응 식별자(reactionId)가 필요합니다.');
    }

    const exists = reactions.some(r => r.id === reactionId);
    if (!exists) {
      throw new Error('존재하지 않는 반응 기록은 삭제할 수 없습니다.');
    }

    // 불변성을 지키며 filter 함수를 이용해 대상 객체를 제외한 새 배열로 업데이트
    setReactions(prev => prev.filter(r => r.id !== reactionId));
  };

  /**
   * 5. Clear All - 로컬스토리지 및 상태 배열 전체 초기화
   */
  const clearAllReactions = () => {
    setReactions([]);
  };

  return {
    reactions,
    addReaction,
    getReactionByMovieId,
    updateReaction,
    deleteReaction,
    clearAllReactions,
  };
}
