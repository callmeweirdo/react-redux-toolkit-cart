import React from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  Paper,
  ButtonGroup,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const CartModal = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  // const handleHandle = () => {
  //   dispatch(closeModal);
  // };

  return (
    <Box>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
            width: "100%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box m={1} p={3}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Remove All Items From Your Shooping Cart ?
              </Typography>
              <Box mt={3} mb={1}>
                <ButtonGroup variant="outlined" fullWidth>
                  <Button color="error" onClick={() => dispatch(closeModal())}>
                    CanCel
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => {
                      dispatch(closeModal());
                      dispatch(clearCart());
                    }}
                  >
                    Confirm
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </Box>
  );
};

export default CartModal;
