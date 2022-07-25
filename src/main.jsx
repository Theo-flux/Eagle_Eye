import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          'teal-dark': ["#baf8f3",
            "#11e0c4",
            "#1ed8cf",
            "#10d8c7",
            "#02c9ae",
            "#00b9a9",
            "#009697",
            "#009899",
            "#006566",
            "#003333"],
        },
      }}
    >
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
)
