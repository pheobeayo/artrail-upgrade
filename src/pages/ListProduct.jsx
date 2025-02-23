// import React, { useState } from "react";
import Ellipse from "../assets/Ellipse.svg";
import otherBackground from "../assets/otherBackground.svg";
// import { toast } from "react-toastify";
// import { getProvider } from "../constants/providers";
// import { getArtrailContract } from "../constants/contract";
// import {
//   useWeb3ModalAccount,
//   useWeb3ModalProvider,
// } from "@web3modal/ethers/react";
// import { isSupportedChain } from "../connection";
// import { ethers, parseEther } from "ethers";
// import { ErrorDecoder } from 'ethers-decode-error'
// import abi from '../constants/abi.json'


const ListProduct = () => {
  // const [ipfsUrl, setIpfsUrl] = useState(null);
  // const [productName, setProductName] = useState("");
  // const [productDesc, setProductDesc] = useState("");
  // const [location, setLocation] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [price, setPrice] = useState("");
  // const [error, setError] = useState("");
  // const [isUploading, setIsUploading] = useState(false);

  // const { chainId } = useWeb3ModalAccount();
  // const { walletProvider } = useWeb3ModalProvider();
  // const errorDecoder = ErrorDecoder.create([abi])
  // const handleFileUpload = async (event) => {
  //   const file = event.target.files[0];
  //   if (!file) {
  //     alert("Please select a file first");
  //     return;
  //   }

  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     const res = await fetch(
  //       "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
  //         },
  //         body: formData,
  //       }
  //     );
  //     const resData = await res.json();
  //     setIpfsUrl(`https://ipfs.io/ipfs/${resData.IpfsHash}`);

  //     toast.success("Upload Successful", {
  //       position: "top-center",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // async function handleListProduct() {
  //   if (!isSupportedChain(chainId)) return console.error("Wrong network");
  //   const readWriteProvider = getProvider(walletProvider);
  //   const signer = await readWriteProvider.getSigner();

  //   const contract = getArtrailContract(signer);

  //   try {
  //     const _amount = ethers.parseUnits(price);

  //     const transaction = await contract.listProduct(
  //       productName,
  //       _amount,
  //       quantity,
  //       ipfsUrl,
  //       productDesc,
  //       location
  //     );
  //     console.log("transaction: ", transaction);
  //     const receipt = await transaction.wait();

  //     if (receipt.status) {
  //       return toast.success("Listing successful!", {
  //         position: "top-center",
  //       });
  //     }

  //     toast.error("Listing failed", {
  //       position: "top-center",
  //     });
  //   } catch (err) {
  //     const decodedError = await errorDecoder.decode(err)
  //     console.error(err);
  //     toast.error(`Listing failed! - ${decodedError.reason}`, {
  //       position: "top-center",
  //     });
  //   } finally {
  //     setIpfsUrl("");
  //     setLocation("");
  //     setPrice(0);
  //     setProductDesc("");
  //     setQuantity(0);
  //     setProductName("");
  //   }
  // }

  return (
    <main className="bg-[#231D16] w-screen">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold text-center">
        LIST PRODUCTS
      </h1>
      <div
        className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover mt-4"
        style={{ backgroundImage: `url(${otherBackground})`, backgroundSize: "100%" }}
      >
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-serif font-bold my-4">
          Tokenizing Real-World Assets for Global Access and Trust
        </h1>
        <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center font-sans">
          Mint, Trade, and Track Authentic Art, Artifacts, and Crafts with NFTs on a
          Secure, Transparent Blockchain Marketplace
        </p>
      </div>
      <section
        className="bg-[#231D16] bg-no-repeat py-8 px-2"
        style={{ backgroundImage: `url(${Ellipse})`, backgroundSize: "30%", backgroundPosition: "left top" }}
      >
        <div className="w-[50%] lg:mx-96 md:mx-96 mx-10 lg:px-10 md:px-10">
          {[
            { label: "Upload Image", type: "file" },
            { label: "Product Name", type: "text", placeholder: "Enter your product name" },
            { label: "Product description", type: "text", placeholder: "Include the type, material, and history of the product" },
            { label: "Origin and location", type: "text", placeholder: "Country, region (e.g Nigeria, West Africa)" },
            { label: "Quantity", type: "number", placeholder: "Quantity should be in units" },
            { label: "Price", type: "text", placeholder: "Price per quantity (in cryptocurrency)" },
          ].map(({ label, type, placeholder }, index) => (
            <div key={index}>
              <label className="block mt-4 mb-2 text-base font-bold text-white text-left">{label}</label>
              <input
                type={type}
                placeholder={placeholder || ""}
                className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
              />
            </div>
          ))}
          <button className="bg-[#54BE73] text-white py-2 px-4 lg:text-[20px] md:text-[20px] font-bold text-[16px] w-3/4 my-4 rounded-3xl">
            Create
          </button>
        </div>
      </section>
    </main>
  );
};

export default ListProduct;
