import "./App.css";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import AccordionDolar from "./components/Accordion";
import Form from "./components/Form";

const NavBar = () => {
  return (
    <header className="flex justify-between">
      <div className="flex gap-4 items-center">
        <svg stroke="currentColor" fill="green" strokeWidth="0" viewBox="0 0 576 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm76-48c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z"></path></svg>
        <h2 className="text-2xl text-gray-900 dark:text-white">
          El dolar
        </h2>
      </div>
      <DarkThemeToggle />
    </header>
  )
}


function App() {
  return (
    <Flowbite>
      <NavBar />
      <Form />
      <AccordionDolar />
    </Flowbite>
  );
}

export default App;
