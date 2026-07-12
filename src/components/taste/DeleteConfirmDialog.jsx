import React from 'react';

/**
 * DeleteConfirmDialog 컴포넌트 - 삭제 여부를 확인하는 커스텀 다이얼로그 모달
 * @param {object} props { isOpen, onClose, onConfirm }
 */
export default function DeleteConfirmDialog({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content glass-panel">
        <h3 className="dialog-title">⚠️ 취향 기록 삭제</h3>
        <p className="dialog-message">
          해당 영화 반응 기록을 정말로 삭제하시겠습니까?<br />
          이 작업은 되돌릴 수 없으며, 당신의 영화 취향(MVTI) 산출 결과에 즉시 반영됩니다.
        </p>

        <div className="dialog-actions">
          <button className="btn-dialog-cancel" onClick={onClose}>
            취소
          </button>
          <button className="btn-dialog-confirm" onClick={onConfirm}>
            삭제하기
          </button>
        </div>
      </div>

      <style jsx>{`
        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2100;
          backdrop-filter: blur(6px);
          padding: 20px;
        }

        .dialog-content {
          width: 100%;
          max-width: 400px;
          padding: 24px;
          border: 1px solid rgba(229, 62, 109, 0.25);
          text-align: center;
        }

        .dialog-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fc8181;
          margin-top: 0;
          margin-bottom: 14px;
        }

        .dialog-message {
          font-size: 0.9rem;
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .dialog-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .btn-dialog-cancel {
          padding: 10px 20px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #a0aec0;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-dialog-cancel:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-dialog-confirm {
          padding: 10px 20px;
          border-radius: 8px;
          background: #e53e3e;
          border: none;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-dialog-confirm:hover {
          background: #c53030;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(229, 62, 109, 0.2);
        }
      `}</style>
    </div>
  );
}
