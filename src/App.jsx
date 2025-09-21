import TodoList from './components/TodoList';
import './App.css'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { TodosContext } from './contexts/TodosContext';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const theme=createTheme({
  typografy:{
    fontFamily:["funnelDisplay"]
  }
});


const initialTodos=[
    {id:uuidv4(),title:"first",details:"this year",isCompleted:false},
    {id:uuidv4(),title:"second",details:"this month",isCompleted:false},
    {id:uuidv4(),title:"third",details:"today",isCompleted:false},
    {id:uuidv4(),title:"fourth",details:"in 2 years",isCompleted:false},
];

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
