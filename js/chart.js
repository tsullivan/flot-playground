const decorators = [
  'jquery.flot',
  'jquery.flot.time',
  'jquery.flot.crosshair',
  'jquery.flot.selection',
  'jquery.flot.resize',
  'jquery-ui'
];

require(['jquery', 'data', 'options', 'log', ...decorators], ($, data, options, log) => {
  const MARGIN = 20;
  $(function start() {

    const $mainContainer = $('.flexbox-main');
    const $demoContainer = $('.demo-container');

    $demoContainer.resizable({
      handles: 'e, s',
      maxHeight: $mainContainer.height() - MARGIN,
      maxWidth:  $mainContainer.width() - MARGIN
    });
    $demoContainer.resize(() => {
      log('resize', `Placeholder is now ${$demoContainer.width()}x${$demoContainer.height()} px`);
    });

    $demoContainer.height(($mainContainer.height() * 0.8) - MARGIN);
    $demoContainer.width(($mainContainer.width() * 0.8) - MARGIN);

    const yaxisMin = findMin(data);
    options.yaxis.min = yaxisMin;
    const $placeholder = $('#placeholder');
    const plot = $.plot($placeholder, data, options);

    log('options', JSON.stringify(plot.getOptions()));
    log('yaxisMin', yaxisMin);
  });
});
