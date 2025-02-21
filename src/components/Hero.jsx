import heroImage from "../assets/heroImage.svg";
import featureIcon from "../assets/featureIcon.svg";
import featureImage from "../assets/featureImage.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#231D16] w-screen">
      <section className="flex flex-col lg:flex-row items-center px-4 lg:px-0">
        <div className="xl:w-[70%] w-[90%] p-16">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFB054] font-serif text-[40px] 2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] font-bold">
            Tokenizing Real-World <br /> Assets for Global Access <br /> and Trust
          </h1>
          <p className="text-white text-[18px] lg:text-[24px] font-sans">
            Mint, Trade, and Track Authentic Art, Artifacts, and Crafts <br />
            with NFTs on a Secure, Transparent Blockchain Marketplace
          </p>
          <div className=" mt-6 flex items-center flex-col md:flex-row 2xl:flex-row lg:flex-row gap-4">
      <button className="bg-[#54BE73]  rounded-full text-[20px] lg:text-[25px] md:text-[25px] 2xl:text-[20px] xl:text-[20px] p-4 text-white">
        List Product
      </button>
      <div className="flex justify-between border border-white rounded-full px-2 py-1 space-x-2 w-[50%]">
        <input
          type="text"
          placeholder="Input Product tracking code"
          className="bg-transparent text-white p-4 w-full outline-none placeholder:text-white text-[13px] text-serif"
        />
        <button className="bg-[#33302E] w-[45%] font-Montserrat text-white text-[20px] py-1 rounded-3xl border-white border p-4 text-white">
          Track
        </button>
      </div>
    </div>
        </div>
        <div className="lg:w-[40%] w-[100%]">
          <img src={heroImage} alt="Hero" className="w-full" />
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-[#26201A] to-[#131313] py-12">
        <div className="lg:w-[90%] w-[100%] mx-auto text-center">
          <h2 className="text-white text-[24px] lg:text-[32px] font-bold font-sans">Features of Artrail</h2>
          <h2 className="text-white text-[24px] lg:text-[32px] font-medium font-sans">Features and Functionality of Artrail</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row md:flex-row justify-between py-6 ">
          <img src={featureImage} alt="Feature" className="h-[600px] w-[95%] lg:w-[50%] md:w-[50%] 2xl:w-[50%] xl:w-[50%]" />
          <div className=" lg:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] w-[90%] h-[700px] space-y-8 pr-20">
            {["NFT Minting for RWA", "NFT Transfer & Ownership", "Marketplace Search & Discovery", "Tracking & Claiming RWAs"].map((title, index) => (
              <div key={index} className='bg-[#26201A] border rounded-2xl p-4 flex items-center gap-4 h-[20%]'>
                <img src={featureIcon} alt='Feature Icon' className='w-12 h-12' />
                <div>
                  <h3 className="text-white text-[14px] lg:text-[20px] font-bold">{title}</h3>
                  <p className="text-white text-[10px] lg:text-[14px] font-light">
                    {index === 0 && "Creators can mint real-world assets as NFTs by providing product details. Each NFT gets a unique code for tracking and authentication."}
                    {index === 1 && "Ensures NFTs can only be transferred to one buyer at a time, with ownership verified through the unique code on the blockchain."}
                    {index === 2 && "Enables buyers to search, view, and purchase NFTs using cryptocurrency, with escrow holding funds until the asset is delivered and claimed."}
                    {index === 3 && "Buyers can track the history of the real-world asset using the NFT’s unique code and claim ownership once the physical asset is delivered."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
