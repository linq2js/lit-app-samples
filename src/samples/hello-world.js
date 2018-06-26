import { H, render } from 'lit-app';

export default {
  run() {
    render(H`<h1>Hello, world!</h1>`, '#root');
  },
  lit: `
render(H\`<h1> Hello, world!</h1>\`, '#root');
`,
  lang: 'react',
  other: `
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
  `
};
