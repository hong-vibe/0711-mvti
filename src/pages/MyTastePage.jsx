import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactions } from '../hooks/useReactions';
import ReactionForm from '../components/taste/ReactionForm';
import ReactionList from '../components/taste/ReactionList';
import EditReactionModal from '../components/taste/EditReactionModal';
import DeleteConfirmDialog from '../components/taste/DeleteConfirmDialog';

/**
 * MyTastePage 컴포넌트 - 나의 영화 취향 기록 조회/추가/수정/삭제 (CRUD) 통합 페이지
 */
export default function MyTastePage() {
  const navigate = useNavigate();
  const { reactions, addReaction, updateReaction, deleteReaction } = useReactions();

  // 모달 제어 상태
  const [editingReaction, setEditingReaction] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [deletingId, setDeletingId] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // 이미 기록된 영화 ID 리스트 (중복 등록 방지용 필터)
  const existingMovieIds = reactions.map((r) => r.movieId);

  // CREATE 핸들러
  const handleAddReaction = (newReactionData) => {
    addReaction(newReactionData);
  };

  // UPDATE 진입 및 실행 핸들러
  const handleEditClick = (reaction) => {
    setEditingReaction(reaction);
    setIsEditOpen(true);
  };

  const handleSaveEdit = (reactionId, updates) => {
    updateReaction(reactionId, updates);
  };

  // DELETE 진입 및 실행 핸들러
  const handleDeleteClick = (reactionId) => {
    setDeletingId(reactionId);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deletingId) {
      deleteReaction(deletingId);
      setIsDeleteOpen(false);
      setDeletingId(null);
    }
  };

  return (
    <div className="taste-page-container">
      <div className="taste-page-header">
        <h2 className="page-title">내 취향 기록</h2>
        <p className="page-description">
          선호하거나 불호인 영화들을 상세하게 수정 및 추가할 수 있습니다. 
          여기에 축적되는 정보들이 최종 MVTI 및 추천 모델의 기반 데이터로 동작합니다.
        </p>
      </div>

      <div className="taste-grid">
        {/* 왼쪽: 반응 기록 추가 폼 */}
        <div className="taste-sidebar">
          <ReactionForm
            onAddSuccess={handleAddReaction}
            existingMovieIds={existingMovieIds}
          />

          <div className="analysis-navigation-card glass-panel">
            <h4>현재 기록 기반 진단하기</h4>
            <p>선호 3편, 불호 3편 이상 기록되면 보다 신뢰도 높은 MVTI 분석 결과를 받아보실 수 있습니다.</p>
            <div className="nav-stats">
              <div className="stat-item">
                <span className="stat-num">{reactions.filter(r => r.sentiment === 'like').length}</span>
                <span className="stat-label">내 취향 (Like)</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">{reactions.filter(r => r.sentiment === 'dislike').length}</span>
                <span className="stat-label">나는 별로 (Dislike)</span>
              </div>
            </div>
            <button 
              className="btn-primary btn-full"
              onClick={() => navigate('/result')}
            >
              내 MVTI 결과 확인하러 가기 →
            </button>
          </div>
        </div>

        {/* 오른쪽: 반응 기록 목록 (필터, 정렬 기능 탑재) */}
        <div className="taste-main">
          <ReactionList
            reactions={reactions}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        </div>
      </div>

      {/* 수정 모달 컴포넌트 */}
      <EditReactionModal
        reaction={editingReaction}
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setEditingReaction(null);
        }}
        onSave={handleSaveEdit}
      />

      {/* 삭제 확인 다이얼로그 */}
      <DeleteConfirmDialog
        isOpen={isDeleteOpen}
        onClose={() => {
          setIsDeleteOpen(false);
          setDeletingId(null);
        }}
        onConfirm={handleConfirmDelete}
      />

      <style jsx>{`
        .taste-page-container {
          padding: 20px 0;
          animation: fadeIn 0.4s ease;
        }

        .taste-page-header {
          margin-bottom: 30px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .page-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-top: 0;
          margin-bottom: 8px;
        }

        .page-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.6;
        }

        .taste-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        @media (min-width: 992px) {
          .taste-grid {
            grid-template-columns: 320px 1fr;
          }
        }

        .taste-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .analysis-navigation-card {
          padding: 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
        }

        .analysis-navigation-card h4 {
          margin-top: 0;
          margin-bottom: 8px;
          color: var(--text-main);
          font-size: 0.95rem;
          font-weight: 700;
        }

        .analysis-navigation-card p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .nav-stats {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }

        .stat-item {
          flex: 1;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 10px;
          text-align: center;
        }

        .stat-num {
          display: block;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 2px;
          display: block;
          font-weight: 500;
        }

        .btn-primary {
          background: var(--primary-color);
          border: none;
          color: var(--bg-color);
          font-family: var(--font-body);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-full {
          width: 100%;
          padding: 12px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
