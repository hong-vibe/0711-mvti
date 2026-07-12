import React, { useState } from 'react';

// 4대 지표별 질문 세부 데이터 명세
const QUESTIONS = [
  {
    dimension: 'EI',
    question: '주말이나 쉬는 날에 당신의 에너지는 주로 어디서 충전되나요?',
    options: [
      { text: '밖으로 나가 활발하게 활동하거나 친구들을 만날 때', value: 'E' },
      { text: '조용히 집에서 혼자만의 시간을 가지거나 휴식을 취할 때', value: 'I' }
    ]
  },
  {
    dimension: 'SN',
    question: '이야기를 나누거나 책/영화를 볼 때, 어떤 서사에 흥미를 느끼나요?',
    options: [
      { text: '실제 일어남 직한 사실적이고 구체적인 인물의 생생한 이야기', value: 'S' },
      { text: '상상력이 풍부하고 은유나 상징이 가득한 미래지향적 가설적 이야기', value: 'N' }
    ]
  },
  {
    dimension: 'TF',
    question: '친구가 힘든 고민을 털어놓을 때, 당신의 머릿속에 가장 먼저 뜨는 반응은?',
    options: [
      { text: '상황을 객관적으로 파악하고 해결책이나 조언을 고민한다', value: 'T' },
      { text: '친구의 복잡한 기분과 마음에 먼저 공감하고 위로의 말을 건넨다', value: 'F' }
    ]
  },
  {
    dimension: 'JP',
    question: '여행을 가거나 업무 프로젝트를 시작하기 전, 당신의 기본 스타일은?',
    options: [
      { text: '세부 일정과 구체적인 분량 조절 계획을 미리 짜두어야 안심이 된다', value: 'J' },
      { text: '큰 가이드라인만 정해두고 상황 흐름에 맞춰 자유롭게 대처한다', value: 'P' }
    ]
  }
];

/**
 * 4문항 약식 MBTI 자가 진단 컴포넌트
 * @param {object} props { onComplete, onCancel }
 */
export default function MbtiMiniTest({ onComplete, onCancel }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { EI: 'E', SN: 'N', ... }

  const currentQuestion = QUESTIONS[currentIdx];

  const handleOptionSelect = (value) => {
    const nextAnswers = { ...answers, [currentQuestion.dimension]: value };
    setAnswers(nextAnswers);

    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // 4문항 모두 답변 완료 시 조합 계산
      const mbtiResult = 
        (nextAnswers.EI || 'I') + 
        (nextAnswers.SN || 'N') + 
        (nextAnswers.TF || 'F') + 
        (nextAnswers.JP || 'P');
      onComplete(mbtiResult);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const progressPercent = ((currentIdx) / QUESTIONS.length) * 100;

  return (
    <div className="mini-test-card glass-panel" aria-label="약식 MBTI 자가 진단">
      <div className="test-header">
        <span className="test-progress-text">약식 테스트 ({currentIdx + 1} / {QUESTIONS.length})</span>
        <button className="btn-close-test" onClick={onCancel} aria-label="테스트 종료">×</button>
      </div>

      {/* 미니 프로그레스 트랙 */}
      <div className="test-progress-track">
        <div className="test-progress-bar" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="test-body">
        <h4 className="question-text">{currentQuestion.question}</h4>
        
        <div className="options-grid">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={`${currentQuestion.dimension}-${idx}`}
              type="button"
              className="option-btn"
              onClick={() => handleOptionSelect(opt.value)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>

      <div className="test-footer">
        {currentIdx > 0 && (
          <button type="button" className="btn-test-prev" onClick={handlePrev}>
            이전 질문으로
          </button>
        )}
      </div>

      <style jsx>{`
        .mini-test-card {
          width: 100%;
          max-width: 550px;
          margin: 0 auto;
          padding: 30px;
          border-color: var(--secondary-color);
          box-shadow: 0 10px 40px var(--secondary-glow);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .test-progress-text {
          font-family: var(--font-title);
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .btn-close-test {
          background: transparent;
          border: none;
          color: var(--text-desc);
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-close-test:hover {
          color: var(--danger-color);
        }

        .test-progress-track {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 25px;
        }

        .test-progress-bar {
          height: 100%;
          background: var(--secondary-color);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .test-body {
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .question-text {
          font-size: 1.15rem;
          color: var(--text-main);
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 25px;
          text-align: center;
        }

        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .option-btn {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-main);
          font-size: 0.92rem;
          padding: 16px 20px;
          text-align: left;
          cursor: pointer;
          line-height: 1.4;
          transition: var(--transition-smooth);
        }

        .option-btn:hover {
          background: rgba(138, 43, 226, 0.1);
          border-color: var(--secondary-color);
          box-shadow: 0 0 10px var(--secondary-glow);
          transform: translateY(-1px);
        }

        .test-footer {
          margin-top: 25px;
          display: flex;
          justify-content: flex-start;
          height: 36px;
        }

        .btn-test-prev {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          text-decoration: underline;
          padding: 5px 0;
        }

        .btn-test-prev:hover {
          color: var(--primary-color);
        }
      `}</style>
    </div>
  );
}
