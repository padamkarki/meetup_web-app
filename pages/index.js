//www.name.com/
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function Homepage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://padam:ftPxeLA4b4gYIEMc@cluster0.ealbygc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Homepage;
