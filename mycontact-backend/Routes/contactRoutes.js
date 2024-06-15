const express = require(`express`);

const router = express.Router();

// Configuring all of the routes here only.
router.route("/").get( (request,response) => {  // For accessing all the contacts.
    response.json({message: "Get all Contacts"})
})

router.route("/").post( (request,response) => {  // For creating a new contact.
    response.json({message: "Create a contact"})
})
 
router.route("/:id").get( (request,response) => {   // For accessing an individual contact.
    response.json({message: `Get the contact with  ${request.params.id} id`})
})

router.route("/:id").put( (request,response) => {  // For updating the contact for a specified id.
    response.json({message: `Update contact for ${request.params.id}`})
})

router.route("/:id").delete( (request,response) => { // For deleting the contact with a specified id.
    response.json({message: `Delete the contact with ${request.params.id}`})
})


// We need to export the router
module.exports = router;