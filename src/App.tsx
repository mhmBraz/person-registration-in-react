import React,{ useState } from 'react';
import { AddPerson } from "./AddPerson";
import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

type TPerson = {
  id        : number;
  lastName  : string;
  firstName : string;
  age       : string;
  email     : string;
};

export function App() {
  const [people, setPeople] = useState<TPerson[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home people={people} setPeople={setPeople}/>}
        />
        <Route 
          path="addperson" 
          element={<AddPerson people={people} setPeople={setPeople} />}
        />
      </Routes>
    </BrowserRouter>
  );
}