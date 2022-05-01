import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { Delete } from "@mui/icons-material";
import { clearCart } from "../features/cart/cartSlice";
import { openModal, closeModal } from "../features/modal/modalSlice";
import CartModal from "./CartModal";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <Container>
        <Box
          mt={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" component="h4">
            Your cart Is Empty
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        mt={5}
        mb={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h4">
          Your cart Items
        </Typography>
      </Box>
      <Box mb={5}>
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </Box>
      <hr />
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={2}>
        <Typography variant="h5" component="h5">
          ToTal
        </Typography>
        <Typography variant="h5" component="h5">
          ${total.toFixed(2)}
        </Typography>
      </Box>
      <Box
        mt={3}
        sx={{
          display: "flex",
          width: "150px",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ marginBottom: "50px" }}
          color="error"
          variant="outlined"
          startIcon={<Delete />}
          onClick={() => dispatch(openModal())}
        >
          Delete
        </Button>
      </Box>
      <CartModal />
    </Container>
  );
};

export default CartContainer;
