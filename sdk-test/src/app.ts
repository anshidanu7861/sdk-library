import Typicode from "sdk-library";

const client = new Typicode({
  apiKey: "123",
});

client.getPosts().then((p) => {
  console.log(p);
});
