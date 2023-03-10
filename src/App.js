import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Home from './pages/Home';
import AuthProvider from './store/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Auth />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
