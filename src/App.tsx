import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './page/Landing';
import { GlobalProvider } from './store/GlobalState';
import UseReducer from './page/UseReducer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/useReducer" element={<UseReducer />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
