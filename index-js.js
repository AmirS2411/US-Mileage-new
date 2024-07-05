import Head from 'next/head'
import MileageDashboardGraph from '../components/MileageDashboardGraph'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>US Minimum Personal Mileage Dashboard</title>
        <meta name="description" content="Interactive dashboard showing minimum personal mileage by US state" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8">
        <MileageDashboardGraph />
      </main>

      <footer className="py-4 text-center">
        <p>Data for illustration purposes only</p>
      </footer>
    </div>
  )
}
