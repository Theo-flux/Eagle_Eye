import { Title, Paper, Divider, Checkbox, Group, Button } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { showNotification } from '@mantine/notifications'
import { useStore } from '../store'
const VotingPage = () => {
    const address = useStore((state) => state.address)
    const navigate = useNavigate();
    return (
        <div>
            <Title order={2}>
                On-Chain voting on
                community treasury by
                token holders
            </Title>
            <Paper withBorder shadow="lg" p="lg" m="lg">
                <Title order={4} sx={{ color: "#009697" }}>
                    Proposals strictly to
                    strengthening security of the
                    network
                </Title>
                <Divider my="lg" sx={{ color: "#009697" }} />
                <Checkbox label="Bug Bounty" color="teal-dark" my="lg" />
                <Checkbox label="File Lawsuit" color="teal-dark" my="md" />
                <Group position='right' mt="md">
                    <Button variant="light" color="teal-dark" onClick={() => {
                        navigate("/");
                        showNotification({
                            title: "Voting cancelled successfully",
                            color: "cyan",
                        })
                    }}>
                        Cancel
                    </Button>
                    <Button color="teal-dark" onClick={() => {
                        if (address)
                            showNotification({
                                title: "Voting confirmed successfully!",
                                color: "teal-dark",
                            })
                        else showNotification({
                            title: "Couldn't vote",
                            message: "Please connect your wallet",
                            color: "red",
                        })
                    }}>
                        Connect
                    </Button>
                </Group>
            </Paper>
        </div>
    )
}

export default VotingPage