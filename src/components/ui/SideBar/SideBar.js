import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

import sideBarPic from '@/assets/side-top-news.png'
const SideBar = () => {
    return (
        <Box className="my-5">
            <Card className='my-5'>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideBarPic} width={800} alt="top news" />
                    </CardMedia>
                    <CardContent>
                        <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded'>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            bitcoin clime by elom mask
                        </Typography>
                        <Typography gutterBottom className='my-3'>
                            By Jahirul Jumman - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default SideBar;