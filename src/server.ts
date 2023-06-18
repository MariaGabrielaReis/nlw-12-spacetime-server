import cors from "@fastify/cors";
import fastify from "fastify";
import { projectsRoutes } from "./routes/projects";

const app = fastify();

app.register(cors, { origin: true });
app.register(projectsRoutes);

app
  .listen({ port: 3333 })
  .then(() => console.log("🔥 server is running on http://localhost:3333"));
