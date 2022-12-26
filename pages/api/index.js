// import { MongoClient } from "mongodb";

// async function Handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     // const { title, image, address, description } = data;

//     const clients = await MongoClient.connect(
//       "mongodb+srv://Bilal:29H4mI2PZEKJpOQ3@cluster0.ijvvglg.mongodb.net/meetups?retryWrites=true&w=majority"
//     );
//     const db = clients.db();
//     const meetupsCollection = db.collection("meetups");
//     const result = await meetupsCollection.insertOne(data);
//     console.log(result);

//     clients.close();

//     res.status(201).json({ message: "Data are inserted" });
//   }
// }

// export default Handler;
import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Bilal:29H4mI2PZEKJpOQ3@cluster0.ijvvglg.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default Handler;

// import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;

//     const client = await MongoClient.connect(
//       "mongodb+srv://khan:JKTuV5hAsfatV6U0@cluster0.oy97sz4.mongodb.net/mymeetupsapp?retryWrites=true&w=majority"
//     );
//     const db = client.db();

//     const meetupsCollection = db.collection("meetups");

//     const result = await meetupsCollection.insertOne(data);

//     console.log(result);

//     client.close();

//     res.status(201).json({ message: "Meetup inserted!" });
//   }
// }

// export default handler;
