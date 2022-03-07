import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import Image from "next/image";
import Contact from "./contact";
import YoutubeVideo from "./youtubevids";

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
      <><Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p><b>Gogh.AI</b> is a pre-seed startup based in Boston, MA developing a next-generation automated AI
            capability for cleaning <br/>
            your data and then visualising it with appropriate explainations</p>
        </section>
      </Layout>
      <YoutubeVideo/>
      <div>
          <section className={`${utilStyles.center} ${utilStyles.headingLg} ${utilStyles.marginForPlayer}`}>
              <p>Got a question?<br/> Send an to Email us at  <b><a href={"mailto:ai@skunks.ai?subject=Tell me more about Klee"}>ai@skunks.ai</a></b> </p>
          </section>
      </div>

      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
