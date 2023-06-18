import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function projectsRoutes(app: FastifyInstance) {
  app.get("/projects", async () => {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });

    return projects.map(project => ({
      id: project.id,
      coverUrl: project.coverUrl,
      excerpt: project.content.substring(0, 115).concat("..."),
    }));
  });

  app.get("/projects/:id", async request => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    const project = await prisma.project.findUniqueOrThrow({
      where: { id },
    });

    return project;
  });

  app.post("/projects/:id", async () => {});

  app.put("/projects/:id", async () => {});

  app.delete("/projects/:id", async () => {});
}
