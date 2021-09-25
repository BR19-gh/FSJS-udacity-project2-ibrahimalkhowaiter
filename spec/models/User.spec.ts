import { User } from "../../src/models";

describe("User-DB-Model Tests", () => {
  const values = { id: "test", firstname: "test", lastname: "user", password: "secret", superuser: false };

  describe("create() Tests:", () => {
  it("Should Create New User", async () => {
    const user = new User(values.id, values.firstname, values.lastname, values.password, values.superuser);
    await user.create();
    expect(user.id).toBeTruthy();
  });
 });

 describe("get...() Tests:", () => {
  it("Should Return All Users", async () => {
    const users = await User.getAll();
    expect(users?.length).toBeGreaterThan(0);
  });

  it("Should Return User", async () => {
    const user = await User.getById(values.id);
    expect(user).toBeInstanceOf(User);
    expect(user?.id).toEqual(values.id);
  });
});

describe("update() Tests:", () => {
  it("Should Update User", async () => {
    const user = await User.getById(values.id);
    if (!user) return;
    user.superuser = true;
    await user.update();
    expect(user.superuser).toBe(true);
    values.superuser = user.superuser;
  });
});

  describe("delete() Tests:", () => {
  it("Should Delete User", async () => {
    let user = await User.getById(values.id);
    if (!user) return;
    await user.delete();
    user = await User.getById(values.id);
    expect(user).toBeFalsy();
  });
});
});