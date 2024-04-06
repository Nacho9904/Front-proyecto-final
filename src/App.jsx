import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SobreNosotros1 } from './Pages/SobreNosotros';
import React from 'react';



function App() {
  return (
    <BrowserRouter>
    
<Routes>
  <Route path='/' element ={<SobreNosotros1/>}></Route>
</Routes>

    </BrowserRouter>

    

  );
}

export default App;