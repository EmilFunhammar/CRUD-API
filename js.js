import express from 'express';
import bodyParser from 'body-parser';


import usersRoutes from "./routes/users.js"; // import the users.js file

const app = express();
const PORT = 5000

app.use(bodyParser.json());

// when a users serach /users" we run the usersRoutes
app.use("/users", usersRoutes);

// makes a get request to the browser tex.
// app.get("/goole.com") you make a request to the google.com domain
app.get("/", (request, respond) => respond.send("Hello from homepage."));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
