import { Box, Text } from '@chakra-ui/react';
import PageNav from '../components/BreadCrumb';

const Cart = () => {
	return (
		<>
			<Box as="h1">Your Cart</Box>
			<PageNav />
			<Text fontSize="xl" textAlign="center">
				Shopping Cart Summary
			</Text>
		</>
	);
};

export default Cart;
