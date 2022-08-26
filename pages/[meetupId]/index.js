import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/4/48/Goda_ghat_nasik.jpg"
      title="First Meetup"
      address="Nashik, Panchavati"
      description="This is a first meetup"
    />
  );
}

export default MeetupDetails;
