function negateSeries(series) {
  return series.map(point => [ point[0], -point[1] * .2 ]);
}

let _crazeFactor = 0;
function craze(seed) {
  seed = seed || 100000;
  return seed * _crazeFactor++;
}

function bumpSeries(series) {
  return series.map(point => [ point[0], craze(point[1]) ]);
}

$(function start() {
  DATA[0] = negateSeries(DATA[0]);
  DATA[1] = bumpSeries(DATA[1]);

  // find the min in the data and set y-axis min to it
  const yaxisMin = DATA.reduce((prev, curr) => {
    const currMin = curr.reduce((innerPrev, innerCurr) => Math.min(innerCurr[1], innerPrev), 0);
    return Math.min(prev, currMin);
  }, 0);
  OPTIONS.yaxis.min = yaxisMin;

  const plot = $.plot('#placeholder', DATA, OPTIONS);
});
