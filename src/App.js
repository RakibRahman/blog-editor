
import { ChakraProvider } from '@chakra-ui/react'
import { CountInput } from './CountInput';
import { Create } from './Create';
import { CodeEditor } from './CodeEditor';
import { SimpleCodeEditor } from './SimpleCodeEditor';
import { DragList } from './DragList';
import { CarouselDemo } from './CarouselDemo';
import {Index } from './ReduxDemo/Index';
function App() {
  return (
    <ChakraProvider>
      {/* <CountInput />
       */}
      {/* <Create/> */}
      {/* <CodeEditor />
      <SimpleCodeEditor /> */}
      {/* <DragList />
       */}
      {/* <CarouselDemo/> */}
      <Index/>
    </ChakraProvider>
  );
}

export default App;
