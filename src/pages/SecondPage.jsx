import { Typography } from "@mui/material"

export default function SecondPage(){
    const containerStyle = {
        backgroundColor:'#082032'
    }
    return (
        <div className="h-full w-screen flex justify-center text-center" style={containerStyle}>
            <div>
                <Typography
                fontWeight={'bold'}
                color={'secondary'}
                variant="h1">
                    90%
                </Typography>
                <Typography
                fontWeight={'medium'}
                color={'secondary'}
                variant="h5">
                    Umkm di indonesia minim pengetahuan tentang laporan keuangan
                </Typography>

                <Typography
                mt={15}
                mb={10}
                fontWeight={'regular'}
                color={'#EEEEEE'}
                variant="h4">
                    "Kami percaya bahwa UMKM dapat menopang ekonomi negara,<br/> UMKM yang teroganisir dapat memberikan akselerasi bagi kelajuan ekonomi di indonesia"
                </Typography>
            </div>
            <div>

            </div>
        </div>
    )
}