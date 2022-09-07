import React from "react";
import {Grid,Box,Avatar, Typography} from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Menu from "../core/Menu";


const UserHome = () =>{
    return(
        <>
        <Menu/>
        <Grid container sx={{display:"flex"}}>
            <Grid item sm={11} sx={{mt:10}}>
            <Grid container sx={{justifyContent:"center"}}>
                    <Grid item>
                    <Avatar sx={{height:"200px",width:"200px",display:"flex",justifyContent:"center",p:[0,0,0,3],mb:2}}>OP</Avatar>
                        <Typography variant="h4" sx={{fontWeight:"bold"}}>Deepak Kumar</Typography>
                        <Typography align="center" sx={{color:"#a1a1a1"}}>Full Stack Developer</Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{justifyContent:"space-around",mt:5}}>
                    <Grid item>
                        <Typography align="center" sx={{color:"#a1a1a1"}}>Gender</Typography>
                        <Typography variant="h5" sx={{fontWeight:"bold"}}>Male</Typography> 
                    </Grid>
                    <Grid item>
                        <Typography align="center" sx={{color:"#a1a1a1"}}>DOB</Typography>
                        <Typography variant="h5" sx={{fontWeight:"bold"}}>20/03/2000</Typography> 
                    </Grid>
                    <Grid item>
                        <Typography align="center" sx={{color:"#a1a1a1"}}>Nationality</Typography>
                        <Typography variant="h5" sx={{fontWeight:"bold"}}>India</Typography> 
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={1} sx={{}} >
                <Box sx={{p:2}}>
                    <Avatar sx={{bgcolor:"#99E6b3",p:1,m:2}}>
                        <ModeEditOutlineOutlinedIcon  sx={{color:"white",fontSize: 30,}}/>
                    </Avatar>
                    <Avatar sx={{bgcolor:"red",p:1,m:2}}>
                        <DeleteOutlineIcon sx={{color:"white",fontSize: 40,borderRadius:"0.5",}}/>
                    </Avatar>
                </Box>
            </Grid>
        </Grid>
    </>
    )
}
export default UserHome;