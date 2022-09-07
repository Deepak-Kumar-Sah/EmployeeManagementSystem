import React,{useState,useEffect,} from "react";
import {Box,TextField,Button,Paper,Typography,Container,CssBaseline} from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import { putUser,auth } from "../store/slices/userDB";
import { Redirect, withRouter} from "react-router-dom";


const Signin = () =>{
    const [values, setvalues] = useState({
        email:"marar_brijesh@brekke-kutch.org",
        password:"3019",
    });
    const [users, setUsers] = useState([]);
    const dispatch =useDispatch();
    const direct=useSelector((state)=>state.userDataBase.isAuthenticated);
    console.log(direct)
    const fetchUsers = async ()=>{
        const res =await fetch('https://gorest.co.in/public/v2/users');
        const data = await res.json();
        console.log(data);
        setUsers(data);
     }
    useEffect(()=>{
        fetchUsers();
    },[])
    const {email,password} = values;
    const handleChange = name =>event=>{
        setvalues({...values,error:false,[name]:event.target.value})
    };
    const onSubmit = ()=>{
        dispatch(putUser(users))
        dispatch(auth(values));
    };
    const performRedirect = ()=>{
        if(direct){
            return <Redirect to='/userHome'/>  
        }
    };
    const SiginForm = ()=>{
        return (
            <form>
                <Box sx={{}}>
                <Paper sx={{padding:[5,10,5,5],height:'42vh',width:290,margin:"80px auto",}} elevation={10}>
                    <Typography  sx={{pb:3,fontSize:18,textTransform: "capitalize"}}>Employee and Admin Login/Signup</Typography> 
                    <TextField sx={{marginBottom:5}} onChange={handleChange("email")} label="Email" placeholder="Enter email" value={email} fullWidth required></TextField>
                    <TextField sx={{marginBottom:5}} onChange={handleChange("password")} type="password" label="Password" value={password} placeholder="Enter Password" fullWidth required></TextField>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        <Button onClick={onSubmit} sx={{bgcolor:"#00a86b",p:1,textTransform:"none"}} variant="contained" label="">Login/Signup</Button>
                    </Box>
                </Paper>
                </Box>
                <p className='text-white text-center'>{JSON.stringify(values)} here password is id from the api {"https://gorest.co.in/public/v2/users"}</p>
            </form>
        );
    };
    return(
       <div>
        {SiginForm()}
        {performRedirect()}
       </div>
    )
}
export default Signin;