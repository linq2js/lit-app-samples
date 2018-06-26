import { H, render, component } from 'lit-app';
import { setInterval } from '../core';

export default {
  run() {
    const Clock = component((appState, props, comp) => {
      // init state
      comp.state(() => ({
        date: new Date(),
        onMount() {
          setInterval(() => {
            comp.state({ date: new Date() });
          }, 1000);
        }
      }));
      return {};
    }).view(
      (props, comp) => H`
    <div oncreate="${props.onCreate}">
      <h1>Hello, world!</h1>
      <h2>It is ${comp.state().date.toLocaleTimeString()}.</h2>
    </div>
    `
    );
    render(Clock, '#root');
  },
  lang: 'react',
  other: `
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
`,
  lit: `
const Clock = component((appState, props, comp) => {
  // init state
  comp.state(() => ({
    date: new Date(),
    onMount() {
      setInterval(() => {
        comp.state({ date: new Date() });
      }, 1000);
    }
  }));
  return {};
}).view(
  (props, comp) => H\`
  <div oncreate="\${props.onCreate}" >
    <h1>Hello, world!</h1>
    <h2>It is \${comp.state().date.toLocaleTimeString()}.</h2>
  </div>\`);
render(Clock, '#root');
`
};
