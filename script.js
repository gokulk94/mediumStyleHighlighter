document.body.addEventListener('mouseup', e => {
  const hltMenu = document.getElementsByClassName('hltMenu')[0];
  if (window.getSelection().toString().length > 0 && e.target.tagName !== 'BUTTON' && !e.target.className.includes('hlt')) {
    const selectedText = window.getSelection();
    const textCoordinates = selectedText.getRangeAt(0).getBoundingClientRect();
    hltMenu.classList.toggle('hltMenu--active');
    hltMenu.style.top =`${textCoordinates.top - hltMenu.getBoundingClientRect().height - 8 + window.scrollY}px`;
    hltMenu.style.left =`${textCoordinates.left + textCoordinates.width / 2 - hltMenu.getBoundingClientRect().width / 2}px`;
  }
}, false);

window.addEventListener('mousedown', e => {
  if (e.target.tagName !== 'BUTTON' && !e.target.className.includes('hlt')) {
    document.getElementsByClassName('hltMenu')[0].classList.remove('hltMenu--active');
  } else {
    e.preventDefault();
  }
}, false);
