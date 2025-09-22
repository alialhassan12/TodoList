import TodoList from './components/TodoList';
import './App.css'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { TodosContext } from './contexts/TodosContext';
import { useState } from 'react';

const theme=createTheme({
  typografy:{
    fontFamily:["funnelDisplay"]
  }
});


const initialTodos=[];

function App() {
      const [todos,setTodos]=useState(initialTodos);
  return (
    <>
    <ThemeProvider theme={theme}>
      <TodosContext.Provider value={{todos,setTodos}}>
        <TodoList></TodoList>
      </TodosContext.Provider>
    </ThemeProvider>
    </>
  )
}

export default App
