import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import BookTicket from './components/BookTicket';
import Payment from './components/Payment';
import UserOrder from './components/UserOrder';
import ProtectedRoutes from './components/ProtectedRoutes';
import ProtectedRoutesBook from './components/ProtectedRoutesBook';
import ProtectedRoutesOrder from './components/ProtectedRoutesOrder';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
       <Router>
        {/* <Header /> */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-ticket" element = {<ProtectedRoutes><ProtectedRoutesBook><BookTicket/></ProtectedRoutesBook></ProtectedRoutes>}></Route>
          <Route path='/payment' element={<ProtectedRoutes><ProtectedRoutesOrder><Payment/></ProtectedRoutesOrder></ProtectedRoutes>}></Route>
          {/* <Route path="/create-order" element={<CreateOrder />} /> */}
          <Route path="/orders" element={<ProtectedRoutes><UserOrder /></ProtectedRoutes>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
