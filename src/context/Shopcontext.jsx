import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const Shopcontext = createContext();

const Shopcontextprovider = (props) => {
    const currency = '$';
    const delivery_fee = 3.3;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});


    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('select Productsize');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size] =1;
            }
        }
        else{
            cartData[itemId] ={};
            cartData[itemId][size] =1;
        }
        setCartItems(cartData);

    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items] [item];
                    }
                } catch (error){

                }
            }
        }
        return totalCount;
    }


    const updateQuantity = async(itemId,size,quantity) =>{

        let cartData = structuredClone(cartItems);

        cartData[itemId][size]=quantity;

        setCartItems(cartData);

    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for (const item in cartItems[items]){
                try{
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error){

                }
            }
        }
        return totalAmount;
    }

const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems,addToCart,
    getCartCount,updateQuantity,
    getCartAmount,
};

return (
    <Shopcontext.Provider value={value}>
        {props.children}
    </Shopcontext.Provider>
);
}

export default Shopcontextprovider;
