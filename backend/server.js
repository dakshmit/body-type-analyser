require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", require("./routes/authRoutes"));
app.use("/prakruti", require("./routes/prakrutiRoutes"));
app.get("/", (req, res) => {
    res.send("Backend is running!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
