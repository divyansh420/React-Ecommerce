import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react';

import data from '../product_lists.json';
import '../css/landing.css';
import Portal from '../components/Modal';

const Landing = () => {

	return (
		<Flex wrap="wrap" mx={16}>
			{data.map((item) => {
				const isDiscounted = item.discount.endsWith('%')
				const discount = isDiscounted ? Number(item.discount.split('%')[0]) : 0;
				return (
					<>
						<Flex
							direction="column"
							padding="1%"
							margin="1%"
							width="23%"
							height="500"
							borderWidth="1px"
							borderRadius="xl"
							boxShadow="xl"
							justifyContent="space-between"
							position="relative"
						>
							<Box key={item.productId} overflow="hidden" padding="4" m="auto">
								<Image src={item.imageURL} alt={item.name} width="100%" height="100%" />
							</Box>
							<Box p="6" flexDirection="row">
								<Tooltip
									label={item.name}
									fontSize="md"
									openDelay={500}
									bg="gray.300"
									color="black"
									padding="4"
								>
									<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
										{item.name}
									</Box>
								</Tooltip>
								<Box d="flex" justifyContent="center">
									{isDiscounted && <Box mr={4}>₹{item.price - (item.price - discount) / 100}</Box>}
									<Text className={isDiscounted && 'striked'}>₹{item.price}</Text>
								</Box>
							</Box>
							<Portal item={item} />
						</Flex>
					</>
				)}
			)}
		</Flex>
	);
};

export default Landing;
