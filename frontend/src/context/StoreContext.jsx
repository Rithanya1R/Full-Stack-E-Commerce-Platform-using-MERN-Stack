import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if (token) {
      try {
        const response = await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
        response.data.success
          ? toast.success("Item added to cart")
          : toast.error("Something went wrong");
      } catch {
        toast.error("Server error while adding item");
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: Math.max((prev[itemId] || 1) - 1, 0) };
      return updated;
    });

    if (token) {
      try {
        const response = await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { token } }
        );
        response.data.success
          ? toast.success("Item removed from cart")
          : toast.error("Something went wrong");
      } catch {
        toast.error("Server error while removing item");
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setFoodList(response.data.data);
      } else {
        toast.error("Error fetching products");
      }
    } catch {
      toast.error("Server error while fetching products");
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token } }
      );
      setCartItems(response.data.cartData || {});
    } catch {
      toast.error("Error loading cart data");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    };
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};








// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const url = "http://localhost:4000";
//   const [token, setToken] = useState("");
//   const [food_list, setFoodList] = useState([]);

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       const response=await axios.post(
//         url + "/api/cart/add",
//         { itemId },
//         { headers: { token } }
//       );
//       if(response.data.success){
//         toast.success("item Added to Cart")
//       }else{
//         toast.error("Something went wrong")
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     if (token) {
//       const response= await axios.post(
//         url + "/api/cart/remove",
//         { itemId },
//         { headers: { token } }
//       );
//       if(response.data.success){
//         toast.success("item Removed from Cart")
//       }else{
//         toast.error("Something went wrong")
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     const response = await axios.get(url + "/api/food/list");
//     if (response.data.success) {
//       setFoodList(response.data.data);
//     } else {
//       alert("Error! Products are not fetching..");
//     }
//   };

//   const loadCardData = async (token) => {
//     const response = await axios.post(
//       url + "/api/cart/get",
//       {},
//       { headers: { token } }
//     );
//     setCartItems(response.data.cartData);
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       if (localStorage.getItem("token")) {
//         setToken(localStorage.getItem("token"));
//         await loadCardData(localStorage.getItem("token"));
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };
// export default StoreContextProvider;