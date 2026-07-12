import { useState, useEffect } from 'react';

/**
 * LocalStorage와 React State를 동기화하고 예외 처리를 내장한 Custom Hook
 * @param {string} key LocalStorage에 저장할 키 이름
 * @param {any} initialValue 초기값
 * @returns {[any, Function]} state와 setState를 반환
 */
export function useLocalStorage(key, initialValue) {
  // 초기값 로드 시 예외 처리 적용
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      return initialValue;
    } catch (error) {
      console.error(`⚠️ LocalStorage [${key}] 읽기 또는 파싱 오류:`, error);
      // JSON 형식이 깨졌을 경우 등 예외 복구를 위해 초기값으로 안전하게 세팅
      return initialValue;
    }
  });

  // storedValue가 변경될 때마다 LocalStorage 갱신 및 에러 캡처
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`⚠️ LocalStorage [${key}] 저장 오류 (용량 초과 등):`, error);
      // QuotaExceededError 등 브라우저 저장 실패 예외 처리
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
