    import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GamesCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";
import GameCardContainer from "../GameCard/GameCardContainer";

export default function GamesGrid(){
    const { data, error, isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6,7,8];
    return(
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{
            sm:1,
            md:2,
            lg:3,
            xl:4
        }} spacing={3} padding={"10px"}>
            {isLoading && skeletons.map((skeleton) => <GameCardContainer>
                    <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                </GameCardContainer>) }
            {data.map(game =>  <GameCardContainer>
                    <GamesCard key={game.id} game={game}></GamesCard>
                </GameCardContainer>)}
        </SimpleGrid>
        </>
    );
}