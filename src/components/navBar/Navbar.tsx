import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp"
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import Searchbar from "../SearchBar/Searchbar";

interface Props {
    onSearch: (searchText: string) => void;
}

export default function NavBar({ onSearch}: Props){
    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Image src={logo} boxSize={"60px"}></Image>
            <Searchbar onSearch={onSearch}/>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
}