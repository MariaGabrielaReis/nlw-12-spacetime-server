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

  app.post("/projects", async request => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });
    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    const project = await prisma.project.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: "7dcdb872-2550-49e1-8e98-7283553bb75a",
      },
    });

    return project;
  });

  app.put("/projects/:id", async request => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });
    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    const project = await prisma.project.update({
      where: { id },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    });

    return project;
  });

  app.delete("/projects/:id", async request => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    await prisma.project.delete({
      where: { id },
    });
  });
}
