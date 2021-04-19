import { Input, InputGroup, InputRightElement, Button, handleClick, Checkbox, Text } from "@chakra-ui/react"

const ContainerApi = () => {
    return (
    <>
        <Checkbox mb="22px">
            <Text>I accept all <b>terms and conditions</b></Text>
        </Checkbox>
        <InputGroup w="400px">
        <Input
            w="228px"
            h="55px"
            type="text"
            placeholder="Votre adresse email"
            outline="none"
        />
      
        <Button 
            w="170px"
            h="55px"  
            onClick={handleClick}
            bg="white"
            color="#3656BF"
            >
         Subscribe
        </Button>
      
    </InputGroup>
    </>
    )
}

export default ContainerApi
