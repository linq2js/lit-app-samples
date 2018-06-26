import { render, H } from 'lit-app';
import { setInterval } from '../core';

export default {
  run() {
    function tick() {
      render(
        H`
        <div>
          <h1>Hello, world!</h1>
          <h2>It is ${new Date().toLocaleTimeString()}.</h2>
        </div>
      `,
        '#root'
      );
    }

    setInterval(tick, 1000);
  },
  lang: 'react',
  other: `
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
`,
  lit: `
function tick() {
  render(H\`
    <div>
      <h1>Hello, world!</h1>
      <h2>It is \${new Date().toLocaleTimeString()}.</h2>
    </div>\`, '#root');
}

setInterval(tick, 1000);
`
};
