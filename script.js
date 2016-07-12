document.body.addEventListener('mouseup', function(e) {
  var highlightMenu = document.querySelector('.highlightMenu');
  if (window.getSelection().toString().length > 0) {
    var selectedText = window.getSelection();
    var textCoordinates = selectedText.getRangeAt(0).getBoundingClientRect();
    highlightMenu.classList.toggle('highlightMenu--active');
    highlightMenu.style.top = (textCoordinates.top - highlightMenu.getBoundingClientRect().height - 8) + 'px';
    highlightMenu.style.left = (textCoordinates.left + textCoordinates.width / 2 - highlightMenu.getBoundingClientRect().width / 2) + 'px';
  } else {
    highlightMenu.classList.remove('highlightMenu--active');
  }
});
window.addEventListener('mousedown', function() {
  document.querySelector('.highlightMenu').classList.remove('highlightMenu--active');
})