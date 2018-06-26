import hljs from "highlight.js";
import "highlight.js/styles/dracula.css";
import { createBrowserHistory } from "history";
import { H, D, render, store } from "lit-app";
import * as styles from "./styles";
import { cleanUp } from "./core";

const rootElement = document.getElementById("root");
const samples = {
  "Hello World": () => import("./samples/hello-world"),
  "Hello World & Tick": () => import("./samples/hello-world-tick"),
  "Basic Component": () => import("./samples/basic-component"),
  "Stateful Component": () => import("./samples/stateful-component"),
  "Basic event handling": () => import("./samples/basic-event-handling"),
  "Temperature Calculator": () => import("./samples/temperature-calculator"),
  "List of Heroes": () => import("./samples/list-of-heroes"),
  "Silky smooth": () => import("./samples/silky-smooth")
};

const sampleNames = Object.keys(samples);
rootElement.className = styles.root;

store(
  {
    sample: sampleNames[0],
    sampleData: undefined
  },
  { history: createBrowserHistory() }
);

const app = ({ sample, sampleData, $state }) => {
  if (sample) {
    // load sample
    if (sample && rootElement.__sample !== sample) {
      rootElement.__sample = sample;
      samples[sample]().then(res => {
        $state("sampleData", res.default);
        //rootElement.innerHTML = '';
        cleanUp();
        res.default.run();
      });
    }
  }

  function handleChange(e) {
    $state("sample", e.target.value || undefined);
  }

  const highlightBlock = lang =>
    D(part => {
      if (!part.startNode.parentNode) return;
      const text = sampleData ? sampleData[lang] || "" : "";
      const format = text => {
        const result = hljs.highlight("jsx", text);
        part.startNode.parentNode.querySelector("code").innerHTML =
          result.value;
      };
      if (text.then) {
        text.then(format);
      } else {
        format(text);
      }
    });

  return H`
  <div class="${styles.container}">
    <h1>lit-app Sample Collection</h1>
    <div class="form-group">
      <select class="form-control" onchange="${handleChange}">
        ${sampleNames.map(
          x => H`<option value="${x}" selected="${sample === x}">${x}</option>`
        )}
      </select>
    </div>
    <div class="form-group row">
      <div class="col-md-6">
        <h3>${sampleData ? sampleData.lang : ""}</h3>
        <pre>${highlightBlock("other")}<code class="hljs jsx"></code></pre>
      </div>
      <div class="col-md-6">
        <h3>lit-app</h3>
        <pre>${highlightBlock("lit")}<code class="hljs jsx"></code></pre>
      </div>
    </div>
  </div>
`;
};

render(app, document.getElementById("sample-loader"));
