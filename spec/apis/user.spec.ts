import supertest from "supertest";

import app from "../../src/app";
import { token } from "../../src/utils";

import { getAuth } from "../helpers/getAuth";

describe("The User-API Tests", () => {
  beforeAll(async () => {
    auth = await getAuth(request);
  });

  let auth: [string, string];
  const request = supertest(app);
  const user = { id: "test", firstname: "test", lastname: "user", password: "secret", superuser: false };

  describe("POST Tests:", () => {
  it("Should Create New User", async () => {
    const res = await request
      .post("/user/")
      .set(...auth)
      .send(user);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(user.id);
  });
});

  describe("GET Tests:", () => {
  it("Should Get List of Users", async () => {
    const res = await request.get("/user/all/").set(...auth);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });

  it("Should Get User Info", async () => {
    const res = await request.get(`/user/${user.id}`).set(...auth);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(user.id);
  });
});

describe("PUT Tests:", () => {
  it("Should Update User Info", async () => {
    user.firstname = "super test";
    user.superuser = true;
    const res = await request
      .put("/user/")
      .set(...auth)
      .send(user);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(user.id);
    expect(res.body.firstname).toBe(user.firstname);
    expect(res.body.superuser).toBe(user.superuser);
  });
  });

  describe("DELETE Tests:", () => {
  it("Should Delete User", async () => {
    const res = await request.delete(`/user/${user.id}`).set(...auth);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(user.id);
  });
});

describe("Other Tests:", () => {

 
});

});
