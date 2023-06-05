import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp"

export default function NavBar(props){
    return (
        <HStack>
            <Image src={logo} boxSize={"60px"}></Image>
        </HStack>
    );
}