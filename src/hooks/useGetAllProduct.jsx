import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getArtrailContract } from "../constants/contract";
import { wssProvider } from "../constants/providers";
import { ethers } from "ethers";

const UseGetAllProduct = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [count, setCount] = useState(0);

    const convertIpfsUrl = (url) => {
        if (url.startsWith("ipfs://")) {
            return url.replace("ipfs://", "https://ipfs.io/ipfs/");
        }
        return url;
    };

    const fetchAllProduct = useCallback(async () => {
        try {
            const contract = getArtrailContract(readOnlyProvider);
            const res = await contract.allProducts();
            const converted = res?.map((item)=>{
                return{
                id: item[0],
                name: item[1],
                image: convertIpfsUrl(item[2]),
                productDescription: item[3],
                location: item[4],
                price: item[5],
                quantity: item[6],
                addressCreator: item[7],
                totalSold: item[8],
                createdDate: item[9]
              }      
            }) 
            setAllProduct(converted)
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingProduct = useCallback(() => {
        setCount((prevValue) => prevValue + 1);
        fetchAllProduct();
    }, [fetchAllProduct]);


    useEffect(() => {
        fetchAllProduct();

        // const filter = {
        //     address: import.meta.env.VITE_CONTRACT_ADDRESS,
        //     topics: [ethers.id("ProductListed(uint,string, address)")],
        // };

        // wssProvider.getLogs({ ...filter, fromBlock: 7669658 }).then((events) => {
        //     setCount(events.length + 1);
        // });

        // const provider = new ethers.WebSocketProvider(
        //     import.meta.env.VITE_WSS_RPC_URL
        // );
        // provider.on(filter, trackingProduct);

        // return () => {
        //     // Perform cleanup
        //     provider.off(filter, trackingProduct);
        // };

    }, [fetchAllProduct, trackingProduct, count]);

    return allProduct;
}

export default UseGetAllProduct;