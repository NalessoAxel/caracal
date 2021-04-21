import { Button } from '@chakra-ui/react';

const NavButton = () => (
	<Button w="206px" h="60px" size="md" mr="88px" variant="solid" color={['lightBlue']} _hover={{ bg: '#ebedf0' }} bg={['white', 'white', 'primary.500', 'primary.500']}>
		Testez-nous !
	</Button>
);

export default NavButton;
