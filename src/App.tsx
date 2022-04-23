import ReactWordcloud, { OptionsProp } from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from './data/words';

const options: OptionsProp = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "Nanum Gothic",
  fontSizes: [12, 90],
  fontStyle: "normal",
  fontWeight: "bold",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

function App() {
  return (
    <div>
      <p>Configure options in the code editor!</p>
      <div style={{ height: 400, width: 600 }}>
        <ReactWordcloud options={options} words={words} />
      </div>
    </div>
  );
}

export default App;
