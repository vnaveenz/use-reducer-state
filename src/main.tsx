// import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import main from './learn';

main();

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
// ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
export default root;
