import fastify from "fastify";

const app = fastify();

app.get("/hi", () => "hi!");

app
	.listen({ port: 3333 })
	.then(() => console.log("🔥 server is running on http://localhost:3333"));
