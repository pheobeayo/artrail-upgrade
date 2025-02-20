
import { Link } from "react-router-dom";


const ProductCard = () => {


  return (
    <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 flex lg:flex-row md:flex-row flex-col justify-between my-10 flex-wrap">
       
        <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4 bg-[#2D2821]  border-white rounded-xl border shadow-lg mb-4">
          <Link to="">
            {/* <img
              src=
             
              className="w-[100%] h-[237px] object-cover object-center rounded-lg"
            /> */}
            <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]  text-white">
           
            </h3>
            <p className=" text-white lg:text-[14px] md:text-[14px] text-[10px] ">
            
            </p>
            <p className="flex justify-between text-white font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]">
             
              <span> </span>
            </p>
            <p className="flex justify-between text-[#54BE73]  lg:text-[14px] md:text-[14px] text-[10px]">
              Price <span>Quantity </span>
            </p>
          </Link>
        </div>
     
    </div>
  );
};

export default ProductCard;
