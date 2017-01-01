require(['jquery', 'data', 'options', 'jquery.flot', 'jquery.flot.time'], ($, data, options) => {
  const MARGIN = 20;
  $(function start() {
    // find the min in the data and set y-axis min to it
    const yaxisMin = data.reduce((prev, curr) => {
      const currMin = curr.reduce((innerPrev, innerCurr) => Math.min(innerCurr[1], innerPrev), 0);
      return Math.min(prev, currMin);
    }, 0);
    options.yaxis.min = yaxisMin;

    const $mainContainer = $('.flexbox-main');
    const $demoContainer = $('.demo-container');

    /*
    $demoContainer.resizable({
      handles: 'e, s',
      maxHeight: $mainContainer.height() - MARGIN,
      maxWidth:  $mainContainer.width() - MARGIN
    });
    $demoContainer.resize(() => {
      const $this = $(this);
      console.log(`Placeholder is now ${$this.width()}x${$this.height()} px`);
    });
     */

    $demoContainer.height($mainContainer.height() - MARGIN);
    $demoContainer.width($mainContainer.width() - MARGIN);

    const $placeholder = $('#placeholder');
    const plot = $.plot($placeholder, data, options);

    console.log(plot.getOptions());
  });
});
