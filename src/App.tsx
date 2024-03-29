import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar/Navbar'
import GamesGrid from './components/GamesGrid/GamesGrid'
import GenresList from './components/GenresList/GenresList'
import { useState } from 'react';
import { Genere } from './hooks/useGeneres';
import PlatFormSelector from './components/PlatFormSelector/PlatFormSelector';
import { PlatForm } from './hooks/useGames';
import SortSelector from './components/PlatFormSelector/SortSelector';
import GameHeading from './components/PlatFormSelector/GameHeading';

export interface GameQuery {
  genere: Genere | null;
  platform: PlatForm| null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
      <GridItem area={"nav"} >
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX={5}><GenresList onSelectedGenre={(genere) => setGameQuery({...gameQuery, genere})} selectedgenre={gameQuery.genere}></GenresList></GridItem>

      </Show>
      <GridItem area={"main"} >
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5} >
            <Box marginRight={5}>
              <PlatFormSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}></PlatFormSelector>
            </Box>
              <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} selectedSortOrder={gameQuery.sortOrder} />
          </Flex>
        </Box>
        <GamesGrid gameQuery={gameQuery} ></GamesGrid>
      </GridItem>
    </Grid>
  )
}

export default App
