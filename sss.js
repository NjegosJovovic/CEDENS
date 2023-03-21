var slider = document.getElementById('slider');
var images = slider.getElementsByTagName('img');
var current = 0;

setInterval(function() {
  for (var i = 0; i < images.length; i++) {
    images[i].className = '';
  }
  current = (current != images.length - 1) ? current + 1 : 0;
  images[current].className = 'active';
}, 5000);