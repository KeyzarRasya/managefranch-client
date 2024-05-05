import { Chip, Typography } from "@mui/material"
import ThirdPage from "./ThirdPage"
import SecondPage from "./SecondPage"
import Buttons from "../components/Buttons"
import PricingPage from "./PricingPage"
import Footer from "./Footer"

export default function LandingPages(){
    const style = {
        backgroundColor:'#FBF9F1'
    }
    return (
        <>
        <div className="h-screen w-screen flex flex-col justify-center items-center " style={style}>
         <a href="#pricing" className="w-20 h-10 bg-orange-500 flex justify-center items-center absolute top-5 right-5 rounded-md text-white">
                <Typography>Join</Typography>
            </a>

            <Typography 
            className="absolute top-5 left-5" 
            fontWeight={'bold'} 
            color={'#082032'} 
            variant="h5">Manage<span 
            className="text-orange-500">Franch</span></Typography>

            <Typography 
            variant="h2" 
            fontWeight={'bold'} 
            color={'#082032'} 
            sx={{wordSpacing:'0.2em'}}
            className=" duration-1000 hover:-translate-y-5 text-center">
                manage your franchise by only one tools
            </Typography>
            
            <Typography 
            mt={2} 
            variant="h4" 
            fontWeight={'light'} 
            color={'#082032'} 
            sx={{wordSpacing:'0.2em', fontSize:'1.2em'}}>
                focus on your bussiness and we'll do the rest
            </Typography>

            <div className=" md:w-5/6 md:h-10 mt-10 grid grid-cols-1 gap-4 md:flex md:justify-around md:items-center">
                <Chip label='financial statement records' color={'secondary'} sx={{fontSize:'1em', color:'#FFF'}}/>
                <Chip label='allowing franchise to order from you' color={'secondary'} sx={{fontSize:'1em', color:'#FFF'}}/>
                <Chip label='create automated financial reports' color={'secondary'} sx={{fontSize:'1em', color:'#FFF'}}/>
            </div>
        </div>
        <SecondPage/>
        <ThirdPage/>
        <PricingPage/>
        <Footer/>
        </>
    )
}