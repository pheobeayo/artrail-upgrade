import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#231D16] bg-opacity-50">
      <HashLoader color="#54BE73" size={60} />
    </div>
  );
};

export default Loader;