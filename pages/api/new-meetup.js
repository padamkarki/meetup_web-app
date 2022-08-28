// api/new-meetup
// POST api/new-meetup

const Handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
  }
};

export default Handler;
