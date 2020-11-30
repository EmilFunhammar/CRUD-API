

import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.get("/:id", getUser);

router.patch("/:id", updateUser);


// just a new file and are never used ther for we export it
// so we can make use off it in the js.js file
export default router;






// all the request komments

/*

//all routes in here are starting with /users .... the file name
router.post("/", (req, res) => {

    const user = req.body

    //npm that creates Id for the user and declare it as userId
    //const userId = uuidv4();

    // appen the created id to the user that var created abov
    // spred the operator and added a new value
    //const userWithId = {... user, id: uuidv4()};

    // shorter and neater way to code it
    users.push({... user, id: uuidv4()});

res.send(`Users with the name ${user.firstName} added to the database!`);
});

1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1

router.delete("/:id", (req, res) => {
    // get the id from user, params = id in the url
    const { id } = req.params

    // remove the elements that returns false in functions
    users = users.filter((user) => user.id != id)

    res.send(`user with the id: ${id} and name: has ben removed.`)
    
});

1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1

//all routes in here are starting with /users .... the file name
router.get("/", (request, response) => {

    response.send(users)

});

1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1

//all routes in here are starting with /users .... the file name
router.get("/:id", (request, response) => {
    // get the id from user 
    const { id } = request.params

    // check if the id is equal to any user id and assaign it to finduser
    const findUser = users.find((user) => user.id == id);

    response.send(findUser)
});

1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1

// changes everything in the user
//router.put()
//able to changes som elements in the user
router.patch("/:id", (req, res) => {
    const { id } = req.params

    //comint from the request body
    const { firstName, lastName, age} = req.body;

    // find = the first element that match it returns
    const userToBeUpdated = users.find((user) => user.id == id)

    //check if the the user have the ellements and gives them new value
    if(firstName) userToBeUpdated.firstName = firstName
    if(lastName) userToBeUpdated.lastName = lastName
    if(age) userToBeUpdated.age = age

    res.send(`User with the id: ${id} has been updated`)

});


*/