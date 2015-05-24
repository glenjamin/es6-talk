show("Hax");

/*












Paste the following snippet into
https://babeljs.io/repl/
to use it for the presentation
*/
/*eslint-disable */
var out;
function init() {
  var windows = document.getElementsByClassName('babel-repl-editor');
  windows[0].style.top = windows[1].style.top = 0;
  var toggle = document.getElementsByClassName('navbar-toggle')[0];
  if (toggle) toggle.parentNode.removeChild(toggle);
  out = document.getElementsByClassName('navbar-brand')[0];
  out.classList.remove('logo');
  out.style.float = 'none';
  out.style.display = 'block';
  out.style.textAlign = 'center';
  init = init = ()=>0;
}
function show(...data) {
  init();
  out.textContent = data
    .map((x) => JSON.stringify(x, null, ' '))
    .join(' \u00A0 ');
}
init();
