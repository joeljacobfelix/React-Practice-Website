import { useState } from "react";
import Card from "./Card";

import ReactFundamentals from "./components/ReactFundamentals"
import ReactHooks from "./components/ReactHooks"
import ComponentArchitecture from "./components/ComponentArchitecture"
import Styling from "./components/Styling"
import Routing from "./components/Routing"
import API_DataFetching from "./components/API_DataFetching"
import OtherStateManagement from "./components/OtherStateManagement"
import PerformanceOptimization from "./components/PerformanceOptimization"
import FileFolderStructure from "./components/FileFolderStructure"
import TypeChecking from "./components/TypeChecking"
import Testing from "./components/Testing"
import Tooling_Ecosystem from "./components/Tooling_Ecosystem"
import ResponsiveDesign from "./components/ResponsiveDesign"
import Deployment from "./components/Deployment"
import BeyondReact from "./components/BeyondReact"
import BonusMustKnows from "./components/BonusMustKnows"

const App = () => {
  const [clickedCardId, setClickedCardId] = useState(null);
  
  const handleCardClick=(id) =>{
    setClickedCardId(id)
    console.log(id)
  }


  const chapters = [
  { id: 1, title: "React Fundamentals", component: ReactFundamentals},
  { id: 2, title: "React Hooks",component:ReactHooks },
  { id: 3, title: "Component Architecture", component:ComponentArchitecture },
  { id: 4, title: "Styling in React", component: Styling },
  { id: 5, title: "Routing with React Router", component: Routing},
  { id: 6, title: "API Calls and Data Fetching", component: API_DataFetching },
  { id: 7, title: "State Management Beyond useState", component: OtherStateManagement},
  { id: 8, title: "Performance Optimization in React", component:  PerformanceOptimization},
  { id: 9, title: "File and Folder Structure Best Practices", component: FileFolderStructure },
  { id: 10, title: "Type Checking in React", component: TypeChecking },
  { id: 11, title: "Testing React Apps", component: Testing },
  { id: 12, title: "Tooling and Ecosystem", component: Tooling_Ecosystem },
  { id: 13, title: "Responsive Design in React", component: ResponsiveDesign},
  { id: 14, title: "Deployment of React Apps", component: Deployment},
  { id: 15, title: "Next Level: Beyond React (Next.js, Auth, Backend)", component: BeyondReact },
  { id: 16, title: "Bonus: Error Boundaries, Suspense, Accessibility, SEO", component: BonusMustKnows }
];

const components = {
  1: ReactFundamentals,
  2: ReactHooks ,
  3: ComponentArchitecture,
  4: Styling,
  5: Routing,
  6: API_DataFetching ,
  7:OtherStateManagement,
  8:  PerformanceOptimization,
  9: FileFolderStructure ,
  10: TypeChecking ,
  11: Testing ,
  12: Tooling_Ecosystem ,
  13: ResponsiveDesign,
  14: Deployment,
  15: BeyondReact ,
  16: BonusMustKnows 
};

let ClickedComponent = clickedCardId ? components[clickedCardId] : null


  return(
    <>
      <h1>React practice</h1>

      {clickedCardId ===null ? (<>
      <h2>React chapters</h2>

        {chapters.map(chapter => {
          return(
            <Card 
            key={chapter.id} 
            id={chapter.id} 
            title={chapter.title}
            onClick={handleCardClick}
            to={`/chapter/${chapter.id}`}
          />
          )
        })}
      </>) 
      : (<>
      
        {ClickedComponent && <ClickedComponent/>}
      </>)}
      
    </>
  );
}

export default App