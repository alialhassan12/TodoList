import Container from '@mui/material/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import './App.css'
import { createTheme,ThemeProvider } from '@mui/material/styles';


const theme=createTheme({
  typografy:{
    fontFamily:["funnelDisplay"]
  }
});

function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <TodoList></TodoList>
    </ThemeProvider>

    {/* <ThemeProvider theme={theme}>
      <Container maxWidth="sm" 
        style={{display:'flex',
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                background:"#888",
                gap:"10px",
                padding:"10px",
                borderRadius:"6px",
              }
      }>
        <Header/>
        <Footer/>
      </Container>
    </ThemeProvider> */}
    </>
  )
}

export default App
