module.exports = function solveEquation(equation) {
  let reg_a = /-?\d*(?=\s\*\sx\^2)/;
  let reg_b = /-?\s\d*(?=\s\*\sx)/;
  let reg_c = /-?\s\d*$/;
  let a = reg_a.exec(equation);
  let b = reg_b.exec(equation);
  let c = reg_c.exec(equation);
  a = a !== null ? +a[0] : 1;
  b = b !== null ? +b[0].replace(' ','') : 1;
  c = c !== null ? +c[0].replace(' ','') : 0;
  var x1 = (-1 * b + Math.round(Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
  var x2 = (-1 * b - Math.round(Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
  return [x1,x2].sort((a,b)=>a-b);
};
