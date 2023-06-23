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
        <Card >
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <HStack justifyContent='space-between' marginBlock={3}>
                    <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatFormIconList>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
            </CardBody>
        </Card>
    )

}