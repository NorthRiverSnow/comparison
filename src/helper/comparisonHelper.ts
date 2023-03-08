export const calc = {
  ['===']: <T>(val1: T, val2: T) => val1 === val2,
  ['!==']: <T>(val1: T, val2: T) => val1 !== val2,
  ['<=']: <T>(val1: T, val2: T) => val1 <= val2,
  ['>=']: <T>(val1: T, val2: T) => val1 >= val2,
  ['<']: <T>(val1: T, val2: T) => val1 < val2,
  ['>']: <T>(val1: T, val2: T) => val1 > val2,
  ['&&']: (val1: boolean, val2: boolean) => val1 && val2,
  ['||']: (val1: boolean, val2: boolean) => val1 || val2,
};

const getCalcResult = (ope: string, val1: string, val2: string) => {
  if (ope !== '===' && ope !== '!==' && ope !== '<=' && ope !== '>=' && ope !== '<' && ope !== '>') {
    throw new Error('OPERATION_ERROR');
  } else if (ope === '===' || ope === '!==') {
    return calc[ope](val1, val2);
  } else {
    return calc[ope]<number>(Number(val1), Number(val2));
  }
};

const getAndCalcResult = (formula: string) => {
  const andSprit = formula.split(' && ');
  const andTmpResult: boolean[] = [];
  for (const and of andSprit) {
    const formulaArr = and.split(' ');
    const ope = formulaArr[1];
    andTmpResult.push(getCalcResult(ope, formulaArr[0], formulaArr[2]));
  }
  return andTmpResult.every((x) => x === true);
};

export const calcCaller = (formula: string) => {
  const orSprit = formula.split(' || ');
  const results: boolean[] = [];
  for (const or of orSprit) {
    results.push(getAndCalcResult(or));
  }
  return results.some((x) => x);
};
