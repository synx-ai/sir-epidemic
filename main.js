'use strict';

var asciichart = require ('asciichart')
var ndarray = require('ndarray')
var rk4 = require('ode-rk4')

var SIR_model = (dydt, y, t) => {
  let S = y[0];
  let I = y[1];
  let R = y[2];
  let beta = 0.35;
  let gamma = 0.1;

  let dS_dt = -beta*S*I;
  let dI_dt = beta*S*I - gamma*I;
  let dR_dt = gamma*I;

  dydt[0] = dS_dt;
  dydt[1] = dI_dt;
  dydt[2] = dR_dt;
}

let SIR0 = [0.9, 0.1, 0.0];
let n = 10000;
let t0 = 0;
let dt = 1;

let solution = rk4(SIR0, SIR_model, t0, dt);

let t = [], S = [], I = [], R = [];

for (var i = 0; i <= n; i += 100) {
  solution.step();
  t.push(solution.t);
  S.push(solution.y[0]);
  I.push(solution.y[1]);
  R.push(solution.y[2]);
}

console.log('Susceptible');
console.log(asciichart.plot (S, { height: 12 }));
console.log('Infectious');
console.log(asciichart.plot (I, { height: 12 }));
console.log('Recovered');
console.log(asciichart.plot (R, { height: 12 }));
