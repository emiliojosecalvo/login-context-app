import Navbar from './Navbar';
import Login from './Login';
import PageContent from './PageContent';
import { ThemeProvider } from './ThemeContext';
import './App.css';


function App() {
  return (
    <ThemeProvider>{/** All wrap in this component will have acces to the context  */}
      <PageContent>
        <Navbar />
        <Login />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
