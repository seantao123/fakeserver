import supertest from "supertest";
import { app, server } from "../app.mjs";

describe("Test the APIs", () => {
  afterAll(async () => {
    await server.close();
  });

  it("test search API", async () => {
    const response = await supertest(app).get(
      "/api/location/search/?query=shanghai"
    );
    expect(response.status).toBe(200);
    expect(response.body[0].title).toBe("San Jose");
  });
});
