import { Button, Typography } from "@mui/material"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function Cards({isHigh, pricingBefore, pricingAfter}){
    const bgStyle = {
        backgroundColor:'#041C32'
    }
    return(
        <div className="shadow-2xl h-3/6 hover:shadow-xl md:w-4/12 m-5 rounded-xl p-5 flex flex-col items-center duration-500 hover:shadow-white hover:-translate-y-3" style={bgStyle}>
            <div className="price flex">
                <Typography
                color={'#FFF'}
                variant="h5"
                fontWeight={'bold'}>
                    <del>{pricingBefore}</del>
                </Typography>

                <Typography
                ml={5}
                color={'secondary'}
                variant="h4"
                fontWeight={'bold'}>
                    {pricingAfter}
                </Typography>
            </div>

            <Typography
            mt={5}
            color={'#FFF'}
            variant="h6"
            fontWeight={'regular'}>
                <DoneIcon /> Akses Selamanya
            </Typography>

            <Typography
            mt={2}
            color={'#FFF'}
            variant="h6"
            fontWeight={'regular'}>
                <DoneIcon /> Semua Fitur Terbuka
            </Typography>

            <Typography
            mt={2}
            color={'#FFF'}
            variant="h6"
            fontWeight={'regular'}>
                <DoneIcon /> {isHigh? 'Buat Franchise tak terbatas':'Hanya 5 Franchise'}
            </Typography>
            <div className="w-4/6 flex justify-center items-center mt-7" id="pricing">
                <Button variant="contained" color="secondary">
                    <Typography color={'#FFF'}>Get ManageFranch</Typography>
                </Button>
            </div>
        </div>
    )
}