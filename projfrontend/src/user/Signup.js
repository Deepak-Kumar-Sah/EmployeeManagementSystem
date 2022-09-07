import React from "react";
import {Box,TextField,FormControl,InputLabel,Select,MenuItem,Button,Grid,Avatar,IconButton,Divider, Dialog,} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Menu from "../core/Menu";
const Signup = () =>{
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  }
    return(
        <>
        <Menu/>
        <Grid component={Box} sm sx={{display:{sm:"flex",xs:{flexDirection:"column"},justifyContent:"space-around"},marginTop:15}}>
            <Grid sm sx={{}}  >
                <Grid container sx={{display:"flex",flexDirection:"column"}}>
                    <Grid item sm  sx={{display:"flex",justifyContent:"center"}}>
                        <IconButton sx={{}} >
                            <Avatar sx={{height:"100px",width:"100px",display:"flex",justifyContent:"center",p:[0,0,0,3],mb:2}}>OP</Avatar>
                        </IconButton>
                    </Grid>
                    <Grid container sx={{display:{xs:{flexDirection:"none"}},flexDirection:"column",}}>
                        <Grid container  sx={{}} >
                            <Grid item sm xs={4} sx={{margin:2,minWidth:120}}>
                                <TextField sx={{}} label="First Name" placeholder="First Name" fullWidth required></TextField>
                            </Grid>
                            <Grid item sm xs={4}sx={{margin:2,minWidth:120}}>
                                <TextField  sx={{}} label="Last Name" placeholder="Last Name" fullWidth required></TextField>
                            </Grid>
                        </Grid>
                        <Grid item sm xs={12} sx={{margin:2,minWidth:120}}>
                            <TextField sx={{}} label="Designation" placeholder="Designation" fullWidth required></TextField>
                        </Grid>
                    </Grid>
                    <Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
            <Divider  orientation="vertical" component={Box}  flexItem sx={{borderRightWidth: 0.5,bgcolor:"black"}}/>
            <Grid sm sx={{}}>
                <Grid container sx={{}}>
                    <Grid item sm  sx={{margin:2,minWidth:120}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="DOB"
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(params) => <TextField  {...params} />}
                                />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item sm xs={12} sx={{margin:2}}>
                        <Box sx={{minWidth:120 }}>
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
                <Grid container sx={{}}>
                <Grid item sm xs={12} sx={{margin:2}}>
                        <Box sx={{minWidth:120}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Flag</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Flag"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item sm xs={12} sx={{margin:2,minWidth:120}}>
                        <TextField sx={{}} type="number" label="Phone Number" placeholder="Phone Number" fullWidth required></TextField>
                    </Grid>
                </Grid>
                <Grid container sx={{}}>
                    <Grid item sm xs={12} sx={{margin:2,minWidth:120}}>
                        <TextField sx={{}} label="Address" placeholder="Address" fullWidth required></TextField>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm xs={12} sx={{margin:2,minWidth:120}}>
                        <TextField  sx={{}} label="City" placeholder="City" fullWidth required></TextField>
                    </Grid>
                    <Grid item sm xs={12} sx={{margin:2,minWidth:120}}>
                        <Box  sx={{ minWidth:120}}>
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
                    <Grid item sm xs={12} sx={{margin:2,minWidth:120}}>
                        <TextField sx={{}} label="Zip Code" placeholder="City" fullWidth required></TextField>
                    </Grid>
                    <Grid item sm xs={12} sx={{margin:2,minWidth:120}}>
                        <Box sx={{minWidth:120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Country"
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
                    <Grid item sm sx={{margin:2}}>
                        <Button  sx={{bgcolor:"#00a86b",p:1,textTransform:"none"}} variant="contained" label="">Login/Signup</Button>
                    </Grid>
                    <Grid item sm sx={{margin:2}}>
                        <Button  sx={{bgcolor:"#00a86b",p:1,textTransform:"none"}} variant="contained" label="">Login/Signup</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Signup;