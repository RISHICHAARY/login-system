import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Register from './register';

function App() {
  return (
    <div className='container-fluid App'>
      <p className='header-main'>RishiChaary</p>
      <p className='header-sub'>.Com</p>
      <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
