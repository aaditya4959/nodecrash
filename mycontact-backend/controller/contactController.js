const { route } = require("../Routes/contactRoutes");
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route Get /api/contacts
//@access Public
const getContacts = asyncHandler(async (request,response) => {  // For accessing all the contacts.
    response.status(200).json({message: "Get all Contacts"})
});


//@desc Get contact
//@route  Get /api/contacts/:id
//@access Public
const getContact = asyncHandler( async (request,response) => {   // For accessing an individual contact.
    response.status(200).json({message: `Get the contact with  ${request.params.id} id`})
});




//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (request,response) => {  // For creating a new contact.
    console.log(`The requested body is `,request.body);
    const {name, email, phone} = request.body;  // De-structuring the body of the request.

    if(!name || !email || !phone){  //  Checking if all the fields are present or not.
        response.status(400); 
        throw new Error("All fields are mandatory.")
    }
    response.status(201).json({message: "Create a contact"})
});





//@desc Update Contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler( async (request,response) => {  // For updating the contact for a specified id.
    response.json({message: `Update contact for ${request.params.id}`})
});

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (request,response) => { // For deleting the contact with a specified id.
    response.json({message: `Delete the contact with ${request.params.id}`})
});




module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};