import supertest from "supertest";

import app from "../../src/app";

import { getAuth } from "../helpers/getAuth";

describe("The Order-API Tests:", () => {
  beforeAll(async () => {
    auth = await getAuth(request);
  });

  let auth: [string, string];
  const request = supertest(app);
  const order = {
    id: undefined,
    status: "active",
    products: [
      { product_id: 1, quantity: 20 },
      { product_id: 2, quantity: 10 },
    ],
    user_id: "root",
  };




  describe("POST Tests:", () => {

  it("Should Create New Order", async () => {
    const res = await request
      .post("/order/")
      .set(...auth)
      .send(order);
    expect(res.status).toBe(200);
    expect(res.body.id).toBeTruthy();
    order.id = res.body.id;
  });

});

describe("GET Tests:", () => {

  it("Should Get List of Orders", async () => {
    const res = await request.get("/order/all/").set(...auth);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });


  it("Should Get List of Orders by User_id", async () => {
    const res = await request.get(`/order/user/${order.user_id}`).set(...auth);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });

  it("Should Get List of Self Orders", async () => {
    const res = await request.get("/order/").set(...auth);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });

});


describe("DELETE Tests:", () => {



});
});
