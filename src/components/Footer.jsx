import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function Footer(){
    return(
        <div style={{display:"flex",gap:"10px",width:"100%",justifyContent:"center"}}>
        <TextField id="outlined-basic" label="Add TODO" variant="outlined"/>
        <Button variant="contained" endIcon={<AddIcon />}>
            Add
        </Button>
        </div>
    );
}