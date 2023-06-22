import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar/Navbar'
import GamesGrid from './components/GamesGrid/GamesGrid'
import GenresList from './components/GenresList/GenresList'

function App() {

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
        <GridItem area={"aside"} paddingX={5}><GenresList></GenresList></GridItem>

      </Show>
      <GridItem area={"main"} >
        <GamesGrid></GamesGrid>
      </GridItem>
    </Grid>
  )
}

export default App
