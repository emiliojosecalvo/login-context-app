import Navbar from './Navbar';
import Login from './Login';
import PageContent from './PageContent';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import './App.css';


function App() {
  return (
    <ThemeProvider>{/* All wrap in this component will have acces to the context  */}
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Login />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
