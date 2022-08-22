import {
Routes,
Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';

// Hooks
import Approve from './components/contract/write/Approve';
import Transfer from './components/contract/write/Transfer';
import GetBalance from './components/contract/write/GetBalance';

// Window.ethereum type
declare var window: any
export const ethereum = window.ethereum;


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/approve" element={<Approve />} />
      <Route path="/transfer-balance" element={<Transfer />} />
      <Route path="get-balance" element={<GetBalance />} />
    </Routes>

  );
}

export default App;
