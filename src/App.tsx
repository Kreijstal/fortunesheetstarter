import React from 'react';
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Workbook data={[{ name: "Sheet1" }]} />
    </div>
  );
}

export default App;
