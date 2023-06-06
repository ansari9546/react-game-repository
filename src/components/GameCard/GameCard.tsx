import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "../../hooks/useGames";

interface Props {
    game: Games
}

export default function GamesCard({ game }: Props) {
    return(
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
            </CardBody>
        </Card>
    )

}