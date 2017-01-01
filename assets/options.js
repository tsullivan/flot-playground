const CHART_LINE_COLOR = '#d2d2d2';
const CHART_TEXT_COLOR = '#9c9c9c';
window.OPTIONS = {
  legend: {
    show: true,
    container: $('#legend')
  },
  xaxis: {
    color: CHART_LINE_COLOR,
    timezone: 'browser',
    mode: 'time', // requires `time` flot plugin
    font: {
      color: CHART_TEXT_COLOR
    }
  },
  yaxis: {
    color: CHART_LINE_COLOR,
    font: {
      color: CHART_TEXT_COLOR
    }
    // tickFormatter: options.tickFormatter
  },
  series: {
    points: {
      show: true,
      radius: 1
    },
    lines: {
      show: true,
      lineWidth: 2
    },
    shadowSize: 0
  },
  grid: {
    margin: 0,
    borderWidth: 1,
    borderColor: CHART_LINE_COLOR,
    hoverable: true
  },
  crosshair: { // requires `crosshair` flot plugin
    mode: 'x',
    color: '#c66',
    lineWidth: 2
  },
  selection: { // requires `selection` flot plugin
    mode: 'x',
    color: CHART_TEXT_COLOR
  }
};

