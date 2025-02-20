import { Link } from "react-router-dom";
import featured1 from "../assets/featured1.svg";

const BuyerProductTracker = () => {
  const product = {
    name: "Handcrafted Wooden Sculpture",
    location: "Ghana, West Africa",
    description:
      "A detailed, hand-carved sculpture made from sustainable oak. The piece represents traditional craftsmanship passed down through generations in West Africa.",
    price: "0.5 ETH",
    totalQuantity: 5,
    purchased: 5,
  };

  return (
    <main className="bg-[#231D16] max-w-screen">
      <h1 className="text-white lg:text-[28px] md:text-[28px] text-[20px] font-serif font-bold flex gap-6 lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-6 px-4">
        <Link to="/marketplace">Back</Link> <span>Details Page</span>
      </h1>

      <section className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 flex lg:flex-row md:flex-row flex-col justify-between">
        <div className="lg:w-[35%] md:w-[35%] w-[100%] border bg-[#231D16]/90 rounded-2xl">
          <img
            src={featured1}
            alt="Product"
            className="w-[100%] p-4 object-cover object-center rounded-2xl"
          />
        </div>

        <div className="text-white lg:w-[60%] md:w-[60%] w-[100%] p-4 border bg-[#231D16]/90 border-white rounded-2xl">
          <h3 className="font-bold mt-4 lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalize font-titiliumweb">
            {product.name}
          </h3>

          <p className="font-titiliumweb mb-4 font-normal lg:text-[18px] md:text-[18px] text-[14px]">
            {product.location}
          </p>

          <p className="font-titiliumweb mb-4 font-bold lg:text-[24px] md:text-[24px] text-[20px]">
            Description
          </p>

          <p className="font-titiliumweb mb-4 font-normal text-justify lg:text-[18px] md:text-[18px] text-[14px]">
            {product.description}
          </p>

          <p className="flex justify-between my-4 font-titiliumweb font-bold lg:text-[24px] md:text-[24px] text-[20px]">
            {product.price} <span>{product.totalQuantity} units</span>
            <span>{product.purchased} units</span>
          </p>

          <p className="flex justify-between my-4 text-[#54BE73] lg:text-[14px] md:text-[14px] text-[10px]">
            Price <span>Total quantity left for purchase</span>
            <span>Total purchased</span>
          </p>

          <button className="bg-transparent text-white py-2 px-4 lg:text-[20px] md:text-[20px] font-bold text-[14px] w-full rounded-3xl border border-white">
            Status of the item
          </button>
        </div>
      </section>
    </main>
  );
};

export default BuyerProductTracker;
