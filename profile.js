const express = require("express");
const app = express();
const myProfile = [
  {
    slackUsername: "MSHERIFF",
    backend: true,
    age: 30,
    bio: "My name is Muritala Sheriffdeen Adegoke, I am Nigerian. I loving programming and coding",
  },
];
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", (req, res) => {
  res.send(myProfile);
});

app.listen(3001, (req, res) => {
  console.log("server is working");
});
