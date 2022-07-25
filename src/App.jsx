import NotFoundPage from "./pages/NotFound";
import { AppShell, useMantineTheme } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Heading from "./components/Layout/Heading";
import HomePage from './pages/Home';
import UserPage from "./pages/User";
import ReviewPage from "./pages/Review";
import AppReviews from "./pages/AppReviews";
import VotingPage from "./pages/Voting";
function App() {
  const theme = useMantineTheme();
  return (
    <BrowserRouter>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<Sidebar />}
        header={<Heading />}
        fixed>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/app/:appId" element={<AppReviews />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
