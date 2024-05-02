import { Typography } from "@mui/material"

export default function Buttons({texts}){
    return(
        <a href="" className="w-20 h-10 bg-orange-500 flex justify-center items-center absolute top-5 right-5 rounded-md text-white">
                <Typography>{texts}</Typography>
            </a>
    )
}