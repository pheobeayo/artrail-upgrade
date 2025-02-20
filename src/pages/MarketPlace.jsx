import otherBackground from "../assets/otherBackground.svg";
import featured1 from "../assets/featured1.svg";
import featured2 from "../assets/featured2.svg";
import featured3 from "../assets/featured3.svg";

const MarketPlace = () => {
    const products = [
        {
          id: 1,
          image: featured1,
          name: 'Handcrafted Wooden Sculpture',
          location: 'Ghana, West Africa',
          status: 'sold',
          price: '0.5 ETH',
          quanitity: '10 units ',
        },
        {
          id: 2,
          image: featured2,
          name: 'Vintage Ceramic Vase',
          location: 'Florence, Italy',
          status: 'listed',
          price: '1 ETH',
          quantity: '8 units',
        },
        {
          id: 3,
          image: featured3,
          name: 'Artisan Silk Wall Hanging',
          location: 'Istanbul, Turkey',
          status: 'cancelled',
          price: '1 ETH',
          quantity: '0.8 units',
        },
      ]
    
    
    
    return (
        <main className="bg-[#231D16] w-screen h-[230vh]">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
                Marketplace
            </h1>
            <div className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover mt-4"
                style={{
                    backgroundImage: `url(${otherBackground})`,
                    backgroundSize: "100%",
                }}>
                <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
                    Tokenizing Real-World Assets for
                    <br />Global Access and Trust
                </h1>
                <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center font-Sorts Mill Goudy">
                    Mint, Trade, and Track Authentic Art, Artifacts, and Crafts with NFTs on a
                    <br />Secure, Transparent Blockchain Marketplace
                </p>
            </div>
            <div className="lg:w-[80%] md:w-[80%] mx-auto py-4 px-4 lg:px-0 md:px-0 ">
            <div className="border border-white rounded-3xl w-[50%] flex justify-between mt-4">
                <div className="grid place-content-center text-[13px] p-4"><p className="text-white text-center font-thin ">Input Product tracking code</p></div>
                <button className="bg-[#33302E] w-[30%] mt-1 mr-1 text-white mb-1 rounded-3xl p-4 border border-white font-thin">
                    Track
                </button>
            </div>
            </div>
            <div className="lg:w-[90%] md:w-[90%] w-[95%] flex lg:flex-row md:flex-row flex-col justify-between my-10 flex- mx-auto py-12 px-4 lg:px-0 md:px-0">

            {products.map((product, index) => (
              <div key={index} className="lg:w-[32%] md:w-[32%] w-[100%] p-4 bg-[#2D2821] border-white rounded-xl border shadow-lg mb-4">
                <img src={product.image}
                  className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                />
                <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]  text-white">
                  {product.name}
                </h3>
                <p className=" flex justify-between text-white lg:text-[14px] md:text-[14px] text-[10px] ">
                  {product.location} <span>Status: {product.status}</span>
                </p>
                <p className="flex justify-between text-white font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]">
                  {product.price} <span>{product.quantity} </span>
                </p>
                <p className="flex justify-between text-[#54BE73]  lg:text-[14px] md:text-[14px] text-[10px]">
                  Price  <span>Quantity </span>
                </p>
                <button className="bg-transparent text-white py-2 px-4  lg:text-[12px] md:text-[12px] font-bold text-[10px] w-full my-2 rounded-3xl border border-white">
                  Resell
                </button>
              </div>
            ))
            }

          </div>
        </main>
    );
};

export default MarketPlace;
