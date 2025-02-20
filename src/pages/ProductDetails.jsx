import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();






  return (
    <main className="bg-[#231D16]">
      <h1 className=" text-white lg:text-[28px] md:text-[28px] text-[20px] font-serif font-bold flex gap-6 lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-6 px-4">
        <Link to="/marketplace"> Back </Link>
        <span> Details Page</span>
      </h1>


      <section className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 flex lg:flex-row md:flex-row flex-col justify-between">
        <div className="lg:w-[35%] md:w-[35%] w-[100%] border bg-[#231D16]/90  rounded-2xl ">
          <img
            // src={info.productUri}
            alt=""
            className="w-[100%] p-4 object-cover object-center rounded-2xl"
          />
        </div>
        <div className="text-white lg:w-[60%] md:w-[60%] w-[100%] p-4 border bg-[#231D16]/90 border-white rounded-2xl">
          <h3 className="font-bold mt-4 lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-titiliumweb">
            {/* {info.productName} */}
          </h3>
          <p className="font-titiliumweb mb-4 font-normal text-white lg:text-[18px] md:text-[18px] text-[14px]">
            {" "}
            {/* {info.productOrigin} */}
          </p>
          <p className="font-titiliumweb mb-4 font-bold text-white lg:text-[24px] md:text-[24px] text-[20px]">
            {" "}
            Description
          </p>
          <p className="font-titiliumweb mb-4 font-normal text-white text-justify lg:text-[18px] md:text-[18px] text-[14px]">
            {" "}
            {/* {info.productDescription} */}
          </p>
          <p className="flex gap-12 my-4 font-titiliumweb mb-4 font-bold text-white lg:text-[24px] md:text-[24px] text-[20px]">
            {/* {formatUnits(info.productPrice.toString(), "ether")} ETH{" "} */}
            {/* <span>{info.quantity}units </span> */}
          </p>
          <p className="flex gap-24 my-4 text-[#54BE73] lg:text-[18px] md:text-[18px] text-[14px]">
            Price <span>Quantity</span>
          </p>
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-full my-1 rounded-3xl"
            >
              Purchase
            </button>
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="relative z-30"
            >
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-black/60 p-12 rounded-xl">
                  <DialogTitle className="font-bold">Buy Product</DialogTitle>
                  <input
                    type="text"
                    // value={amount}
                    // onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                  />
                  <input
                    type="text"
                    value={id}
                    readOnly
                    className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white p-2.5 backdrop-blur-lg mb-4 outline-none hidden"
                  />
                  <input
                    type="text"
                    // value={quantity}
                    // onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter quantity"
                    className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                  />
                  <button className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-full my-1 rounded-3xl">Buy</button>
                  <div className="flex gap-4">
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                    <button onClick={() => setIsOpen(false)}>
                      Deactivate
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </div>
          <button className="bg-transparent text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-full my-4 rounded-3xl border border-white">
            Chat Seller
          </button>
        </div>
      </section>

    </main>
  );
};

export default ProductDetails;
