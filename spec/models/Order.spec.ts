import { Order } from "../../src/models";

describe("Order-DB-Model Tests", () => {
  const values = {
    id: 0,
    status: "active",
    products: [
      { product_id: 1, quantity: 20 },
      { product_id: 2, quantity: 10 },
    ],
    user_id: "root",
  };

  describe("create() Tests:", () => {
  it("Should Create New Order", async () => {
    const order = new Order(values.status, values.products, values.user_id);
    await order.create();
    expect(order.id).toBeTruthy();
    values.id = order.id || 0;
  });
});

describe("get...() Tests:", () => {


 

  
  });

  describe("update() Tests:", () => {
  it("Should Update Order", async () => {
    const order = await Order.getById(values.id);
    if (!order) return;
    order.status = "completed";
    await order.update();
    expect(order.status).toBe("completed");
    values.status = order.status;
  });
});

  describe("delete() Tests:", () => {
  it("Should Delete Order", async () => {
    let order = await Order.getById(values.id);
    if (!order) return;
    await order.delete();
    order = await Order.getById(values.id);
    expect(order).toBeFalsy();
  });
});
});