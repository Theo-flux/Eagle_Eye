import React from 'react'
import { createStyles, Card, Text, Group, ActionIcon, Title, ThemeIcon } from '@mantine/core';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import { Star } from 'tabler-icons-react';
dayjs.extend(relativeTime);
const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },
    like: {
        color: theme.colors.red[5],
    },
    stats: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },
}));
function truncate(text) {
    if (text.length > 12) {
        var start = text.substring(0, 4);
        var end = text.substring(text.length - 4, text.length);
        return start + "..." + end;
    }
    return text;
}
const ProjectCard = ({ title, address, reviewsNumber, postingDate }) => {
    const { classes } = useStyles();
    return (
        <Card withBorder p={40} className={classes.card}>
            <Card.Section p="sm">
                <Group position='apart' mb="lg">
                    <Title order={3}>{title}</Title>
                    <Text size="sm" weight={400} className={classes.stats}>
                        {truncate(address)}
                    </Text>
                </Group></Card.Section>
            <Card.Section className={classes.footer}>

                <Text mt="auto">
                    {dayjs(postingDate).fromNow()}
                </Text>
                {reviewsNumber && (<div>
                    <Group spacing="xs" position="center">
                        <Text size="md" >4.5</Text>
                        <ThemeIcon variant="light" sx={{ backgroundColor: "transparent", marginBottom: "1px", marginLeft: "-10px" }} radius="xl" size="sm" color="gray"><Star /></ThemeIcon>
                    </Group>
                    <Text size="sm" weight={700} className={classes.stats}>
                        {reviewsNumber} Reviews
                    </Text>
                </div>)}
            </Card.Section>
        </Card>
    )
}

export default ProjectCard