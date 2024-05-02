import { Box } from "@mui/material";
import { purple } from "@mui/material/colors";

export default function FullPage({children, bgCol}){
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                textAlign:'center',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: bgCol, // Ganti dengan warna latar yang diinginkan
            }}
        >
            {children}
        </Box>
    )
}