import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from '@mantine/core'
import { showNotification, updateNotification } from '@mantine/notifications';
import { useStore } from '../store';
const AccountButton = () => {
    let navigate = useNavigate();
    const setAddress = useStore((state) => state.setAddress);
    const address = useStore((state) => state.address);
    function truncate(text) {
        if (text.length > 12) {
            var start = text.substring(0, 4);
            var end = text.substring(text.length - 4, text.length);
            return start + "..." + end;
        }
        return text;
    }
    function connectWallet() {
        showNotification({
            id: 'wallet-connect',
            loading: true,
            title: 'Connecting to wallet',
            message: 'Please wait a few moments...',
            autoClose: false,
            disallowClose: true,
        });
        const tronProvider = window.tronWeb;
        if (tronProvider && tronProvider.defaultAddress.base58) {
            setAddress(tronProvider.defaultAddress.base58);
            updateNotification({
                id: 'wallet-connect',
                color: 'teal',
                title: "Wallet connected successfully!",
            })
        }
        else {
            updateNotification({
                id: 'wallet-connect',
                color: 'red',
                title: "Couldn't connect to the wallet",
            })
        }
    }
    if (address.length >= 1)
        return (
            <Button color="cyan" onClick={() => navigate("/user")}>
                {truncate(address)}
            </Button>
        )
    return (
        <Button onClick={() => connectWallet()}>Connect Wallet</Button>
    )

}

export default AccountButton