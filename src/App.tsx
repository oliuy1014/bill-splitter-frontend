import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import NewBill from './pages/NewBill';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// flow: upload receipt or list of items and prices X
// enter buyers:
// -- scrollable receipt of item, qty, price rows with input text box
// -- entering name:
// -- -- input suggests from existing people
// -- -- first row of suggestion is "Add {name} to people"
// -- -- new person posts to DB
// -- -- submitting person list adds them to item and bill
// -- list of names and/or phone numbers
// enter names, when you tap on a text box it expands to take up the width
// of the screen, name of item becomes a header

/* TODO:
-- make add buyer functionality
-- functionality for adding person as buyer to items and thus to bills
-- functionality for adding total cost to buyer
*/

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newBill/" element={<NewBill />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  ) 
}

export default App
