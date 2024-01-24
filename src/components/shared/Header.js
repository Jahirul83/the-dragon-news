import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from '@/assets/The Dragon News.png'
import getCurrentData from "@/utils/getCurrentDate";


const Header = () => {
    const currentDate = getCurrentData();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image className="mx-auto" src={headingImage} width={500} height={500} alt="Heading Image" />
                <Typography variant='body2' color="gray" textAlign="center" className="my-2">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign="center">
                   {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;