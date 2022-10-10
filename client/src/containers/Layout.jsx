import Head from 'next/head';
import { Navbar, Sidebar } from '../components';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Eagle eye</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="" />
        <meta name="description" content="Eagle eye" />
      </Head>

      <main className="relative">
        <Navbar />
        <div className="relative flex">
          <Sidebar />
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
