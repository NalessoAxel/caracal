import { Box, Flex, Image, Text } from '@chakra-ui/react';

const SectionPartner = () => (
	<div>
		<Box>
			<Flex align="center" justifyContent="space-between">
				<Text color="#4377DA" borderBottom="2px" borderBottomWidth="3px" my="100px">
					Ils nous font <br /> confiance
				</Text>
				<Image src="/Roularta.png" alt="" width="268" height="62" />
				<Image src="/Alpha.png" alt="" width="221" height="54" />
				<Image src="/caterpil.png" alt="" width="222" height="36" />
				<Image src="/Orange.png" alt="" width="66" height="66" />
				<Image src="/Worldine.png" alt="" width="144" height="26" />
			</Flex>
		</Box>
	</div>
);

export default SectionPartner;
