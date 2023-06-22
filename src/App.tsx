import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar/Navbar'
import GamesGrid from './components/GamesGrid/GamesGrid'
import GenresList from './components/GenresList/GenresList'
import { useState } from 'react';
import { Genere } from './hooks/useGeneres';

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genere| null>(null);

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
        <GridItem area={"aside"} paddingX={5}><GenresList onSelectedGenre={(genere) => setSelectedGenre(genere)} selectedgenre={selectedGenre}></GenresList></GridItem>

      </Show>
      <GridItem area={"main"} >
        <GamesGrid selectedGenre={selectedGenre}></GamesGrid>
      </GridItem>
    </Grid>
  )
}

export default App
