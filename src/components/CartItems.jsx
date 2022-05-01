import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { Delete, ExpandLess, ExpandMore } from "@mui/icons-material";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ img, amount, price, title, id }) => {
  const dispatch = useDispatch();
  return (
    <Stack
      spacing={5}
      mb={2}
      direction="row"
      sx={{ justifyContent: "space-between" }}
    >
      <Box sx={{ width: "100px", height: "100px" }}>
        <img src={img} alt={title} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="p" component="p">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          ${price}
        </Typography>
        <Button
          size="small"
          color="error"
          variant="outlined"
          onClick={() => dispatch(removeItem(id))}
        >
          <Delete />
        </Button>
      </Box>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={() => dispatch(increase({ id }))}
        >
          <ExpandLess />
        </Button>
        {amount}
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            dispatch(decrease({ id }));
          }}
        >
          <ExpandMore />
        </Button>
      </Stack>
    </Stack>
  );
};

export default CartItems;
