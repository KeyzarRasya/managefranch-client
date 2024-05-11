import { Button, Grid, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Purchase(){
    const style = {
        backgroundColor:'#082032'
    }

    const [email, setEmail] = useState();
    const [isEmailValid, setEmailValid] = useState(false)

    const onEmailChange = (e) => {
        setEmail(e.target.value)
        setEmailValid(e.target.value.includes("@gmail.com"))
    }

    const {value} = useParams();

    const paymentAddress = `https://managefranch-server2.vercel.app/umkm/purchase/${value}?email=${email}`
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-purple-50" >
            <div className='h-full w-7/12 flex flex-col items-center text-center p-5'>
                <Typography variant="h3" className="mb-7" color='secondary' marginBottom={5}>
                    Purchase
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField onChange={onEmailChange} required style={{borderColor:'white'}} fullWidth margin="normal" color="secondary" name="email" label="Enter your email"  variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        fontWeight={'bold'}>
                            we will send the token to your email, so please enter the right email
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                        variant="h6"
                        >
                            Harga : <span className=" text-green-600">Rp. {value}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} mt={3}>
                        <Button variant="contained" color="secondary" startIcon={<ArrowBackIcon/>} className=""><Link to={'/'}>Back</Link></Button>
                    </Grid>
                    <Grid item xs={6} mt={3}>
                        <Button disabled={!isEmailValid} variant="contained" color="secondary" endIcon={<SendIcon/>}><a href={paymentAddress}>Submit</a></Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}