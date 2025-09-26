import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//Dialog imports
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//icons
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
//hooks
import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

export default function Todo({todo,showDeleteDialog,showUpdateDialog}){
    const {todos,setTodos}=useContext(TodosContext);
    
    // Event handlers
    function handleCheck(){
        const updatedTodo= todos.map(t=>{
            if(t.id == todo.id){
                todo.isCompleted =!todo.isCompleted;
            }
            return t;
        });
        setTodos(updatedTodo);
        localStorage.setItem("todos",JSON.stringify(updatedTodo));
    }

    return(
        <>
            <Card className='todoCard' sx={{ minWidth: 275,background:"#283593",marginTop:"30px" }} >
                    <CardContent >
                        <Grid container spacing={2}  display="flex" justifyContent="center" alignItems="center">
                            <Grid size={8} >
                                <Typography variant='h5' sx={{textAlign:"start",fontWeight:"bold",textDecoration:todo.isCompleted?"line-through":"none"}}>
                                    {todo.title}
                                </Typography>
                                <Typography variant='h6' sx={{textAlign:"start",fontWeight:"100"}}>
                                    {todo.details}
                                </Typography>
                            </Grid>
                            <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                                <IconButton
                                    onClick={()=>{
                                        handleCheck();
                                    }}
                                    className='iconButton'
                                    aria-label="checkIcon" 
                                    style={{
                                        background:todo.isCompleted ? "#8bc34a" : "white",
                                        color:todo.isCompleted ? "white" : "#8bc34a",
                                        border:" 3px solid #8bc34a "
                                    }}>
                                    <CheckIcon />
                                </IconButton>
                                <IconButton 
                                    onClick={()=>{showUpdateDialog(todo)}}
                                    className='iconButton'
                                    aria-label="checkIcon" 
                                    style={{
                                        background:"white",
                                        color:"#1769aa",
                                        border:" 3px solid #1769aa"}
                                    }>
                                    <EditOutlinedIcon />
                                </IconButton>
                                <IconButton
                                    onClick={()=>{
                                        showDeleteDialog(todo);
                                    }}
                                    className='iconButton'
                                    aria-label="checkIcon" 
                                    style={{
                                        background:"white",
                                        color:"#b23c17",
                                        border:" 3px solid #b23c17 "
                                    }}>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
            </Card>
        </>
    );
}