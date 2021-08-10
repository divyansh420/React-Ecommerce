import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Icon,
	Flex,
	Box,
	Image,
	Text,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Button,
} from '@chakra-ui/react';
import { BiFullscreen } from 'react-icons/bi';

const Portal = ({item}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Icon
				as={BiFullscreen}
				w={8}
				h={8}
				position="absolute"
				bottom="25%"
				right={3}
				borderRadius="full"
				bg="#efefef"
				padding={2}
				onClick={onOpen}
			/>
			<Modal isOpen={isOpen} onClose={onClose} size="6xl">
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Flex
							direction="row"
							padding="1%"
							margin="1%"
							width="100%"
							height="500"
							borderRadius="xl"
							justifyContent="space-between"
							alignItems="center"
						>
							<Box key={item.productId} overflow="hidden" padding="4" m="auto">
								<Image src={item.imageURL} alt={item.name} width="100%" height="100%" />
							</Box>
							<Box p="6">
								<Text fontSize="sm" color="gray.500">{item.productId}</Text>
								<Text fontSize="2xl" mt={4} fontWeight="semibold">
									{item.name}
								</Text>
								<Text fontSize="sm" mb={4}>{item.sellerName}</Text>
								<Text fontSize="3xl" as="h1">₹{item.price}</Text>
								<NumberInput defaultValue={1} min={1} size="md" width={20} shadow="xl" my={8}>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								<Button bg="lightskyblue" mt={2}>Add To Cart</Button>
							</Box>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Portal;
