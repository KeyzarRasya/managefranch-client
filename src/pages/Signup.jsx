import { Button, Grid, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Signup(){
    const {token} = useParams();

    const [umkm, setUmkm] = useState({umkmName:'', pemilik:'', email:'', password:'', alamat:'', token:''})

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
                url:'https://managefranch-server2.vercel.app/umkm/signup',
                data:umkm
            })
        console.log(senddata);
    }
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-purple-50" >
            <div className='h-full w-7/12 flex flex-col items-center text-center p-5'>
                <Typography variant="h3" className="mb-7" color='secondary' marginBottom={5}>
                    Signup
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField style={{borderColor:'white'}} fullWidth margin="normal" color="secondary" name="umkmName" label="Nama UMKM" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth margin="normal" color="secondary" name="pemilik" label="Nama Pemilik" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="normal" color="secondary" name="alamat" label="Alamat" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth margin="normal" color="secondary" name="email" label="Email" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth margin="normal" color="secondary" name="password" label="Password" type="password" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required fullWidth margin="normal" color="secondary" name="token" label="Token" value={token} variant="outlined" onChange={dataOnChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        color={"secondary"}
                        fontSize={15}>
                            you can earn a token by purchasing our packages
                        </Typography>
                    </Grid>
                    <Grid item xs={6} mt={3}>
                        <Button variant="contained" color="secondary" startIcon={<ArrowBackIcon/>} className="" ><Link to={'/'}>Back</Link></Button>
                    </Grid>
                    <Grid item xs={6} mt={3}>
                        <Button onClick={submitOnClick} variant="contained" color="secondary" endIcon={<SendIcon/>}>Next</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}