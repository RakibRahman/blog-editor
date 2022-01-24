
import { ChakraProvider } from '@chakra-ui/react'
import { CountInput } from './CountInput';
import { Create } from './Create';
import { CodeEditor } from './CodeEditor';
import { SimpleCodeEditor } from './SimpleCodeEditor';
import { DragList } from './DragList';

function App() {
  return (
    <ChakraProvider>
      {/* <CountInput />
       */}
      {/* <Create/> */}
      {/* <CodeEditor />
      <SimpleCodeEditor /> */}
      <DragList />
    </ChakraProvider>
  );
}

export default App;
