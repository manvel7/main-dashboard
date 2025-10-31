import React from 'react';
import styled from '@emotion/styled';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Box,
  Button,
} from '@mui/material';

const ProductCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  transition: 'all 0.25s ease',
  padding: '16px 0',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const ProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: 'black',
}));

type Product = {
  id: string;
  name: string;
};

export const ProductItem: React.FC<{ product: Product }> = React.memo(
  ({ product }) => (
    <ProductCard elevation={4} sx={{ mt: 2, mb: 2 }}>
      <CardContent>
        <ProductTitle variant="subtitle1">{product.name}</ProductTitle>
        <Typography variant="body2" color="text.secondary">
          A short product description can go here.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2" fontWeight={600}>
            ${(Math.random() * 100).toFixed(2)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          startIcon={<ShoppingCartOutlinedIcon />}
          sx={{ borderRadius: 2, textTransform: 'none' }}
        >
          Add to cart
        </Button>
      </CardActions>
    </ProductCard>
  )
);
