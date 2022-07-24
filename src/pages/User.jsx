import { Container, Grid, Title, Text, Paper } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import NotFoundPage from './NotFound'
import { getReviews } from '../services/fetchReviews'
import { useStore } from '../store'
import Skeletons from '../components/utils/Skeletons'
import UserReviewCard from '../components/Review/UserReviewCard'
const UserPage = () => {
    const address = useStore((state) => state.address);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const loadReviews = async () => {
        const res = await getReviews();
        setReviews([...res]);
        setLoading(false);
    }
    useEffect(() => {
        loadReviews()
    }, [])
    function ReviewsGrid() {
        if (reviews.length >= 1)
            return (
                <Grid grow justify="space-around">
                    {reviews.map((review, i) => <Grid.Col xs={6} lg={4} xl={3} key={i}>
                        <UserReviewCard {...review} />
                    </Grid.Col>)}
                </Grid>
            )
        if (loading === true)
            return <Skeletons n={24} />
        return (
            <Container sx={{ textAlign: "center" }}>
                <Title>Hmm, looks like there are no items on there</Title>
            </Container>
        )
    }
    if (address)
        return (
            <Paper shadow="xl" p="md">
                <Title>User's info</Title>
                <Text>Wallet address <i>{address}</i></Text>

                <Paper my={10} shadow="xl" p="xl">
                    <Title order={3} sx={{ color: "#3d3d3d" }}>Total Earnings:</Title>
                </Paper>

                <Title order={4} sx={{ fontWeight: "normal" }}>Reviews viewed: <b>{reviews.length}</b></Title>

                <Title order={2} sx={{ color: "#3d3d3d" }}>Reviews submitted</Title>
                <Container my="lg">
                    <ReviewsGrid />
                </Container>
            </Paper>

        )
    return <NotFoundPage />
}

export default UserPage