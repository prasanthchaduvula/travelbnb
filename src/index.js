// var React = require("react");
import React from 'react';

// var ReactDom = require("react-dom");
import ReactDOM from 'react-dom';

import Top from './components/Top';
// importing stylesheet
import '../src/assets/stylesheet/style.scss';
// header component
function App() {
  return <Top />;
}
ReactDOM.render(<App />, document.getElementById('root'));
