import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <section className="main-max-width padding-x mx-auto my-16">
      <h2 className="my-9 text-center text-xl font-bold text-gray-800">
        Featured Products
      </h2>

      {/* Content */}
      <div className="flex-center flex-wrap gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductSection;
