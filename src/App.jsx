import { useState } from "react";
import Card from "./Card";
const App = () => {
  const [clickedCardId, setClickedCardId] = useState(null);
  
  const handleCardClick=(id) =>{
    console.log(id)
  }
  const chapters = [
  { id: 1, title: "React Fundamentals" },
  { id: 2, title: "React Hooks" },
  { id: 3, title: "Component Architecture" },
  { id: 4, title: "Styling in React" },
  { id: 5, title: "Routing with React Router" },
  { id: 6, title: "API Calls and Data Fetching" },
  { id: 7, title: "State Management Beyond useState" },
  { id: 8, title: "Performance Optimization in React" },
  { id: 9, title: "File and Folder Structure Best Practices" },
  { id: 10, title: "Type Checking in React" },
  { id: 11, title: "Testing React Apps" },
  { id: 12, title: "Tooling and Ecosystem" },
  { id: 13, title: "Responsive Design in React" },
  { id: 14, title: "Deployment of React Apps" },
  { id: 15, title: "Next Level: Beyond React (Next.js, Auth, Backend)" },
  { id: 16, title: "Bonus: Error Boundaries, Suspense, Accessibility, SEO" }
];

  return(
    <>
      <h1>React practice</h1>
      <h2>React chapters</h2>
   

      {chapters.map(chapter => {
        return(
          <Card 
          key={chapter.id} 
          id={chapter.id} 
          title={chapter.title}
          onClick={handleCardClick}
        />
        )
        
      })}
    </>
  );
}

export default App