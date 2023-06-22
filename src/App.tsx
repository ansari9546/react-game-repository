import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar/Navbar'
import GamesGrid from './components/GamesGrid/GamesGrid'
import GenresList from './components/GenresList/GenresList'
import { useState } from 'react';
import { Genere } from './hooks/useGeneres';
import PlatFormSelector from './components/PlatFormSelector/PlatFormSelector';
import { PlatForm } from './hooks/useGames';

export interface GameQuery {
  genere: Genere | null;
  platform: PlatForm| null;
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
        <NavBar></NavBar>
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX={5}><GenresList onSelectedGenre={(genere) => setGameQuery({...gameQuery, genere})} selectedgenre={gameQuery.genere}></GenresList></GridItem>

      </Show>
      <GridItem area={"main"} >
        <PlatFormSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}></PlatFormSelector>
        <GamesGrid gameQuery={gameQuery} ></GamesGrid>
      </GridItem>
    </Grid>
  )
}

export default App
