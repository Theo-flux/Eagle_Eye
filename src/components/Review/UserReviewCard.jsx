import React from 'react'
import { createStyles, Card, Text, Group, Title } from '@mantine/core';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime);
const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    footer: {
        display: 'flex',
        color: "#000000b3",
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

const UserReviewCard = ({ title, details, postingDate }) => {
    const { classes } = useStyles();
    return (
        <Card withBorder p={40} className={classes.card}>
            <Card.Section p="sm">
                <Group position='apart' >
                    <Title order={3}>{title}</Title>
                    <Text size="sm" weight={400} className={classes.stats}>
                        {details}
                    </Text>
                </Group></Card.Section>
            <Card.Section className={classes.footer}>
                <Text>
                    {dayjs(postingDate).fromNow()}
                </Text>
            </Card.Section>
        </Card>
    )
}

export default UserReviewCard