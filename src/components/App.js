import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BadgeNew from "../pages/badgenew";

function App(){

  return (
    <BrowserRouter>
      <Route path="/badges" component={BadgeNew} />
    </BrowserRouter>
  );
  
}

export default App