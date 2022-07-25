import { Grid, Container, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { fetchProjects } from '../../services/fetchProjects';
import Skeletons from '../utils/Skeletons';
import ProjectCard from './ProjectCard';


const ProjectsGrid = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [postings, setPostings] = useState([]);
    const loadProjects = async () => {
        const res = await fetchProjects();
        setPostings([...res]);
        setLoading(false);
    }
    useEffect(() => {
        loadProjects()
    }, [])
    if (postings.length >= 1)
        return (
            <Grid grow justify="space-around">
                {postings.map((post, i) => <Grid.Col xs={6} lg={4} xl={3} key={i}>
                    <Container onClick={() => navigate(`/app/${i}`)}>
                        <ProjectCard {...post} />
                    </Container>
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

export default ProjectsGrid