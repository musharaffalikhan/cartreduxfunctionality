import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const ProductsArr = [
  {
    id: 1,
    price: 6,
    title: "My First Product",
    description: "Amazing Product",
  },
  {
    id: 2,
    price: 10,
    title: "My second Product",
    description: "Best Product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ProductsArr.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
