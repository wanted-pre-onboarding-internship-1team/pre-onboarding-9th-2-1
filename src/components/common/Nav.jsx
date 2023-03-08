import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export default function Nav() {
  return (
    <Breadcrumb
      spacing='8px'
      bg='twitter.500'
      color='white'
      height='80px'
      mb='6'>
      <BreadcrumbItem>
        <BreadcrumbLink href='/main' fontSize='2xl'>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='/reservations' fontSize='2xl'>
          Reservation
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
