import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import I18n from 'i18n-js';
import { Box } from '@mui/system';
import React, { useEffect, memo } from 'react';
import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from '../../constants/actionTypes';

const Home = ({
  products,
  cart,
  isProductsLoading,
  isCartLoading,
  isAddToCartLoading,
  isUpdateToCartLoading,
  isDeleteToCartLoading,
  loadProducts,
  addToCart,
  loadCart,
}) => {
  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  if (isProductsLoading || isCartLoading) {
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
      {products.map(x => {
        const cartItem = cart.cartItems.find(item => item.id === x.id);
        return (
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

              {cartItem && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    disabled={
                      isUpdateToCartLoading === x.id ||
                      isDeleteToCartLoading === x.id
                    }
                    onClick={() =>
                      addToCart(
                        { ...x, quantity: cartItem.quantity - 1 },
                        DELETE_ITEM,
                      )
                    }
                  >
                    -
                  </Button>

                  <Typography
                    sx={{ paddingLeft: 2, paddingRight: 2 }}
                    component="div"
                    variant="h5"
                  >
                    {cartItem.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    disabled={
                      isUpdateToCartLoading === x.id ||
                      isDeleteToCartLoading === x.id
                    }
                    onClick={() =>
                      addToCart(
                        { ...x, quantity: cartItem.quantity + 1 },
                        UPDATE_ITEM,
                      )
                    }
                  >
                    +
                  </Button>
                </Box>
              )}

              {!cartItem && (
                <Button
                  variant="contained"
                  disabled={isAddToCartLoading === x.id}
                  onClick={() => addToCart({ ...x, quantity: 1 }, ADD_ITEM)}
                >
                  Add To Cart
                </Button>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default memo(Home);
