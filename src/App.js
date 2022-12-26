import './App.css';
import {ThemeProvider} from '@primer/react'
import {BaseStyles, Box, Heading} from '@primer/react'


const theme = {
  colors: {
    canvas: {
      default: '#fff'
    }
  }
}

function App() {
  return (
    <BaseStyles>
    <Box m={4}>
      <Heading sx={{mb: 2}}>Hello, world!</Heading>
    </Box>
  </BaseStyles>
  );
}

export default App;
