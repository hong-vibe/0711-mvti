import React from 'react';

/**
 * AxisChart 컴포넌트 - 4축 MVTI 점수를 바 형식으로 시각화하는 차트
 * @param {object} props { scores }
 */
export default function AxisChart({ scores }) {
  const { fictionReality = 50, highLowTempo = 50, emotionIdea = 50, openClosure = 50 } = scores;

  const axes = [
    {
      key: 'FR',
      label: '현실 반영도 (F-R 축)',
      leftLabel: 'Reality (현실주의)',
      rightLabel: 'Fiction (가상·세계관)',
      value: fictionReality,
    },
    {
      key: 'HL',
      label: '자극 전개도 (H-L 축)',
      leftLabel: 'Low Tempo (정적 호흡)',
      rightLabel: 'High Energy (고자극)',
      value: highLowTempo,
    },
    {
      key: 'EI',
      label: '감정·개념 중시도 (E-I 축)',
      leftLabel: 'Idea (이성·사유)',
      rightLabel: 'Emotion (감정·관계)',
      value: emotionIdea,
    },
    {
      key: 'OC',
      label: '결말 구조도 (O-C 축)',
      leftLabel: 'Closure (완결 구조)',
      rightLabel: 'Open (여운·열린결말)',
      value: openClosure,
    },
  ];

  return (
    <div className="axis-chart-container">
      <h3 className="chart-title">4축 성향 분석</h3>
      
      <div className="axes-list">
        {axes.map((axis) => {
          // 중앙(50) 기준 채우기 스타일 계산
          const fillWidth = Math.abs(axis.value - 50);
          const isRight = axis.value >= 50;
          
          return (
            <div key={axis.key} className="axis-row">
              <div className="axis-header">
                <span className="axis-title">{axis.label}</span>
                <span className="axis-score-val">
                  {isRight ? `${axis.rightLabel} ${axis.value}%` : `${axis.leftLabel} ${100 - axis.value}%`}
                </span>
              </div>

              <div className="gauge-bar-wrapper">
                {/* 왼쪽 성향 표시 */}
                <div className={`label-side left ${!isRight ? 'active' : ''}`}>
                  {axis.leftLabel.split(' ')[0]}
                </div>

                <div className="gauge-track">
                  {/* 중앙선 표시 */}
                  <div className="gauge-center-line"></div>
                  
                  {/* 동적 게이지 채우기 */}
                  <div
                    className={`gauge-fill ${isRight ? 'fill-right' : 'fill-left'}`}
                    style={{
                      width: `${fillWidth * 2}%`, // 50%가 최대이므로 2배 곱해서 전체 트랙 대비 비율 산출
                      left: isRight ? '50%' : 'auto',
                      right: !isRight ? '50%' : 'auto',
                    }}
                  ></div>
                </div>

                {/* 오른쪽 성향 표시 */}
                <div className={`label-side right ${isRight ? 'active' : ''}`}>
                  {axis.rightLabel.split(' ')[0]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .axis-chart-container {
          margin-top: 30px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-top: 0;
          margin-bottom: 24px;
          border-left: 2px solid var(--primary-color);
          padding-left: 10px;
        }

        .axes-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .axis-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .axis-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .axis-title {
          color: #a0aec0;
        }

        .axis-score-val {
          color: var(--primary-color);
        }

        .gauge-bar-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .label-side {
          font-size: 0.75rem;
          color: #4a5568;
          font-weight: 700;
          min-width: 55px;
          transition: color 0.3s ease;
        }

        .label-side.left {
          text-align: right;
        }

        .label-side.active {
          color: #fff;
        }

        .gauge-track {
          position: relative;
          flex: 1;
          height: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .gauge-center-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 2;
        }

        .gauge-fill {
          position: absolute;
          top: 0;
          bottom: 0;
          border-radius: 4px;
          z-index: 1;
          transition: width 0.8s cubic-bezier(0.1, 0.8, 0.2, 1);
        }

        .gauge-fill.fill-right {
          background: var(--primary-color);
        }

        .gauge-fill.fill-left {
          background: var(--accent-warm);
        }
      `}</style>
    </div>
  );
}
