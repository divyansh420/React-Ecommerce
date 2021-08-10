import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/react';
import { BiChevronsRight } from 'react-icons/bi';

const PageNav = () => {
	return (
		<Breadcrumb spacing="8px" separator={<Icon as={BiChevronsRight} color="gray.500" />}>
			<BreadcrumbItem>
				<BreadcrumbLink href="#">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<BreadcrumbLink href="#">About</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink href="#">Contact</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default PageNav;
