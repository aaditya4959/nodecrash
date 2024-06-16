const express = require(`express`);

const router = express.Router();

const {getContact, createContact, getContacts, updateContact, deleteContact} = require("../controller/contactController");

// Configuring all of the routes here only.
router.route("/").get(  getContacts).post( createContact);


 // THis way, we have handles multiple http requests with the same routes only.
router.route("/:id").get(getContact ).put( updateContact).delete( deleteContact);




// We need to export the router
module.exports = router;
