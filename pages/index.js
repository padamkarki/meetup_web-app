//www.name.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Goda_ghat_nasik.jpg",
    address: "Nashik, Panchavati",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "First Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/ITPL11.jpg",
    address: "Bangalore, WhiteField",
    description: "This is a Second meetup",
  },
];

function Homepage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default Homepage;