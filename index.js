const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "cakpomughe@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Caleboc1/HNG-public-API"
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
