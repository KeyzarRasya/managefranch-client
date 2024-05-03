import { Typography } from '@mui/material'

import './thirdpage.css'
import Buttons from '../components/Buttons'

export default function ThirdPage(){
    const containerStyle = {
        backgroundColor:'#082032'
    }
    const imageStyle={
        
    }
    return (
        <div className="h-screen w-screen flex" style={containerStyle}>
            <div className="h-screen w-3/6 flex flex-col justify-center items-center text-left">
                <div className='h-4/6 w-4/6'>
                    <Typography 
                    mt={5}
                    fontWeight={'bold'} 
                    color={'secondary'}
                    variant='h2'>
                        Why us?
                    </Typography>

                    <Typography
                    mt={5}
                    fontWeight={'regular'}
                    color={'#EEEEEE'}
                    variant='h5'>
                        1. Satu kali bayar untuk selamanya
                    </Typography>

                    <Typography
                    mt={1}
                    fontWeight={'regular'}
                    color={'#EEEEEE'}
                    variant='h5'>
                        2. Ramah Pengguna
                    </Typography>

                    <Typography
                    mt={1}
                    fontWeight={'regular'}
                    color={'#EEEEEE'}
                    variant='h5'>
                        3. Interaktif
                    </Typography>

                    <Typography
                    mt={1}
                    fontWeight={'regular'}
                    color={'#EEEEEE'}
                    variant='h5'>
                        4. Terintegrasi
                    </Typography>
                    <a href="#pricing" className="w-36 h-10 mt-10 bg-orange-500 flex justify-center items-center rounded-md text-white">
                        <Typography>See pricing</Typography>
                    </a>
                </div>
            </div>
            <div className="h-screen w-3/6 flex justify-center items-center">
                <div className=" h-60 w-60 md:h-5/6 md:w-4/6 img">
                    
                </div>
            </div>
        </div>
    )
}