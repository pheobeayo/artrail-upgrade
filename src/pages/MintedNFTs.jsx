import { Link } from "react-router-dom";
import otherBackground from "../assets/otherBackground.svg";
import featured1 from "../assets/featured1.svg";
import featured2 from "../assets/featured2.svg";
import featured3 from "../assets/featured3.svg";
import Ellipse from "../assets/Ellipse.svg";

const MintedNFTs = () => {
  const products = [
    {
      id: 1,
      image: featured1,
      name: "Handcrafted Wooden Sculpture",
      location: "Ghana, West Africa",
      status: "sold",
      price: "0.5 ETH",
      quantity: "10 units",
    },
    {
      id: 2,
      image: featured2,
      name: "Vintage Ceramic Vase",
      location: "Florence, Italy",
      status: "listed",
      price: "1 ETH",
      quantity: "8 units",
    },
    {
      id: 3,
      image: featured3,
      name: "Artisan Silk Wall Hanging",
      location: "Istanbul, Turkey",
      status: "cancelled",
      price: "1 ETH",
      quantity: "0.8 units",
    },
  ];

  return (
    <main className="bg-[#231D16] w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="w-[90%] md:w-[80%] mx-auto text-center p-6 border border-white rounded-2xl bg-cover"
        style={{
          backgroundImage: `url(${otherBackground})`,
          backgroundSize: "100%",
        }}
      >
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% text-[26px] md:text-[38px] font-SortsMillGoudy font-bold my-4">
          Welcome to your store
        </h1>
        <button className="bg-[#54BE73] text-white py-2 px-6 text-[16px] md:text-[20px] font-bold w-full md:w-1/4 my-4 rounded-3xl">
          List Product
        </button>
      </div>

      {/* Background Section with Tracking Input */}
      <section
        className="bg-[#231D16] bg-no-repeat py-8 px-2"
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundSize: "30%",
          backgroundPosition: "left top",
        }}
      >
        <div className="w-[90%] md:w-[80%] mx-auto py-12 px-4">
          {/* Tracking Input */}
          <div className="border border-white rounded-3xl flex flex-col md:flex-row justify-between p-2 w-full md:w-[50%] mx-auto">
            <input
              type="text"
              placeholder="Input Product tracking code"
              className="bg-transparent text-white text-sm p-4 outline-none w-full md:w-3/4"
            />
            <button className="bg-[#33302E] text-white text-sm p-4 rounded-3xl border border-white w-full md:w-1/4 mt-2 md:mt-0">
              Track
            </button>
          </div>

          {/* Navigation Links */}
          <h3 className="font-medium text-white mt-6 text-[12px] md:text-[16px] flex flex-wrap justify-between gap-4 md:gap-0 text-center">
            <Link to="/store/allproducts">All Products</Link>
            <Link to="/store/transactions">All Transactions</Link>
            <Link to="/store/mintednfts">Minted NFTs</Link>
            <Link to="/store/claimednfts">Claimed NFTs</Link>
          </h3>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#2D2821] border border-white rounded-xl shadow-lg p-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[237px] object-cover object-center rounded-lg"
                />
                <h3 className="font-bold mt-4 text-[16px] md:text-[18px] text-white">
                  {product.name}
                </h3>
                <p className="flex justify-between text-white text-[12px] md:text-[14px]">
                  {product.location} <span>Status: {product.status}</span>
                </p>
                <p className="flex justify-between text-white font-bold mt-4 text-[16px] md:text-[18px]">
                  {product.price} <span>{product.quantity}</span>
                </p>
                <p className="flex justify-between text-[#54BE73] text-[12px] md:text-[14px]">
                  Price <span>Quantity</span>
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
                  <button className="bg-[#54BE73] text-white py-2 px-4 text-[12px] md:text-[14px] font-bold w-full md:w-[48%] rounded-3xl">
                    Claim NFT
                  </button>
                  <button className="bg-transparent text-white py-2 px-4 text-[12px] md:text-[14px] font-bold w-full md:w-[48%] rounded-3xl border border-white">
                    Cancel Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MintedNFTs;
