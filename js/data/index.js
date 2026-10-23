import { U01 } from './u01_06.js';
import { U07 } from './u07_12.js';
import { U13 } from './u13_18.js';
import { U19 } from './u19_23.js';
import { U24 } from './u24_30.js';
import { U31 } from './u31_36.js';
import { U37 } from './u37_42.js';
import { U43 } from './u43_46.js';
import { U47 } from './u47_50.js';

export const UNITS = [...U01, ...U07, ...U13, ...U19, ...U24, ...U31, ...U37, ...U43, ...U47];

export const SECTIONS = [
  { id: 's1', from: 1, to: 6, name: '섹션 1 · 첫 걸음', sub: '출력 · 변수 · 입력', color: '#3776ab' },
  { id: 's2', from: 7, to: 12, name: '섹션 2 · 판단하기', sub: '비교 · 조건문', color: '#e07a3f' },
  { id: 's3', from: 13, to: 18, name: '섹션 3 · 반복하기', sub: 'while · for', color: '#7a62d6' },
  { id: 's4', from: 19, to: 23, name: '섹션 4 · 문자열 다루기', sub: '인덱싱 · 메서드', color: '#3d9b78' },
  { id: 's5', from: 24, to: 30, name: '섹션 5 · 리스트', sub: '여러 값을 한꺼번에', color: '#d9534f' },
  { id: 's6', from: 31, to: 36, name: '섹션 6 · 자료구조', sub: '튜플 · 딕셔너리 · 집합', color: '#4caf6b' },
  { id: 's7', from: 37, to: 42, name: '섹션 7 · 함수', sub: '코드를 재사용하기', color: '#c0527a' },
  { id: 's8', from: 43, to: 46, name: '섹션 8 · 오류·모듈·파일', sub: '실전 도구', color: '#2f4f8f' },
  { id: 's9', from: 47, to: 50, name: '섹션 9 · 클래스와 프로젝트', sub: '내 프로그램 만들기', color: '#8a5cd6' },
];
