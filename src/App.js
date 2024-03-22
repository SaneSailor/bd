import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import { AuthWrapper } from './components/auth/authWrapper';



function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
