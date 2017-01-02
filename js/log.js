define(['jquery'], ($) => {
  return (tag, message) => {
    const $el = $('.messages');
    $el.append(`[${tag}] ${message}`);
    $el.append("\n");

    $el.scrollTop($el[0].scrollHeight);
  }
});
