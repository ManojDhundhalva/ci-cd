const request = require("supertest");
const app = require("../src/app");

describe("TODO API", () => {
  it("GET /todos should return empty array initially", async () => {
    const res = await request(app).get("/todos");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("POST /todos should create a todo", async () => {
    const res = await request(app).post("/todos").send({ task: "Write CI/CD" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("task", "Write CI/CD");
    expect(res.body).toHaveProperty("id");
  });

  it("POST /todos without task should return 400", async () => {
    const res = await request(app).post("/todos").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
