import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../../hooks/useGames";
import PlatFormIconList from "./PlatformIconList";

interface Props {
    game: Games
}

export default function GamesCard({ game }: Props) {
    return(
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatFormIconList>
            </CardBody>
        </Card>
    )

}