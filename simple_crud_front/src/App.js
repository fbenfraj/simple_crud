import React from 'react';
import './App.css';

import { AddValue } from "./components/AddValue"
import { ReadValues } from "./components/ReadValues"
import { UpdateValue } from './components/UpdateValue';

function App() {
  return (
    <div>
      <AddValue />
      <br />
      <ReadValues />
      <UpdateValue />
    </div>
  );
}

export default App;
