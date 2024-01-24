import { getSingleNews } from "@/utils/getSingleNews";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);
    // console.log(data);
    return (
        <Box className="my-5">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} width={800} height={500} alt="news" />
                        <Grid container spacing={2} className="mt-2">
                            <Grid item lg={6}>
                                <Image src={news.image_url} width={800} height={500} alt="news" />
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news.image_url} width={800} height={500} alt="news" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <h1>
                            Details
                        </h1>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailPage;