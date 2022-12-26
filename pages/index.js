// import React from 'react'

import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetups App</title>
        <meta name="description" content="This is meetups app" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// Get Static Site Generation (SSG)

export const getStaticProps = async () => {
  // Fetch  data
  const client = await MongoClient.connect(
    "mongodb+srv://Bilal:29H4mI2PZEKJpOQ3@cluster0.ijvvglg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: result,
    },
    revalidate: 1,
  };
};
export default Home;
