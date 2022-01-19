
import { ChakraProvider } from '@chakra-ui/react'
import { CountInput } from './CountInput';
import { Create } from './Create'; 
import { CodeEditor } from './CodeEditor'; 

function App() {
  return (
    <ChakraProvider>
      {/* <CountInput />
       */}
      {/* <Create/> */}
      <CodeEditor />
    </ChakraProvider>
  );
}

export default App;
