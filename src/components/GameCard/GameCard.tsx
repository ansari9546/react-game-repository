import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../../hooks/useGames";
import PlatFormIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
    game: Games
}

export default function GamesCard({ game }: Props) {
    return(
        <Card borderRadius={10} overflow='hidden' width={"300px"}>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatFormIconList>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </CardBody>
        </Card>
    )

}