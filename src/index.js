import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderTextGenerator = (containerId) => {
  ReactDOM.render(
    <App/>,
    document.getElementById(containerId),
  );
};

window.unmountTextGenerator = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};