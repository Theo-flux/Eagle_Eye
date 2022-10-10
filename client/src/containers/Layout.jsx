import Head from 'next/head';
import React from 'react'

function Layout({children}) {
  return (
    <div>
      <Head>
        <title>slashit</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="author" content=""/>
        <meta name="description" content="Slashit is an online ecommerce site" />
      </Head>

      <main className="antialiased bg-body text-body font-body">
        {children}
      </main>
    </div>
  )
}

export default Layout;