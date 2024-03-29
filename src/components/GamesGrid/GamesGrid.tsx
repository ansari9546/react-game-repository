    import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GamesCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";
import GameCardContainer from "../GameCard/GameCardContainer";
import { GameQuery } from "../../App";

interface Props {
    gameQuery: GameQuery
}

export default function GamesGrid({ gameQuery }: Props){
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6,7,8];
    return(
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{
            sm:1,
            md:2,
            lg:3,
            xl:4
        }} spacing={6} padding={"10px"}>
            {isLoading && skeletons.map((skeleton) => <GameCardContainer  key={skeleton}>
                    <GameCardSkeleton></GameCardSkeleton>
                </GameCardContainer>) }
            {data.map(game =>  <GameCardContainer key={game.id}>
                    <GamesCard  game={game}></GamesCard>
                </GameCardContainer>)}
        </SimpleGrid>
        </>
    );
}