const reducer = (acc, cur) => acc + cur;

const grader = function(array) {
  console.log(Math.round(array.reduce(reducer) / array.length));
}

const scores = [90, 98, 89, 100, 100, 86, 94];
grader(scores);