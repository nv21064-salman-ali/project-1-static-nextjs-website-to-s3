import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Salman Abdulrazaq Ali</title>
        <meta
          name="description"
          content="Thanks for subscribing from my new website."
        />
      </Head>
      <SimpleLayout
        title="Thankssss forrrr subscribingggg."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
