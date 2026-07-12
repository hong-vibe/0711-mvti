import React from 'react';

// 16개 MBTI 유형 목록 정의
const MBTI_LIST = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

/**
 * 16개 MBTI 유형 그리드 선택 컴포넌트 (모바일 select 폴백 대응)
 * @param {object} props { value, onChange }
 */
export default function MbtiGridSelector({ value, onChange }) {
  
  const handleSelectChange = (e) => {
    const val = e.target.value;
    onChange(val === 'none' ? null : val);
  };

  return (
    <div className="mbti-selector-container">
      <h3 className="selector-title">1. 당신의 MBTI를 선택해 주세요</h3>
      <p className="selector-desc">
        성격에 따른 미디어 소비 취향 차이(간극)를 학술적으로 대조 분석해 드립니다.
      </p>

      {/* 데스크톱/태블릿용: 16개 그리드 버튼 레이아웃 */}
      <div className="mbti-grid" role="group" aria-label="MBTI 유형 그리드 선택">
        {MBTI_LIST.map((mbti) => {
          const isSelected = value === mbti;
          return (
            <button
              key={mbti}
              type="button"
              className={`mbti-btn ${isSelected ? 'active' : ''}`}
              onClick={() => onChange(mbti)}
              aria-pressed={isSelected}
            >
              <span className="mbti-code">{mbti}</span>
              <span className="mbti-nick">{getMbtiNick(mbti)}</span>
            </button>
          );
        })}
      </div>

      {/* 모바일 화면용: 드롭다운 Select 폴백 */}
      <div className="mbti-select-fallback">
        <select 
          value={value || 'none'} 
          onChange={handleSelectChange}
          aria-label="MBTI 유형 드롭다운 선택"
        >
          <option value="none">MBTI를 고르세요...</option>
          {MBTI_LIST.map(mbti => (
            <option key={`opt-${mbti}`} value={mbti}>
              {mbti} - {getMbtiNick(mbti)}
            </option>
          ))}
          <option value="unknown">잘 모르겠습니다</option>
        </select>
      </div>

      {/* 모르는 사람을 위한 폴백 버튼 */}
      <div className="mbti-unknown-area">
        <button
          type="button"
          className={`btn-unknown ${value === null ? 'active' : ''}`}
          onClick={() => onChange(null)}
          aria-pressed={value === null}
        >
          정확한 MBTI를 잘 모르겠어요
        </button>
      </div>

      <p className="notice-text">
        ※ 잘 모르실 경우 선택하지 않으셔도 되며, 이 경우 MBTI 간극 비교를 제외한 순수 영화 취향 분석 결과만 출력됩니다.
      </p>

      <style jsx>{`
        .mbti-selector-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        .selector-title {
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 8px;
          text-align: center;
        }

        .selector-desc {
          font-size: 0.85rem;
          color: var(--text-desc);
          text-align: center;
          margin-bottom: 24px;
        }

        /* 데스크톱 그리드 */
        .mbti-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .mbti-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 70px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-main);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .mbti-btn:hover {
          background: rgba(255,255,255,0.07);
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }

        .mbti-btn.active {
          background: var(--bg-card-hover);
          border-color: var(--primary-color);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .mbti-code {
          font-family: var(--font-title);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--primary-color);
        }

        .mbti-btn.active .mbti-code {
          text-shadow: 0 0 8px var(--primary-glow);
        }

        .mbti-nick {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* 모바일 폴백 기본 숨김 */
        .mbti-select-fallback {
          display: none;
          margin-bottom: 15px;
        }

        .mbti-select-fallback select {
          width: 100%;
          height: 48px;
          background: #1f2833;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-main);
          padding: 0 15px;
          font-size: 0.95rem;
          font-family: var(--font-body);
        }

        /* 잘 모름 버튼 구역 */
        .mbti-unknown-area {
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }

        .btn-unknown {
          background: transparent;
          border: 1px dashed var(--border-color);
          color: var(--text-muted);
          font-size: 0.85rem;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-unknown:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .btn-unknown.active {
          background: rgba(102, 252, 241, 0.1);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .notice-text {
          font-size: 0.75rem;
          color: var(--text-desc);
          text-align: center;
          opacity: 0.7;
          line-height: 1.4;
        }

        /* 모바일 미디어 쿼리 적용 */
        @media (max-width: 580px) {
          .mbti-grid {
            display: none; /* 모바일에서는 그리드 숨김 */
          }
          .mbti-select-fallback {
            display: block; /* 모바일 전용 드롭다운 표시 */
          }
        }
      `}</style>
    </div>
  );
}

/**
 * MBTI별 한국어 닉네임 반환 헬퍼 (그리드 보조 타이틀용)
 */
function getMbtiNick(mbti) {
  const nicks = {
    INTJ: '전략가', INTP: '논리학자', ENTJ: '통솔자', ENTP: '변론가',
    INFJ: '옹호자', INFP: '중재자', ENFJ: '선도자', ENFP: '활동가',
    ISTJ: '현실주의자', ISFJ: '수호자', ESTJ: '경영자', ESFJ: '영사관',
    ISTP: '장인', ISFP: '모험가', ESTP: '사업가', ESFP: '연예인'
  };
  return nicks[mbti] || '';
}
