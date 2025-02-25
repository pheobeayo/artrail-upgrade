import React from "react";
import { Link } from "react-router-dom";
import { formatUnits } from "ethers";
import UseGetAllProduct from "../hooks/useGetAllProduct";

const ProductCard = () => {
  const allProducts = UseGetAllProduct();

  if (!allProducts || allProducts.length === 0) {
    return <p className="text-center text-white">No products available.</p>;
  }

  return (
    <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 flex flex-wrap justify-between my-10">
      {allProducts.map((product, index) => (
        <div
          key={index}
          className="lg:w-[32%] md:w-[48%] w-[100%] p-4 bg-[#2D2821] border-white rounded-xl border shadow-lg mb-4"
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.productUri}
              alt={product.productName}
              className="w-[100%] h-[237px] object-cover object-center rounded-lg"
            />
            <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px] text-white">
              {product.productName}
            </h3>
            <p className="text-white lg:text-[14px] md:text-[14px] text-[10px]">
              {product.productOrigin}
            </p>
            <p className="flex justify-between text-white font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]">
              {formatUnits(product.productPrice.toString(), "ether")} ETH
              <span>{product.quantity} units</span>
            </p>
            <p className="flex justify-between text-[#54BE73] lg:text-[14px] md:text-[14px] text-[10px]">
              Price <span>Quantity</span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
