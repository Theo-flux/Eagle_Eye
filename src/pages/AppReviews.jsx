import React from 'react'
import { Center, Title } from "@mantine/core";
import ReviewsGrid from '../components/Review/ReviewsGrid';
import { useStore } from '../store';
import AccountButton from '../components/AccountButton';
const AppReviews = () => {
    const address = useStore((state) => state.address);
    if (address !== "")
        return (
            <div>
                <Title mb="xl">Project Reviews</Title>
                <ReviewsGrid />
            </div>
        )
    return (
        <div>
            <Title my="xl" align='center'>Please connect to wallet in order to see the Project Reviews</Title>
            <Center>
                <AccountButton />
            </Center>
        </div>
    )
}

export default AppReviews