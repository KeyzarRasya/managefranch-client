import { Button, Grid, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Login(){
    const [login, setLogin] = useState({email:'', password:''});

    const setDataOnChange = (e) => {
        const {name, value} = e.target;
        setLogin({
            ...login,
            [name]:value
        })
    } 

    const buttonSubmit = async() => {
        const response = await axios({
            method:'post',
            url:'http://localhost:3000/umkm/login',
            data:login
        })
        console.log(response);
    }
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-purple-50" >
            <div className='h-full w-7/12 flex flex-col items-center text-center p-5'>
                <Typography variant="h3" className="mb-7" color='secondary' marginBottom={5}>
                    Signup {login.email}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField style={{borderColor:'white'}} fullWidth margin="normal" color="secondary" name="email" onChange={setDataOnChange} label="Email" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="normal" color="secondary" name="password" onChange={setDataOnChange} label="Password" type="password" variant="outlined"/>
                    </Grid>
                    <Grid item xs={6} mt={3}>
                        <Button variant="contained" color="secondary" startIcon={<ArrowBackIcon/>} className="" ><Link to={'/'}>Back</Link></Button>
                    </Grid>
                    <Grid item xs={6} mt={3}>
                        <Button variant="contained" color="secondary" endIcon={<SendIcon/>} onClick={buttonSubmit}>Login</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}