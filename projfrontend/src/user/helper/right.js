import React from "react";
import {Box,TextField,FormControl,InputLabel,Select,MenuItem,Button,Grid,Divider,Avatar,IconButton} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Right = () =>{
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
    
    <Grid container>
        <Grid sx={{mt:15}}>
            <Grid container lg={6} md={6} sx={{justifyContent:"center"}}>
                <Grid item >
                    <IconButton >
                        <Avatar sx={{height:"150px",width:"150px",display:"flex",justifyContent:"center",p:[0,0,0,3],mb:2}}>OP</Avatar>
                    </IconButton>
                </Grid>
                <Grid container spacing={2} sx={{justifyContent:"center"}}>
                    <Grid item lg={4} md={4} >
                        <TextField sx={{marginBottom:1}} label="First Name" placeholder="First Name" fullWidth required></TextField>
                    </Grid>
                <Grid item lg={4} md={4}>
                    <TextField  sx={{marginBottom:1}} label="Last Name" placeholder="Last Name" fullWidth required></TextField>
                </Grid>
                </Grid>
                <Grid container  sx={{justifyContent:"center",bgcolor:"green"}}>
                    <Grid item lg={8} md={8} >
                        <TextField sx={{}} label="Address" placeholder="Address" fullWidth required></TextField>
                    </Grid>
                </Grid>
            </Grid>
       </Grid>
        <Divider orientation="vertical"  flexItem sx={{maxHeight:"1000vh",borderRightWidth: 0.5,bgcolor:"black"}}/>
        <Grid >
            <Grid container>
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="DOB"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                             />
                    </LocalizationProvider>
                </Grid>
                <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Gender"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container  sx={{justifyContent:"center",bgcolor:"green"}}>
                <Grid item lg={8} md={8} >
                    <TextField sx={{}} type="number" label="Phone Number" placeholder="Phone Number" fullWidth required></TextField>
                </Grid>
            </Grid>
            <Grid container  sx={{justifyContent:"center",bgcolor:"green"}}>
                <Grid item lg={8} md={8} >
                    <TextField sx={{}} label="Address" placeholder="Address" fullWidth required></TextField>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item >
                    <TextField sx={{marginBottom:5}} label="City" placeholder="City" fullWidth required></TextField>
                </Grid>
                <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="State"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item >
                    <TextField sx={{marginBottom:5}} label="City" placeholder="City" fullWidth required></TextField>
                </Grid>
                <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="State"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{justifyContent:"right"}}>
                <Button  sx={{bgcolor:"#00a86b",p:1,textTransform:"none"}} variant="contained" label="">Login/Signup</Button>
                <Button  sx={{bgcolor:"#00a86b",p:1,textTransform:"none"}} variant="contained" label="">Login/Signup</Button>
            </Grid>
        </Grid>
    </Grid>
    )
}
export default Right;