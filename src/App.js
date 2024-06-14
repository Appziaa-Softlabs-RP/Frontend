import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './App.css';
import { AppProvider } from "./context/AppContextProvider";
import { Main } from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ReactNotifications />
        <Main />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
