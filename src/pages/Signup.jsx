import { Button, Grid, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import axios from "axios";

export default function Signup(){
    const [umkm, setUmkm] = useState({umkmName:'', pemilik:'', email:'', password:'', alamat:''})

    const dataOnChange = (e) => {
        const {name, value} = e.target;
        setUmkm({
            ...umkm,
            [name]:value
        })
    }

    const submitOnClick = async () => {
        const senddata = await axios({
                method:'post',
                url:'http://localhost:3000/umkm/signup',
                data:umkm
            })
        console.log(senddata);
    }
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-purple-50">
            <div className='h-full w-7/12 flex flex-col items-center text-center p-5'>
                <Typography variant="h3" className="mb-10" color='primary' marginBottom={5}>
                    Signup
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField style={{borderColor:'primary'}} fullWidth margin="normal" color="primary" name="umkmName" label="Nama UMKM" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth margin="normal" color="primary" name="pemilik" label="Nama Pemilik" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="normal" color="primary" name="alamat" label="Alamat" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="normal" color="primary" name="email" label="Email" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="normal" color="primary" name="password" label="Password" type="password" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon/>}>Back</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={submitOnClick} variant="contained" color="primary" endIcon={<SendIcon/>}>Submit</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}