$(() => {
  const options = {
    legend: {
      show: false
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
      hoverable: true
    },
    yaxis: {
      min: undefined
    }
  };

  // const data = [ [55, 0], [56, 0], [57, 0], [58, 0], [59, 0], [60, 0] ];
  const data = [ [55, 0], [56, -0.5], [57, -1.1], [58, -0.2], [59, 0], [60, 1] ];

  // find the min in the data and set y-axis min to it
  const yaxisMin = data.reduce((prev, curr) => Math.min(curr[1], prev), 0);
  options.yaxis.min = yaxisMin;

  const plot = $.plot('#placeholder', [ data ], options);
});

