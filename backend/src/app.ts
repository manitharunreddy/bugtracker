import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

// Routes
app.get("/api/v1/health", (_, res) => {
  res.send({
    msg: "Bug Tracker Server is ok",
    status: "true",
  });
});

app.use("/api/v1/users", userRouter);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
