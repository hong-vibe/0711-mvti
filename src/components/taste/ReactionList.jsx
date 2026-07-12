import React, { useState, useMemo } from 'react';
import ReactionCard from './ReactionCard';
import EmptyState from '../common/EmptyState';
import moviesData from '../../data/movies.json';

/**
 * ReactionList 컴포넌트 - 반응 기록 필터링, 정렬 및 목록 렌더링
 * @param {object} props { reactions, onEditClick, onDeleteClick }
 */
export default function ReactionList({ reactions, onEditClick, onDeleteClick }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'like' | 'dislike' | 'neutral'
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest' | 'strength'
  const [searchQuery, setSearchQuery] = useState('');

  // 필터링 및 정렬된 반응 데이터 연산 (useMemo)
  const processedReactions = useMemo(() => {
    let result = [...reactions];

    // A. 텍스트 검색 필터
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((r) => {
        const movie = moviesData.find((m) => m.id === r.movieId);
        return movie?.titleKo?.toLowerCase().includes(query) || movie?.originalTitle?.toLowerCase().includes(query);
      });
    }

    // B. 카테고리 필터
    if (filter !== 'all') {
      result = result.filter((r) => r.sentiment === filter);
    }

    // C. 정렬 적용
    result.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt);
      }
      if (sortBy === 'oldest') {
        return new Date(a.updatedAt || a.createdAt) - new Date(b.updatedAt || b.createdAt);
      }
      if (sortBy === 'strength') {
        // 중립은 강도가 없으므로 0으로 취급
        const strengthA = a.sentiment === 'neutral' ? 0 : a.strength || 0;
        const strengthB = b.sentiment === 'neutral' ? 0 : b.strength || 0;
        return strengthB - strengthA;
      }
      return 0;
    });

    return result;
  }, [reactions, filter, sortBy, searchQuery]);

  return (
    <div className="reaction-list-wrapper">
      <div className="list-controls-panel glass-panel">
        {/* 필터 탭 */}
        <div className="filter-tabs">
          <button className={`tab-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            전체 ({reactions.length})
          </button>
          <button className={`tab-btn ${filter === 'like' ? 'active' : ''}`} onClick={() => setFilter('like')}>
            좋았어요 ({reactions.filter(r => r.sentiment === 'like').length})
          </button>
          <button className={`tab-btn ${filter === 'dislike' ? 'active' : ''}`} onClick={() => setFilter('dislike')}>
            별로였어요 ({reactions.filter(r => r.sentiment === 'dislike').length})
          </button>
          <button className={`tab-btn ${filter === 'neutral' ? 'active' : ''}`} onClick={() => setFilter('neutral')}>
            그냥 그래요 ({reactions.filter(r => r.sentiment === 'neutral').length})
          </button>
        </div>

        <div className="search-sort-group">
          {/* 목록 내 검색 */}
          <div className="list-search-wrapper">
            <input
              type="text"
              placeholder="목록 내 영화 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="list-search-input"
            />
            {searchQuery && (
              <button className="btn-clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>

          {/* 정렬 셀렉트 */}
          <div className="sort-selector-wrapper">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="list-sort-select"
            >
              <option value="newest">최신 기록순</option>
              <option value="oldest">오래된 기록순</option>
              <option value="strength">강도 높은순</option>
            </select>
          </div>
        </div>
      </div>

      {processedReactions.length > 0 ? (
        <div className="reaction-grid">
          {processedReactions.map((reaction) => (
            <ReactionCard
              key={reaction.id}
              reaction={reaction}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          message={
            searchQuery || filter !== 'all'
              ? '조건에 맞는 영화 반응이 없습니다.'
              : '아직 기록된 영화 반응이 없습니다.'
          }
          description={
            searchQuery || filter !== 'all'
              ? '필터 조건이나 검색어를 변경해 보세요!'
              : '상단의 영화 검색창을 이용하여 첫 반응을 남겨보세요!'
          }
        />
      )}

      <style jsx>{`
        .reaction-list-wrapper {
          width: 100%;
        }

        .list-controls-panel {
          padding: 16px 20px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (min-width: 768px) {
          .list-controls-panel {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .filter-tabs {
          display: flex;
          overflow-x: auto;
          gap: 6px;
          padding-bottom: 4px;
        }

        /* 스크롤바 숨기기 */
        .filter-tabs::-webkit-scrollbar {
          display: none;
        }
        .filter-tabs {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .tab-btn {
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.02);
          color: #a0aec0;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .tab-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.06);
        }

        .tab-btn.active {
          background: rgba(102, 252, 241, 0.1);
          border-color: var(--primary-color, #66fcf1);
          color: var(--primary-color, #66fcf1);
        }

        .search-sort-group {
          display: flex;
          gap: 10px;
          align-items: center;
          width: 100%;
        }

        @media (min-width: 768px) {
          .search-sort-group {
            width: auto;
            justify-content: flex-end;
          }
        }

        .list-search-wrapper {
          position: relative;
          flex: 1;
          max-width: 250px;
        }

        .list-search-input {
          width: 100%;
          padding: 8px 30px 8px 12px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 0.85rem;
          outline: none;
        }

        .list-search-input:focus {
          border-color: var(--primary-color, #66fcf1);
        }

        .btn-clear-search {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #718096;
          cursor: pointer;
          font-size: 0.85rem;
          padding: 0;
        }

        .btn-clear-search:hover {
          color: #fff;
        }

        .sort-selector-wrapper {
          flex-shrink: 0;
        }

        .list-sort-select {
          padding: 8px 12px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 0.85rem;
          outline: none;
          cursor: pointer;
        }

        .reaction-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 992px) {
          .reaction-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
