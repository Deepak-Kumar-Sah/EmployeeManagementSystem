import React from "react";
import {
    Container,
    Box,
    Typography,
    AppBar,
    CssBaseline,
    ScopedCssBaseline,
    Toolbar,
    IconButton,
    Tooltip,
    Avatar
} from '@mui/material';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../store/slices/userDB'

const Menu = ()=>{
    const dispatch =useDispatch();
    const onSubmit = ()=>{
        dispatch(logoutUser("false"));
    };
    return(
        <>
            <AppBar position="sticky" sx={{bgcolor:"white",color:"black",}}>
                <Toolbar sx={{display:"flex",justifyContent:"space-between",}}>
                        <Typography variant="h6" >Management System</Typography>
                        <Box sx={{flexGrow:0,}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={onSubmit}>
                                    <Avatar sx={{ bgcolor: "red",display:"flex" }} >OP</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>      
            </AppBar>  
        </>
    )
}
export default Menu;