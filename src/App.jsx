import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import { GlobalStyle } from './styles/GlobalStyles';

import Header from './components/Header';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Quote from './pages/Quote/index.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;