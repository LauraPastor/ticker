var headlines = $('.tickers');
var links = $('.tickers a');
var left = headlines.offset().left;
var tickerId;

function movement() {
  left -= 2.5;
  if (left <= -links.eq(0).outerWidth()) {
    left += links.eq(0).outerWidth();
    headlines.append(links.eq(0));
    links = $('.tickers a');
  }
  headlines.css({
      left: left + 'px'
  });
  tickerId = requestAnimationFrame(movement);
}

movement();

headlines.on('mouseover', function(e) {
  cancelAnimationFrame(tickerId);
  $(e.target).css({
    color: 'blue',
    textDecoration: 'underline'
  });
})
headlines.on('mouseout', function(e) {
  $(e.target).css({
    color: '#27DC57',
    textDecoration: 'none'
  });
  movement();
});
