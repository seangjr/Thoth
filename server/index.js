const express = require("express"); // commonjs
const cors = require("cors");

/* Init */
const app = express();
const PORT = process.env.PORT || 5000;

/* Setup */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api", require("./routes/routes"));

/* Start */
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

