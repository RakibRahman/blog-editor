
import { ChakraProvider } from '@chakra-ui/react'
import { CountInput } from './CountInput';
import { Create } from './Create';
import { CodeEditor } from './CodeEditor';
import { SimpleCodeEditor } from './SimpleCodeEditor';
import { DragList } from './DragList';
import { CarouselDemo } from './CarouselDemo';
import { Index } from './ReduxDemo/Index';
import FileExplorer from './FileExplorer';
import Timeline from './Timeline';
const data = {
  name: 'This PC',
  isFolder: true,
  items: [
    {
      name: 'Pictures',
      isFolder: true,
      items: [
        {
          name: 'Personal',
          isFolder: false,
          items: null
        },
        {
          name: 'React',
          isFolder: false,
          items:
            [{
              isFolder: true,
              name: 'Hooks',
              items: [
                {
                  isFolder: false,
                  name: 'useEffect',
                  items: null
                }
              ]
            }]
        }]
    }
    , {
      name: 'Downloads',
      isFolder: true,
      items: [{
        name: 'Programs',
        isFolder: true,
        items: [{
          name: 'Windows',
          isFolder: false,
          items: null
        }]
      },
      {
        name: 'Videos',
        isFolder: false,
        items: null
      }]
    }]

}
function App() {
  return (
    <ChakraProvider>
      <Timeline />
      {/* <FileExplorer data={data} /> */}
      {/* <CountInput />
       */}
      {/* <Create/> */}
      {/* <CodeEditor />
      <SimpleCodeEditor /> */}
      {/* <DragList />
       */}
      {/* <CarouselDemo/> */}
      {/* <Index/> */}
    </ChakraProvider>
  );
}

export default App;
