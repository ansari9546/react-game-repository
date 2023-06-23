import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp"
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import Searchbar from "../SearchBar/Searchbar";

export default function NavBar(props){
    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Image src={logo} boxSize={"60px"}></Image>
            <Searchbar />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
}