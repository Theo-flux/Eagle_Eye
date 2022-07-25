import React, { useState, useEffect } from 'react'
import { Grid, Container, Title } from "@mantine/core";
import Skeletons from '../utils/Skeletons';
import { getReviews } from '../../services/fetchReviews'
import UserReviewCard from './UserReviewCard';
const ReviewsGrid = () => {
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

    if (reviews && reviews.length >= 1)
        return (
            <Grid grow justify="space-around">
                {reviews.map((review, i) => <Grid.Col xs={6} lg={4} xl={3} key={i}>
                    <UserReviewCard {...review} isApp />
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

export default ReviewsGrid