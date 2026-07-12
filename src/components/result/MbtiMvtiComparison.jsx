import React from 'react';
import { GAP_INTERPRETATIONS } from '../../constants/gapInterpretations';

/**
 * MbtiMvtiComparison 컴포넌트 - MBTI와 MVTI 성향 간극 대조 분석
 * @param {object} props { mbti, mvtiCode }
 */
export default function MbtiMvtiComparison({ mbti, mvtiCode }) {
  if (!mbti) return null;

  // M- 코드 분리 (ex: M-FHEO -> FHEO)
  const mvtiLetters = mvtiCode.replace('M-', '').toUpperCase();
  const mbtiLetters = mbti.toUpperCase();

  // 매핑 정의
  // FR축: F는 N과 대응, R은 S와 대응
  // HL축: H는 E와 대응, L은 I와 대응
  // EI축: E는 F와 대응, I는 T와 대응
  // OC축: O는 P와 대응, C는 J와 대응

  const checkMatch = () => {
    let matchCount = 0;
    const details = [];

    // 1. F-R vs N-S
    const mvtiFR = mvtiLetters[0];
    const mbtiNS = mbtiLetters[1];
    const isFRMatch = (mvtiFR === 'F' && mbtiNS === 'N') || (mvtiFR === 'R' && mbtiNS === 'S');
    if (isFRMatch) matchCount++;
    details.push({
      axisName: '현실/가상관 (N/S - F/R)',
      status: isFRMatch ? '일치' : '보완',
      desc: isFRMatch 
        ? `${mbtiNS === 'N' ? '상상과 세계관(N)' : '실제적이고 현실적인(S)'} 성향이 영화 소비 취향(F/R)에서도 일관되게 드러납니다.`
        : `현실에선 ${mbtiNS === 'N' ? '이상(N)' : '현실(S)'}을 지향하지만, 영화를 볼 때는 ${mvtiFR === 'F' ? '가상(F)' : '현실(R)'}을 즐기는 보완 관계입니다.`
    });

    // 2. H-L vs E-I
    const mvtiHL = mvtiLetters[1];
    const mbtiEI = mbtiLetters[0];
    const isHLMatch = (mvtiHL === 'H' && mbtiEI === 'E') || (mvtiHL === 'L' && mbtiEI === 'I');
    if (isHLMatch) matchCount++;
    details.push({
      axisName: '에너지/자극도 (E/I - H/L)',
      status: isHLMatch ? '일치' : '보완',
      desc: isHLMatch 
        ? `${mbtiEI === 'E' ? '역동적 에너지(E)' : '차분한 성향(I)'}이 영화 자극 템포(H/L)에서도 일치하게 적용됩니다.`
        : `현실의 ${mbtiEI === 'E' ? '외향성(E)' : '내향성(I)'}과 달리, 영화에서는 ${mvtiHL === 'H' ? '고자극(H)' : '저자극(L)'}을 통해 일상의 에너지 균형을 맞춥니다.`
    });

    // 3. E-I vs T-F
    const mvtiEI_axis = mvtiLetters[2];
    const mbtiTF = mbtiLetters[2];
    const isEIMatch = (mvtiEI_axis === 'E' && mbtiTF === 'F') || (mvtiEI_axis === 'I' && mbtiTF === 'T');
    if (isEIMatch) matchCount++;
    details.push({
      axisName: '의사결정/중시도 (T/F - E/I)',
      status: isEIMatch ? '일치' : '보완',
      desc: isEIMatch 
        ? `${mbtiTF === 'F' ? '감정적 연대(F)' : '이성적 논리(T)'} 기제가 영화 속 인물관계 및 장르 해석(E/I)에도 고스란히 반영됩니다.`
        : `현실에서는 ${mbtiTF === 'F' ? '따뜻한 감정(F)' : '논리적 분석(T)'}을 지향하지만, 영화 관람 시에는 ${mvtiEI_axis === 'E' ? '정서적 카타르시스(E)' : '지적 추리(I)'}를 갈구하는 경향이 있습니다.`
    });

    // 4. O-C vs J-P
    const mvtiOC = mvtiLetters[3];
    const mbtiJP = mbtiLetters[3];
    const isOCMatch = (mvtiOC === 'O' && mbtiJP === 'P') || (mvtiOC === 'C' && mbtiJP === 'J');
    if (isOCMatch) matchCount++;
    details.push({
      axisName: '생활양식/완결성 (J/P - O/C)',
      status: isOCMatch ? '일치' : '보완',
      desc: isOCMatch 
        ? `${mbtiJP === 'J' ? '구조적 완성(J)' : '자율적 여백(P)'}을 지향하는 모습이 영화의 결말 선호도(O/C)에서도 잘 대변됩니다.`
        : `생활에선 ${mbtiJP === 'J' ? '계획성(J)' : '유연성(P)'}을 지키지만, 영화의 끝에선 ${mvtiOC === 'O' ? '열린 여운(O)' : '깔끔한 결말(C)'}을 원해 색다른 해방감을 느낍니다.`
    });

    return { matchCount, details };
  };

  const { matchCount, details } = checkMatch();
  
  // 싱크로율 백분율
  const syncRate = matchCount * 25;

  const getSyncStatusText = () => {
    if (matchCount === 4) return '영혼의 동기화 100% (완전 일치)';
    if (matchCount === 3) return '높은 심리적 일관성 (75% 일치)';
    if (matchCount === 2) return '취향과 현실의 유기적 균형 (50% 보완)';
    return '반전 매력의 취향 분출구 (25% 이하 일치)';
  };

  const interpretationText = GAP_INTERPRETATIONS[mbtiLetters] || '간극 해석 데이터를 불러올 수 없습니다.';

  return (
    <div className="comparison-container glass-panel">
      <div className="comparison-header">
        <h3 className="comparison-title">🧠 MBTI ↔ MVTI 간극 분석</h3>
        <div className="sync-score-badge">
          <span className="sync-label">취향 싱크로율</span>
          <span className="sync-value">{syncRate}%</span>
        </div>
      </div>

      <p className="sync-status-text">{getSyncStatusText()}</p>

      {/* 싱크로율 프로그레스 바 */}
      <div className="sync-bar-track">
        <div className="sync-bar-fill" style={{ width: `${syncRate}%` }}></div>
      </div>

      <div className="interpretation-box">
        <div className="quote-mark">“</div>
        <p className="interpretation-text">
          나의 오리지널 성격 <strong>{mbtiLetters}</strong>와 미디어 취향 <strong>{mvtiCode}</strong>의 조화는, {interpretationText}
        </p>
        <div className="quote-mark text-right">”</div>
      </div>

      {/* 축 대조 리스트 */}
      <div className="axis-match-list">
        <h4>성향별 세부 대조 결과</h4>
        {details.map((item, idx) => (
          <div key={idx} className="match-item">
            <div className="match-item-header">
              <span className="item-axis-name">{item.axisName}</span>
              <span className={`item-match-badge ${item.status === '일치' ? 'match' : 'complement'}`}>
                {item.status}
              </span>
            </div>
            <p className="item-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .comparison-container {
          margin-top: 30px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .comparison-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .comparison-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        .sync-score-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .sync-label {
          font-size: 0.7rem;
          color: #718096;
          text-transform: uppercase;
        }

        .sync-value {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--secondary-color, #c8a2c8);
          text-shadow: 0 0 10px rgba(200, 162, 200, 0.2);
        }

        .sync-status-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-top: 0;
          margin-bottom: 12px;
        }

        .sync-bar-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          margin-bottom: 24px;
          overflow: hidden;
        }

        .sync-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-color, #66fcf1) 0%, var(--secondary-color, #c8a2c8) 100%);
          border-radius: 3px;
          transition: width 1s ease-in-out;
        }

        .interpretation-box {
          position: relative;
          background: rgba(102, 252, 241, 0.03);
          border: 1px solid rgba(102, 252, 241, 0.08);
          border-radius: 8px;
          padding: 16px 20px;
          margin-bottom: 24px;
        }

        .quote-mark {
          font-family: Georgia, serif;
          font-size: 2.2rem;
          color: rgba(102, 252, 241, 0.3);
          line-height: 0;
          height: 10px;
        }

        .text-right {
          text-align: right;
          margin-top: 10px;
        }

        .interpretation-text {
          margin: 0;
          font-size: 0.95rem;
          color: #e2e8f0;
          line-height: 1.6;
          text-align: center;
        }

        .interpretation-text strong {
          color: var(--primary-color, #66fcf1);
          font-weight: 700;
        }

        .axis-match-list h4 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
        }

        .match-item {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          padding: 12px 14px;
          margin-bottom: 12px;
        }

        .match-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .item-axis-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #cbd5e0;
        }

        .item-match-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .item-match-badge.match {
          background: rgba(102, 252, 241, 0.12);
          color: var(--primary-color, #66fcf1);
          border: 1px solid rgba(102, 252, 241, 0.3);
        }

        .item-match-badge.complement {
          background: rgba(200, 162, 200, 0.12);
          color: var(--secondary-color, #c8a2c8);
          border: 1px solid rgba(200, 162, 200, 0.3);
        }

        .item-desc {
          margin: 0;
          font-size: 0.8rem;
          color: #a0aec0;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
