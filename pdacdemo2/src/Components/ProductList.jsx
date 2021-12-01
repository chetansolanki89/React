import { ProductItem } from "./ProductItem";
import { products } from "./services/products";
import "./ProductList.css"

export const ProductList = () => {
  console.log(products);
  return (
    <div>
      <h3>This is my Product List</h3>
      <div className="products">
        {products.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            category={item.category}
            desc={item.desc}
            img={item.img}
          />
        ))}

        {/* <ProductItem
          title='Samsung 42" LED TV'
          price="Rs. 33000"
          category="Home Appliances"
          desc='This is a 42" LED TV with new features and latest android version.'
          img="samsung.jpg"
        />
        <ProductItem
          title='LG 42" LED TV'
          price="Rs. 28000"
          category="Home Appliances"
          desc='42" LED TV with new features.'
          img="lg.jpg"
        />
        <ProductItem
          title='OnePlus Nord CE 5G 128 GB'
          price="Rs. 25000"
          category="Smartphone"
          desc='8 GB RAM, 4500mAh battery'
          img="oneplus.jpg"
        />
        <ProductItem
          title='Acer Nitro 5 AN515-57'
          price="Rs. 90000"
          category=" Gaming Laptop"
          desc='15.6" FHD 144Hz IPS Display |16GB DDR4 |256GB'
          img="acer.jpg"
        />
        <ProductItem
          title='MI 43 UHD SMART LED TV'
          price="Rs. 30000"
          category=" Home Appliances"
          desc='4K HDR Smart TV| Mi TV 4X| 108 cm (43 inch)'
          img="mi.jpg"
        /> */}
      </div>
    </div>
  );
};
