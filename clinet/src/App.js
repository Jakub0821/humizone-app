import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat/:topic" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
