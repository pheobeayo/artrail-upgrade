import { Link } from 'react-router-dom';
import otherBackground from '../assets/otherBackground.svg';
import Ellipse from '../assets/Ellipse.svg';
import featured1 from "../assets/featured1.svg";
import featured2 from "../assets/featured2.svg";
import featured3 from "../assets/featured3.svg";

const AllPurchasedProducts = () => {

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
        <main className="bg-[#231D16] w-screen">

            <div className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover "
                style={{
                    backgroundImage: `url(${otherBackground})`,
                    backgroundSize: "100%",
                }}>
                <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
                    Welcome to your store
                </h1>
                <button className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-1/4 my-4 rounded-3xl">
                    List Product
                </button>
            </div>
            <section className='bg-[#231D16] bg-no-repeat py-8 px-2'
                style={{
                    backgroundImage: `url(${Ellipse})`,
                    backgroundSize: "30% ",
                    backgroundPosition: "left top",
                }}>
                <div className='lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0'>
                    <div className="border border-white rounded-3xl w-[50%] flex justify-between">
                        <div className="grid place-content-center text-[13px] p-2"><p className="text-white text-center">Input Product tracking code</p></div>
                        <button className="bg-[#33302E] w-[20%] mt-1 mr-1 text-white mb-1 rounded-3xl p-4 border border-white">
                            Track
                        </button>
                    </div>

                    <h3 className='font-medium text-white mt-4 lg:mt-4 md:mt-4 my-2 lg:text-[16px] md:text-[16px] text-[12px] capitalise font-titiliumweb flex justify-between'>
                        <Link to='/store/allproducts'>All Products</Link> <span>
                            <Link to='/store/transactions'>All Transactions </Link></span>
                        <span><Link to='/store/mintednfts'>Minted NFTs</Link></span>
                        <span><Link to='/store/claimednfts'>Claimed NFTs</Link></span>
                    </h3>

                    <div className="flex lg:flex-row md:flex-row flex-col justify-between my-10 flex-wrap">
                        {
                            products.map((product, index) => (
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
                </div>
            </section>


        </main >
    );
};

export default AllPurchasedProducts;
