const funcAdd = require('./add');
const funcSub = require('./sub');
const funcMul = require('./mul');
const funcDiv = require('./div');

const add = funcAdd.add;
const sub = funcSub.sub;
const mul = funcMul.mul;
const div = funcDiv.div;

alert(`результат 5 + 6 равнен ${add(5, 6)}`);
alert(`результат 5 - 6 равнен ${sub(5, 6)}`);
alert(`результат 5 * 6 равнен ${mul(5, 6)}`);
alert(`результат 6 / 3 равнен ${div(6, 3)}`);

module.exports = {
  add: add,
  sub: sub,
  mul: mul,
  div: div
}

