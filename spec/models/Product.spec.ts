import { Product } from "../../src/models";

describe("Product-DB-Model Tests", () => {
  const values = { id: 0, name: "test product", price: 100 };


  describe("create() Tests:", () => {
  it("Should Create New Product", async () => {
    const product = new Product(values.name, values.price);
    await product.create();
    expect(product.id).toBeTruthy();
    values.id = product.id || 0;
  });
 });
 describe("get...() Tests:", () => {
  it("Should Return All Products", async () => {
    const products = await Product.getAll();
    expect(products?.length).toBeGreaterThan(0);
  });

  it("Should Return Product", async () => {
    const product = await Product.getById(values.id);
    expect(product).toBeInstanceOf(Product);
    expect(product?.getObject()).toEqual(values);
  });
  });
  describe("update() Tests:", () => {
  it("Should Update Product", async () => {
    const product = await Product.getById(values.id);
    if (!product) return;
    product.name = "new test product";
    await product.update();
    expect(product.name).toBe("new test product");
    values.name = product.name;
  });
});
describe("delete() Tests:", () => {
  it("Should Delete Product", async () => {
    let product = await Product.getById(values.id);
    if (!product) return;
    await product.delete();
    product = await Product.getById(values.id);
    expect(product).toBeFalsy();
  });
});
});