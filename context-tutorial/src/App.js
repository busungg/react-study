import React from 'react';
import { ColorProvider } from './contexts/color';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
}

export default App;
