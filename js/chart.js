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

    const yaxisMin = findMin(data);
    options.yaxis.min = yaxisMin;
    const $placeholder = $('#placeholder');
    const plot = $.plot($placeholder, data, options);

    log('options', JSON.stringify(plot.getOptions()));
    log('yaxisMin', yaxisMin);
  });
});
