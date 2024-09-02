import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import "./App.css";
import SearchBar from "./components/searchBar";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <SearchBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="green">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
