// Create Express app
const express = require("express");
const app = express();

// Permit CORS
const cors = require("cors");
app.use(cors());

// Initialise route for empty input
app.get("/api", (req, res) => {

    // Create date object with current date
    let date = new Date();

    // Return results
    return res.status(200).json({ "unix": date.valueOf(), "utc": date.toUTCString() });
});

// Initalise route non-empty input
app.get("/api/:date", (req, res) => {

    // Create date variable
    let date;

    // If the "date" param is one positive integer, construct date with it as an integer
    if (/^\d+$/.test(req.params.date))
        date = new Date(parseInt(req.params.date, 10));

    // Otherwise, construct date with the raw "date" param
    else
        date = new Date(req.params.date);

    // Return status 400 and error message for invalid dates
    if (isNaN(date))
        return res.status(400).json({ "error": "Invalid Date" });

    // Return status 200 and information for valid dates
    return res.status(200).json({ "unix": date.valueOf(), "utc": date.toUTCString() });
});

// Activate app
app.listen(3000, () => {
    console.log("Process listening on port 3000!");
});