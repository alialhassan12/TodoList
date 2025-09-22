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
import { TodosContext } from '../contexts/TodosContext';
//hooks
import { useState,useContext,useEffect,useMemo } from 'react';
//Dialog imports
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//others
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    const {todos,setTodos}=useContext(TodosContext);
    const [input,setInput]=useState({
        title:"",
        details:""
    });
    const [showAddDialog,setShowAddDialog]=useState(false);
    const[filter,setFilter]=useState("all");
    
    useEffect(()=>{
        const storageTodos=JSON.parse(localStorage.getItem("todos")) ?? [];
        setTodos(storageTodos);
    },[]);
    
    const completedTodos=useMemo(()=>{
        console.log("completed");
        return todos.filter((t)=>{
            return t.isCompleted;
        });
    },[todos]);
    const notCompleted=useMemo(()=>{
        console.log("not completed");
        return todos.filter((t)=>{
            return !t.isCompleted;
        })
    },[todos]);

    let todoToBeRendered=()=>{
        if(filter == "done"){
            return completedTodos;
        }else if(filter == "progress"){
            return notCompleted
        }else{
            return todos;
        }
    };
    
    const showTodos=todoToBeRendered().map((todo)=>{
        return <Todo key={todo.id} todo={todo}></Todo>
    });

    function handleAddClick(){
        if(input.title == ""){
            alert("title cant be empty");
            return;
        }
        const newTodo={
            id:uuidv4(),
            title:input.title,
            details:input.details,
            isCompleted:false,
        }
        setTodos([...todos,newTodo]);
        localStorage.setItem("todos",JSON.stringify([...todos,newTodo]));
        setInput({title:"",details:""});
    }

    function handleAddDialogClose(){
        setShowAddDialog(false);
    }

    return (
        <Container maxWidth="sm" >
            <Card sx={{ minWidth: 275,maxHeight:"80vh",overflowY:"scroll"}}>
                <CardContent>
                    <Typography variant='h2'>
                        To-Do
                    </Typography>
                    <Divider/>

                    {/* Filter buttons group */}
                    <ToggleButtonGroup
                        value={filter}
                        onChange={(e)=>{
                            setFilter(e.target.value);
                        }}
                        style={{marginTop:"30px"}}
                        exclusive
                        aria-label="text alignment"
                        color="primary"
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
                                value={input.title}
                                style={{width:"100%"}} 
                                id="outlined-basic" 
                                label="add Todo" 
                                variant="outlined"
                                onChange={(e)=>setInput({...input,title:e.target.value})}
                                />
                        </Grid>
                        <Grid size={4}>
                            <Button
                                onClick={()=>{
                                    setShowAddDialog(true);
                                }}
                                style={{width:"100%",height:"100%"}}
                                variant="contained"
                                disabled={input.title.length == 0}
                                >Add
                            </Button>
                            
                        </Grid>
                    </Grid>
                    {/* ==========INPUT + ADD BUTTON======= */}

                </CardContent>
            </Card>
             {/* Add Dialog */}
        <Dialog
            open={showAddDialog}
            onClose={handleAddDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Add Todo "}
            </DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Title"
                fullWidth
                variant="standard"
                value={input.title}
                onChange={(e)=>{
                    setInput({...input,title:e.target.value});
                }}
            />
            <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Details"
                fullWidth
                variant="standard"
                value={input.details}
                onChange={(e)=>{
                    setInput({...input,details:e.target.value});
                }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleAddDialogClose}>Dismiss</Button>
            <Button onClick={()=>{
                handleAddClick();
                handleAddDialogClose();
            }} >
                Add
            </Button>
            </DialogActions>
        </Dialog>
        {/* ===== Add Dialog ==== */}
        </Container>
        
    );
}