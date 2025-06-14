import { ServiceBase } from "../../pages/Services/Service-base";

export class ProductsService extends ServiceBase {
  static getProducts = async () => {
    var productResponse = await fetch(this.getUrl("/products"), {
      cache: "no-store",
    });
    var products = await productResponse.json();
    return products;
  };

  static getProductById = async (id: any) => {
    var productResponse = await fetch(this.getUrl("/products/" + id));
    var product = await productResponse.json();
    return product;
  };
}
