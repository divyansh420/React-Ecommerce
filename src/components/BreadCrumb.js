import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
  
  const PageNav = () => {
	  return (
		<Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
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
	  )
  }

  export default PageNav;
