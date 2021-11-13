import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import I18n from 'i18n-js';
import React, { useEffect } from 'react';
import { DELETE_ITEM, UPDATE_ITEM } from '../../constants/actionTypes';

const Cart = ({
  loadCart,
  cart,
  isCartLoading,
  isUpdateToCartLoading,
  isDeleteToCartLoading,
  addToCart,
}) => {
  useEffect(() => {
    console.log(loadCart);
    loadCart && loadCart();
  }, []);

  if (isCartLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          height: '80vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      {(cart?.cartItems || []).map(x => (
        <Card sx={{ display: 'flex', margin: 2 }} key={x.id}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={x.image}
            alt={x.description}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="div" variant="h5">
              {x.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {x.description}
            </Typography>
            <Typography variant="subtitle1" component="div">
              {I18n.toCurrency(x.price)}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant="contained"
                disabled={
                  isUpdateToCartLoading === x.id ||
                  isDeleteToCartLoading === x.id
                }
                onClick={() =>
                  addToCart({ ...x, quantity: x.quantity - 1 }, DELETE_ITEM)
                }
              >
                -
              </Button>

              <Typography
                sx={{ paddingLeft: 2, paddingRight: 2 }}
                component="div"
                variant="h5"
              >
                {x.quantity}
              </Typography>
              <Button
                variant="contained"
                disabled={
                  isUpdateToCartLoading === x.id ||
                  isDeleteToCartLoading === x.id
                }
                onClick={() =>
                  addToCart({ ...x, quantity: x.quantity + 1 }, UPDATE_ITEM)
                }
              >
                +
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
