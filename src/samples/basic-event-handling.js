import { H, render } from 'lit-app';

export default {
  run() {
    function ActionLink() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }

      return H`
      <a href="#" onclick=${handleClick}>
        Click me
      </a>`;
    }
    render(ActionLink, '#root');
  },
  lit: `
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return H\`
  <a href="#" onclick=\${handleClick}>
    Click me
  </a>\`;
}
`,
  lang: 'react',
  other: `
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
  `
};
