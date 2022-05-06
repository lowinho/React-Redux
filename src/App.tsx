import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Router } from './routes/routes';
// import { AuthContextProvider } from './contexts/AuthContext';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { combineTheme, dark, light } from './styles/themes';


function App() {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));
  const themes = useSelector((state: any) => state.theme.name);

  console.log('outside', themes)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme === 'dark' ? combineTheme(dark) : combineTheme(light));
    }
  }, [themes])

  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
