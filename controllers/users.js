import { v4 as uuid } from 'uuid';

let users = []

// chooses to have the functions and code here for a prettier routes/User.ja
//therefor i export the functions

export const getUsers = (request, response) => {
    response.send(users)
};

export const getUser = (request, response) => {
    // get the id from user 
    const { id } = request.params

    // check if the id is equal to any user id and assaign it to finduser
    const findUser = users.find((user) => user.id == id);

    response.send(findUser)
};

export const createUser = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuid()});

    //console.log(`Users with the name ${user.firstName} added to the database!`)

    res.send(`Users with the name ${user.firstName} added to the database!`)
};

export const deleteUser = (req, res) => {
    // get the id from user, params = id in the url
    const { id } = req.params

    // remove the elements that returns false in functions
    users = users.filter((user) => user.id != id)

    res.send(`user with the id: ${id} and name: has ben removed.`)
    
};

export const updateUser = (req, res) => {
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
};