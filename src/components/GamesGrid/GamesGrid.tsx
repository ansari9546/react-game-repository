    import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GamesCard from "../GameCard/Gamecard";

export default function GamesGrid(){
    const { games, error } = useGames();

    return(
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{
            sm:1,
            md:2,
            lg:3,
            xl:4
        }} spacing={10} padding={"10px"}>
            {games.map(game =>  <GamesCard key={game.id} game={game}></GamesCard>)}
        </SimpleGrid>
        </>
    );
}