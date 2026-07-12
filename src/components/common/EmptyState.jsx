import React from 'react';

/**
 * EmptyState 컴포넌트 - 데이터가 없거나 결과가 없을 때 노출하는 공통 UI
 * @param {object} props { message, description, actionButton }
 */
export default function EmptyState({ message = '기록된 데이터가 없습니다.', description = '영화 반응을 추가하여 취향 분석을 시작해보세요!', actionButton }) {
  return (
    <div className="empty-state-container">
      <div className="empty-state-icon">🎬</div>
      <h3 className="empty-state-message">{message}</h3>
      <p className="empty-state-description">{description}</p>
      {actionButton && <div className="empty-state-action">{actionButton}</div>}

      <style jsx>{`
        .empty-state-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--border-color, rgba(255, 255, 255, 0.1));
          border-radius: 16px;
          backdrop-filter: blur(10px);
          max-width: 500px;
          margin: 40px auto;
        }

        .empty-state-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          animation: float 3s ease-in-out infinite;
        }

        .empty-state-message {
          font-size: 1.25rem;
          color: var(--text-main, #ffffff);
          margin-bottom: 10px;
          font-weight: 600;
        }

        .empty-state-description {
          font-size: 0.9rem;
          color: var(--text-desc, #a0aec0);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .empty-state-action {
          margin-top: 10px;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
