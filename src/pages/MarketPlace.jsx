import otherBackground from "../assets/otherBackground.svg";
import featured1 from "../assets/featured1.svg";
import featured2 from "../assets/featured2.svg";
import featured3 from "../assets/featured3.svg";

const MarketPlace = () => {
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
      {/* Marketplace Title */}
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% text-[20px] md:text-[24px] font-serif font-bold text-center py-6">
        Marketplace
      </h1>

      {/* Hero Section */}
      <div
        className="w-[90%] md:w-[80%] mx-auto text-center p-6 border border-white rounded-2xl bg-cover"
        style={{
          backgroundImage: `url(${otherBackground})`,
          backgroundSize: "100%",
        }}
      >
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% text-[26px] md:text-[38px] font-titiliumweb font-bold my-4">
          Tokenizing Real-World Assets for
          <br />
          Global Access and Trust
        </h1>
        <p className="text-white text-[14px] md:text-[20px] font-SortsMillGoudy">
          Mint, Trade, and Track Authentic Art, Artifacts, and Crafts with NFTs
          on a <br /> Secure, Transparent Blockchain Marketplace
        </p>
      </div>

      {/* Product Tracking Input */}
      <div className="w-[90%] md:w-[50%] mx-auto py-6">
        <div className="border border-white rounded-3xl flex flex-col md:flex-row justify-between p-2">
          <input
            type="text"
            placeholder="Input Product tracking code"
            className="bg-transparent text-white text-sm p-4 outline-none w-full md:w-3/4"
          />
          <button className="bg-[#33302E] text-white text-sm p-4 rounded-3xl border border-white w-full md:w-1/4 mt-2 md:mt-0">
            Track
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-[95%] md:w-[90%] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="flex justify-between text-[#54BE73]   font-bold mt-4 text-[16px] md:text-[18px]">
                {product.price} <span>{product.quantity}</span>
              </p>
              <button className="bg-transparent text-white py-2 px-4 text-[12px] md:text-[14px] font-bold w-full my-4 rounded-3xl border border-white">
                Resell
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MarketPlace;
