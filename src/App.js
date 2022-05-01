import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
// import { calculateTotals } from "./features/cart/cartSlice ";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <>
        <Box>
          <Typography variant="h3" component="h3">
            Loading...
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <CartContainer />
    </>
  );
}
export default App;
