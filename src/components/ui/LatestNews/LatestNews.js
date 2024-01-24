import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import topNews from '@/assets/top-news.png'
import topNews2 from '@/assets/top-news2.png'
import Image from 'next/image';

const LatestNews = () => {
    return (
        <Box>
            <Card className='my-5'>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} width={800} alt="top news" />
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

            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card className='my-5'>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} width={800} alt="top news" />
                            </CardMedia>
                            <CardContent>
                                <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded'>Technology</p>
                                <Typography gutterBottom>
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

                </Grid>
                <Grid item xs={6}>
                    <Card className='my-5'>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} width={800} alt="top news" />
                            </CardMedia>
                            <CardContent>
                                <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded'>Technology</p>
                                <Typography gutterBottom>
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

                </Grid>
                <Grid item xs={6}>
                    <Card className='my-5'>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} width={800} alt="top news" />
                            </CardMedia>
                            <CardContent>
                                <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded'>Technology</p>
                                <Typography gutterBottom>
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

                </Grid>
                <Grid item xs={6}>
                    <Card className='my-5'>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} width={800} alt="top news" />
                            </CardMedia>
                            <CardContent>
                                <p className='w-[100px] bg-red-500 text-white px-2 my-5 rounded'>Technology</p>
                                <Typography gutterBottom>
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

                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;