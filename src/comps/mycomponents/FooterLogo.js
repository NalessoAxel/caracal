import { Image } from '@chakra-ui/react';
import Col from '_comps/Layout/Col';

const FooterLogo = () => {
    return (
        <Col colStart={4}>
            <Image src="/Oval.svg" alt="logo footer" />
        </Col>
    )
}

export default FooterLogo
