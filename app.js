const express = require("express");
const connectDb = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const courseRoutes = require("./api/courses/courses.routes");
const lectureRoutes = require("./api/lectures/lectures.routes");
const tagRoutes = require("./api/tags/tags.routes");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
connectDb();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/courses", courseRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/tags", tagRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
