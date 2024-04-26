// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import NewBill from './pages/NewBill';

// flow: upload receipt or list of items and prices, enter list of names and/or
// phone numbers, shows scrollable receipt with item, price, and text box to
// enter names, when you tap on a text box it expands to take up the width
// of the screen, name of item becomes a header

/* TODO:
- homepage:
-- navbar: Upload Bill, View All Bills, shows whichever you're not on
-- default home is upload bill

*/
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newBill/" element={<NewBill />} />
        </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App
