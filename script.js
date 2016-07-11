document.body.addEventListener('mouseup', function(e) {
  var popup = document.querySelector('.highlightMenu');
  if (window.getSelection().toString().length > 0) {
    var selectedText = window.getSelection();
    var textCoordinates = selectedText.getRangeAt(0).getBoundingClientRect();
    popup.classList.toggle('highlightMenu--active');
    popup.style.top = (textCoordinates.top - popup.getBoundingClientRect().height - 8 + window.scrollY) + 'px';
    popup.style.left = (textCoordinates.left + textCoordinates.width / 2 - popup.getBoundingClientRect().width / 2) + 'px';
  } else {
    popup.classList.remove('highlightMenu--active');
  }
},false);

window.addEventListener('mousedown', function(e) {
  document.querySelector('.highlightMenu').classList.remove('highlightMenu--active');
  
},false);
