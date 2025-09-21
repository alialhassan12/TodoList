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
import { useState,useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

export default function Todo({todo}){
    const {todos,setTodos}=useContext(TodosContext);
    const [showDeleteDialog,setShowDeleteDialog]=useState(false);
    const [showUpdateDialog,setShowUpdateDialog]=useState(false);
    const [edit,setEdit]=useState({
        title:todo.title,
        details:todo.details,
    });
    
    // Event handlers
    function handleCheck(){
        const updatedTodo= todos.map(t=>{
            if(t.id == todo.id){
                todo.isCompleted =!todo.isCompleted;
            }
            return t;
        });
        setTodos(updatedTodo);
    }

    function handleDelete(){
        const updatedTodo=todos.filter((t)=>{
            return t.id !=todo.id;
        });
        setTodos(updatedTodo);
    }

    function handleEdit(){
        const updateTodo=todos.map((t)=>{
            if(t.id == todo.id){
                return {...t,title:edit.title,details:edit.details}
            }else{
                return t;
            }
        });
        setTodos(updateTodo);
    }

    function handleDeleteDialogClose(){
        setShowDeleteDialog(false);
    }
    function handleUpdateDialogClose(){
        setShowUpdateDialog(false);
    }

    return(
        <>
        <Card className='todoCard' sx={{ minWidth: 275,background:"#283593",marginTop:"30px" }} >
                <CardContent >
                    <Grid container spacing={2}  display="flex" justifyContent="center" alignItems="center">
                        <Grid size={8} >
                            <Typography variant='h5' sx={{textAlign:"start",fontWeight:"bold"}}>
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
                                onClick={()=>setShowUpdateDialog(true)}
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
                                    setShowDeleteDialog(true);
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
        
        {/* Delete Dialog */}
        <Dialog
            open={showDeleteDialog}
            onClose={handleDeleteDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want delete this Todo?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleDeleteDialogClose}>Disagree</Button>
            <Button onClick={()=>{
                handleDelete();
                handleDeleteDialogClose();
            }} >
                Agree
            </Button>
            </DialogActions>
        </Dialog>
        {/* ===== Delete Dialog ==== */}

        {/* Update Dialog */}
        <Dialog
            open={showUpdateDialog}
            onClose={handleUpdateDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Edit Todo"}
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
                    value={edit.title}
                    onChange={(e)=>{
                        setEdit({...edit,title:e.target.value});
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
                    value={edit.details}
                    onChange={(e)=>{
                        setEdit({...edit,details:e.target.value});
                    }}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleUpdateDialogClose}>Ignore</Button>
            <Button onClick={()=>{
                handleEdit();
                handleUpdateDialogClose();
            }} >
                Edit
            </Button>
            </DialogActions>
        </Dialog>
        {/* ===== Update Dialog ==== */}
        </>
    );
}