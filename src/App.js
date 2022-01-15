
import { ChakraProvider } from '@chakra-ui/react'
import { CountInput } from './CountInput';
import {Create} from './Create'; 
function App() {
  return (
    <ChakraProvider>
      {/* <CountInput />
       */}
      <Create/>
    </ChakraProvider>
  );
}

export default App;
