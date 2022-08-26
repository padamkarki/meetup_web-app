import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/4/48/Goda_ghat_nasik.jpg"
      title="First Meetup"
      address="Nashik, Panchavati"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/48/Goda_ghat_nasik.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Nashik, Panchavati",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
