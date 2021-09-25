import supertest from "supertest";

import app from "../../src/app";

import { getAuth } from "../helpers/getAuth";

describe("The Product-API Tests", () => {
  beforeAll(async () => {
    auth = await getAuth(request);
  });

  let auth: [string, string];
  const request = supertest(app);
  const product = { id: undefined, name: "test", price: 20 };


  describe("POST Tests:", () => {

  it("Should Create New Product", async () => {
    const res = await request
      .post("/product/")
      .set(...auth)
      .send(product);
    expect(res.status).toBe(200);
    expect(res.body.id).toBeTruthy();
    product.id = res.body.id;
  });
});

describe("GET Tests:", () => {
  it("Should Get List Of Products", async () => {
    const res = await request.get("/product/all/");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });

  it("Should Get Product Info", async () => {
    const res = await request.get(`/product/${product.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(product.id);
  });

  it("Should Update Product Info", async () => {
    product.name = "new name";
    product.price = 100;
    const res = await request
      .put("/product/")
      .set(...auth)
      .send(product);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(product);
  });

  it("Should Delete Product with Specific ID", async () => {
    const res = await request.delete(`/product/${product.id}`).set(...auth);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(product);
  });
});
});
