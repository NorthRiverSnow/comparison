import { expect } from 'chai';
import {} from 'mocha';
import { calcCaller } from '../src/helper/comparisonHelper';

const testFn = calcCaller;

describe('比較計算', () => {
  it('単数の比較', () => {
    expect(testFn('2 === 2')).to.be.eq(true);
    expect(testFn('2 === 3')).to.be.eq(false);
    expect(testFn('2 !== 1')).to.be.eq(true);
    expect(testFn('2 !== 2')).to.be.eq(false);
    expect(testFn('2 <= 2')).to.be.eq(true);
    expect(testFn('1 <= 2')).to.be.eq(true);
    expect(testFn('2 <= 1')).to.be.eq(false);
    expect(testFn('2 >= 2')).to.be.eq(true);
    expect(testFn('1 >= 2')).to.be.eq(false);
    expect(testFn('2 >= 1')).to.be.eq(true);
    expect(testFn('2 < 2')).to.be.eq(false);
    expect(testFn('1 < 2')).to.be.eq(true);
    expect(testFn('2 > 2')).to.be.eq(false);
    expect(testFn('2 > 1')).to.be.eq(true);
  });

  it('複数の比較（or）', () => {
    expect(testFn('a === a || 1 <= 0')).to.be.eq(true);
    expect(testFn('a !== a || 1 > 0')).to.be.eq(true);
    expect(testFn('a !== a || 1 <= 0')).to.be.eq(false);
    expect(testFn('a !== a || 1 <= 0 || 50 < 100')).to.be.eq(true);
    expect(testFn('a !== a || 1 <= 0 || 50 > 100')).to.be.eq(false);
  });

  it('複数の比較（and）', () => {
    expect(testFn('a === a && 1 <= 0')).to.be.eq(false);
    expect(testFn('a !== a && 1 > 0')).to.be.eq(false);
    expect(testFn('a === a && 0 <= 0')).to.be.eq(true);
    expect(testFn('a !== a && 1 <= 0 && 50 < 100')).to.be.eq(false);
    expect(testFn('a === a && 1 <= 1 && 50 > 10')).to.be.eq(true);
  });

  it('複数の比較（and or 複合）', () => {
    expect(testFn('a === a && 1 <= 0 || a === a && 0 <= 0')).to.be.eq(true);
    expect(testFn('a !== a && 1 > 0 || a !== a && 1 <= 1 && 50 < 100')).to.be.eq(false);
    expect(testFn('a !== a && 1 > 0 || a === a && 1 <= 1 && 50 < 100')).to.be.eq(true);
  });
});