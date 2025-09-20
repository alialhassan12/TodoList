import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
//icons
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function Todo({todo,handleCheck}){
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
                                    handleCheck(todo.id);
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