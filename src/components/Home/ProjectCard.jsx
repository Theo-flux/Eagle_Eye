import React from 'react'
import { createStyles, Card, Text, Group, ActionIcon, Title } from '@mantine/core';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import { Heart } from 'tabler-icons-react';
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
                <Title order={3}>{title}</Title>
            </Card.Section>
            <Group position='apart' mt="xl">
                <Text size="sm" weight={700} className={classes.stats}>
                    {truncate(address)}
                </Text>
                {reviewsNumber && (<Text size="sm" weight={700} className={classes.stats}>
                    {reviewsNumber} Reviews
                </Text>)}
            </Group>
            <Card.Section className={classes.foter}>
                <Group position='apart' mt="lg" mb="xs" mx="xs">
                    <Text>
                        {dayjs(postingDate).fromNow()}
                    </Text>
                    <ActionIcon variant="transparent" radius="md" size={36}>
                        <Heart size={18} className={classes.like} />
                    </ActionIcon>
                </Group>
            </Card.Section>
        </Card>
    )
}

export default ProjectCard