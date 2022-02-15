import React, { useState } from 'react';
import CashChoices from './CashLikeHate/CashListHate';
import {HTML5Backend} from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';



function App() {




return (
<DndProvider backend={HTML5Backend}>
<div className="container">
  <CashChoices />



    </div>

    </DndProvider>
  );
}

export default App;
