
import { ChakraProvider } from '@chakra-ui/react'
import { CountInput } from './CountInput';
import { Create } from './Create';
import { CodeEditor } from './CodeEditor';
import { SimpleCodeEditor } from './SimpleCodeEditor';
import { DragList } from './DragList';
import { CarouselDemo } from './CarouselDemo';
import { Index } from './ReduxDemo/Index';
import FileExplorer from './FileExplorer';
import FileExplorerV2 from './FileExplorerV2';

import Timeline from './Timeline';
import Chart from './Hierarchy/Tree';
import TreeComponent from './Hierarchy/TreeComponent';
import TreeList from './FileExplorerV3';
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
const catTree = [
  {
    "id": "62185bcc0baa6628bad1b19b",
    "name": "Foods",
    "child": [
      {
        "id": "62185ddf0baa6628bad1b19c",
        "name": "Fish",
        "parentId": "62185bcc0baa6628bad1b19b",
        "child": [
          {
            "id": "62185df60baa6628bad1b19d",
            "name": "Sea Fish",
            "parentId": "62185ddf0baa6628bad1b19c",
            "child": []
          },
          {
            "id": "62185e020baa6628bad1b19e",
            "name": "River Fish",
            "parentId": "62185ddf0baa6628bad1b19c",
            "child": []
          }
        ]
      }
    ]
  },
  {
    "id": "62185e300baa6628bad1b19f",
    "name": "Clothes",
    "child": [
      {
        "id": "62185e3c0baa6628bad1b1a0",
        "name": "Kids",
        "parentId": "62185e300baa6628bad1b19f",
        "child": []
      },
      {
        "id": "62185e430baa6628bad1b1a1",
        "name": "Man",
        "parentId": "62185e300baa6628bad1b19f",
        "child": []
      },
      {
        "id": "6229d646ab1b5354541adf2a",
        "name": "werty",
        "parentId": "62185e300baa6628bad1b19f",
        "child": []
      }
    ]
  },
  {
    "id": "62185e640baa6628bad1b1a3",
    "name": "Shoes",
    "child": [
      {
        "id": "62185e6d0baa6628bad1b1a4",
        "name": "Sports",
        "parentId": "62185e640baa6628bad1b1a3",
        "child": [
          {
            "id": "62185e870baa6628bad1b1a5",
            "name": "Premium",
            "parentId": "62185e6d0baa6628bad1b1a4",
            "child": []
          }
        ]
      }
    ]
  },
  {
    "id": "6218651ce784c10d2835bcae",
    "name": "Gadgets",
    "child": []
  }
];
function App() {
  return (
    <ChakraProvider>
      {/* <Timeline /> */}
      {/* <Chart /> */}
      {/* <TreeComponent /> */}
      {/* <FileExplorer data={data} /> */}
      <FileExplorerV2 data={catTree} />
      <TreeList data={catTree} />
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
