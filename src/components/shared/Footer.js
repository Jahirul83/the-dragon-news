import { Box, Button, Container, IconButton, Stack } from '@mui/material';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';


const Footer = () => {
    const navItems = [
        {
            route: 'Home',
            pathName: '/'
        },
        {
            route: 'Pages',
            pathName: '/pages'
        },
        {
            route: 'Category',
            pathName: '/category'
        },
        {
            route: 'News',
            pathName: '/news'
        },
        {
            route: 'About',
            pathName: '/about'
        },
        {
            route: 'Contact',
            pathName: '/contact'
        },
    ];
    return (
        <Box className="bg-black px-2 py-10">
            <Container sx={{
                "& svg": {
                    color: "white",
                }
            }} className='w-full text-center'>
                <Box>

                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathName}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>
            </Container>
        </Box >
    );
};

export default Footer;