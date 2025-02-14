const express = require("express");
const cors = require("cors");
const app = express();



const cookieParser = require("cookie-parser");

require("dotenv").config();

const userRouter = require("./routers.js");
const adminRouter = require("./AdminRouter.js");

app.use(
  cors({
    origin: "http://localhost:3001", // Update with your frontend URL
    credentials: true, // Make sure cookies are sent and received
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/", userRouter);
app.use("/api/admin", adminRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
