import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

//components
import Todo from './Todo';
//hooks
import { useState } from 'react';
//others
import { v4 as uuidv4 } from 'uuid';

const initialTodos=[
    {id:uuidv4(),title:"first",details:"this year",isCompleted:false},
    {id:uuidv4(),title:"second",details:"this month",isCompleted:false},
    {id:uuidv4(),title:"third",details:"today",isCompleted:false},
    {id:uuidv4(),title:"fourth",details:"in 2 years",isCompleted:false},
];


export default function TodoList(){
    const [todos,setTodos]=useState(initialTodos);
    const [titleInput,setTitleInput]=useState("");
    const[filter,setFilter]=useState("all");

    function handleCheck(todoId){
        const updatedTodo= todos.map(todo=>{
            if(todo.id == todoId){
                todo.isCompleted =!todo.isCompleted;
            }
            return todo;
        });
        setTodos(updatedTodo);
    }
    const filterTodos=()=>{
        if(filter == "all"){
            return todos;
        }else if(filter == "done"){
            return todos.filter(f=>f.isCompleted==true);
        }else if(filter == "progress"){
            return todos.filter(f=>f.isCompleted==false);
        }
    }

    const showTodos=filterTodos().map((todo)=>{
        console.log(`id:${todo.title} isCompleted: ${todo.isCompleted}`);
        return <Todo key={todo.id} todo={todo} handleCheck={handleCheck}></Todo>
    });

    function handleAddClick(){
        if(titleInput == ""){
            alert("title cant be empty");
            return;
        }
        const newTodo={
            id:uuidv4(),
            title:titleInput,
            details:"",
            isCompleted:false,
        }
        setTodos([...todos,newTodo]);
        setTitleInput("");
    }
    
    return (
        <Container maxWidth="sm" >
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant='h2'>
                        To-Do
                    </Typography>
                    <Divider/>

                    {/* Filter buttons group */}
                    <ToggleButtonGroup
                        onChange={(e,filterValue)=>{
                            setFilter(filterValue);
                        }}
                        style={{marginTop:"30px"}}
                        exclusive
                        aria-label="text alignment"
                    >
                        <ToggleButton value="all">
                            All
                        </ToggleButton>
                        <ToggleButton value="done">
                            Done
                        </ToggleButton>
                        <ToggleButton value="progress">
                            In Progress
                        </ToggleButton>
                    </ToggleButtonGroup>
                    {/* =====Filter buttons group==== */}
                    {showTodos}
                    {/* todos */}
                    {/* =======todos====== */}

                    {/* INPUT + ADD BUTTON */}
                    <Grid container spacing={2} style={{marginTop:"20px"}}>
                        <Grid size={8}>
                            <TextField
                                value={titleInput}
                                style={{width:"100%"}} 
                                id="outlined-basic" 
                                label="add Todo" 
                                variant="outlined"
                                onChange={(e)=>setTitleInput(e.target.value)}
                                />
                        </Grid>
                        <Grid size={4}>
                            <Button
                                onClick={()=>handleAddClick()}
                                style={{width:"100%",height:"100%"}}
                                variant="contained">Add</Button>
                        </Grid>
                    </Grid>
                    {/* ==========INPUT + ADD BUTTON======= */}

                </CardContent>
            </Card>
        </Container>
    );
}