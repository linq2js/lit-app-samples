import { H, render } from 'lit-app';

export default {
  run() {
    render(H``, '#root');
  },
  lang: 'react',
  other: `
// as function
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// as Class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
`,
  lit: `
// as function
function Welcome(props, ...children) {
  return H\`<h1>Hello, \${props.name}</h1>\`;
}

// as Class
component().view(props => H\`
  <h1>Hello, \${props.name}</h1>
\`)

`
};
