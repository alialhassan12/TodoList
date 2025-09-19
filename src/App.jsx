import Container from '@mui/material/Container';
import Header from './header';
import Footer from './Footer';
import './App.css'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';

const theme=createTheme({
  palette:{
    primary:{main:lime[500]},
    secondary:{main:purple[500]}
  }
});
function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" 
        style={{display:'flex',
                flexDirection:"column",
                width:'100%',
                gap:"10px",
                padding:"10px",
                borderRadius:"6px",
              }
      }>
        <Header/>
        <Footer/>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default App
