import "dotenv/config";
import express from "express";
import globalRouter from "./routes/routes";
const buildServer = () => {
  const server = express();
  server.use(express.json());
  server.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "The server is running ✅",
    });
  });
  server.use("/api", globalRouter);
  return server;
};
export default buildServer;
