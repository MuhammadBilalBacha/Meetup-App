import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";
import Head from "next/head";

function DetailPage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.meetupdata?.title}</title>
        <meta name="description" content={props.meetupdata?.description} />
      </Head>
      <MeetupDetails
        title={props.meetupdata?.title}
        address={props.meetupdata?.address}
        description={props.meetupdata?.description}
        image={props.meetupdata?.image}
      />
    </React.Fragment>
  );
}
// SSG paths
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Bilal:29H4mI2PZEKJpOQ3@cluster0.ijvvglg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: result.map((meetup) => ({
      params: { meetup: meetup._id.toString() },
    })),
  };
}

export const getStaticProps = async (context) => {
  const meetid = context.params.meetup;
  const client = await MongoClient.connect(
    "mongodb+srv://Bilal:29H4mI2PZEKJpOQ3@cluster0.ijvvglg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupDetails = await meetupsCollection.findOne({
    _id: meetid,
  });
  client.close();
  return {
    props: {
      meetupdata: meetupDetails,
    },
  };
};

export default DetailPage;
