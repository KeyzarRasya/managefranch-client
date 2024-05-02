import { Typography } from "@mui/material"
import './footer.css'

export default function Footer(){
    const bgstyle = {
        backgroundColor:"#2C394B"
    }
    return (
        <div className=" h-72 w-screen flex flex-col" style={bgstyle}>
            <div className="flex h-5/6">

                <div className="flex flex-col p-10 w-1/4 h-full">
                    <Typography
                    color={'secondary'}
                    variant="h5"
                    fontWeight={'bold'}>
                        Link
                    </Typography>
                    <a href="">
                        <Typography
                        mt={2}
                        color={'#FFF'}
                        variant="h6"
                        fontWeight={'light'}>
                            Instagram
                        </Typography>
                    </a>
                    <a href="">
                        <Typography
                        color={'#FFF'}
                        variant="h6"
                        fontWeight={'light'}>
                            LinkedIn
                        </Typography>
                    </a>
                    <a href="">
                        <Typography
                        color={'#FFF'}
                        variant="h6"
                        fontWeight={'light'}>
                            GitHub
                        </Typography>
                    </a>
                </div>

                <div className="flex flex-col p-10 w-1/4 h-full">
                    <Typography
                    color={'secondary'}
                    variant="h5"
                    fontWeight={'bold'}>
                        Copyright
                    </Typography>

                    <a href="https://www.freepik.com/free-vector/small-business-expansion-franchise-development-assets-management-globalization-idea-market-leadership-successful-restaurant-branch-opening_12146046.htm#fromView=search&page=1&position=3&uuid=a643a5d1-af4b-4756-b24c-edbdaf81941d">
                        <Typography
                        mt={2}
                        color={'#FFF'}
                        variant="h6"
                        fontWeight={'light'}>
                            vectorjuice on Freepik
                        </Typography>
                    </a>
                </div>

                <div className="flex flex-col p-10 w-1/4 h-full">
                    <Typography
                    color={'secondary'}
                    variant="h5"
                    fontWeight={'bold'}>
                        Customer Service
                    </Typography>

                    <a href="">
                        <Typography
                        mt={2}
                        color={'#FFF'}
                        variant="h6"
                        fontWeight={'light'}>
                            WhatsApp
                        </Typography>

                        <a href="">
                        <Typography
                        color={'#FFF'}
                        variant="h6"
                        fontWeight={'light'}>
                            Email
                        </Typography>
                    </a>
                    </a>
                </div>

                <div className="flex flex-col p-10 w-1/4 h-full">
                    <Typography
                    color={'secondary'}
                    variant="h5"
                    fontWeight={'bold'}>
                        More
                    </Typography>

                    <a href="">
                        <Typography
                        mt={2}
                        color={'#FFF'}
                        variant="h6"
                        fontWeight={'light'}>
                            Another Service
                        </Typography>
                    </a>
                </div>
                
            </div>
            <div className="h-2/6 w-screen flex justify-center items-center">
                <Typography
                color={'#FFF'}
                variant="h6">
                    Hi, my name is <a href="https://github.com/KeyzarRasya" className=" underline">Keyzar Rasya Athallah</a>
                </Typography>
                <div className="keypic w-10 h-10 ml-2 rounded-full"></div>
            </div>
        </div>
    )
}