import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const missions=[
    {id:0,title:"m1",status:"done"},
    {id:1,title:"m2",status:"progress"},
    {id:2,title:"m3",status:"progress"},
    {id:3,title:"m4",status:"done"},
];

export default function Header(){
    const [alignment,setAlignment]=useState(null);
    const theme=useTheme();

    const showMissions=()=>{
        if(alignment == null || alignment == "all"){
            return missions;
        }else if(alignment == "progress"){
            const progMissions=missions.filter((a)=>a.status=="progress");
            return progMissions;
        }else if (alignment == "done"){
            const doneMissions=missions.filter((a)=>a.status=="done");
            return doneMissions;
        }
    }

    return (
        <>
        <h1>To-Do</h1>
        <Divider/>
        <ToggleButtonGroup 
            color="primary"
            aria-label="status" 
            exclusive
            onChange={(e,newAlignment)=>{
                setAlignment(newAlignment);
            }}
        >
            <ToggleButton  value="all" sx={{
                '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    borderColor: theme.palette.primary.main,
                },
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
            }}>
                all
            </ToggleButton>
            <ToggleButton value="done" sx={{
                '&.Mui-selected': {
                    backgroundColor: `${theme.palette.primary.main} !important`,
                    color: 'white !important',
                    borderColor: `${theme.palette.primary.main} !important`
                },
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
            }}>
                Done
            </ToggleButton>
            <ToggleButton value="progress" sx={{
                '&.Mui-selected': {
                    backgroundColor: `${theme.palette.primary.main} !important`,
                    color: 'white !important',
                    borderColor: `${theme.palette.primary.main} !important`
                },
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
            }}>
                In Progress
            </ToggleButton>
        </ToggleButtonGroup>
        </>
    );
}