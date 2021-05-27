import React from "react";
import Accordion from "./components/Accordion";
import Search from './components/Search'
import Dropdown from './components/Dropdown'
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
const options = [
  {
    color: "Bloody Red",
    value: "red",
  },
  {
    color: "grassy green",
    value: "green",
  },
  {
    color: "nivia Blue",
    value: "blue",
  }
]
const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Dropdown options={options}/>
    </div>
  );
};
export default App;
