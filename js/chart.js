const DECORATORS = [
  'jquery.flot',
  'jquery.flot.time',
  'jquery.flot.crosshair',
  'jquery.flot.selection',
  'jquery.flot.resize',
  'jquery-ui'
];

require(
  [ 'jquery', 'data', 'options', 'find_min', 'size_chart', 'log', ...DECORATORS ],
  ($, data, options, findMin, sizeChart, log) => {

  const $setYAxisMin = $('#set-yaxis-min');
  let plot;

  function drawChart() {
    if (plot) {
      plot.destroy();
    }

    let yaxisMin;
    if ($setYAxisMin.is(':checked')) {
      yaxisMin = findMin(data);
    }
    options.yaxis.min = yaxisMin;
    log('yaxisMin', yaxisMin);

    const $placeholder = $('#placeholder');
    plot = $.plot($placeholder, data, options);

    log('options', JSON.stringify(plot.getOptions()));
  }

  $(function start() {
    const $demoContainer = $('.demo-container');
    $demoContainer.resize(() => {
      log('resize', `Placeholder is now ${$demoContainer.width()}x${$demoContainer.height()} px`);
    });

    const $mainContainer = $('.flexbox-main');
    sizeChart($mainContainer, $demoContainer);
    $(window).on('resize', (event) => {
      const { target } = event;
      if (target === window) {
        sizeChart($mainContainer, $demoContainer);
      }
    });
    // $demoContainer.resizable({ handles: 'e, s' });

    $setYAxisMin.prop('checked', true);
    $setYAxisMin.change(drawChart);

    drawChart();
  });
});
