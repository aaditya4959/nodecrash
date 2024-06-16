// We will be creating the server over here.

const express = require("express");
const errorHandler = require("./Middlewares/errorHandler");
const dotenv = require("dotenv").config();
const app = express();

// The port is defined in the env file.
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(errorHandler);
// In the beginning the thunder client returns 404 error because we have not configured any route yet.
// So now we will configure SOMETHING
// app.get('/api/contacts', (request, response) => {
//     response.send("Get all contacts.");
// })

// The above code has been shifted to the contactROutes but here we wil use it // Use are the middlewares.
app.use("/api/contacts" ,require("./Routes/contactRoutes"))


app.listen(port, () => {
    console.log(`Server is running at the port ${port}`);
})