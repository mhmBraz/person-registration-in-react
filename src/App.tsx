import { AddPerson } from "./AddPerson";
import Home from "./Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { TPerson } from "./Context";

export type TApp = {
  people    : TPerson[];
  setPeople : React.Dispatch<React.SetStateAction<TPerson[]>>
}

export function App({
  people,
  setPeople
} : TApp) {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home people={people}/>}
        />
        <Route 
          path="addperson" 
          element={<AddPerson people={people} setPeople={setPeople} />}
        />
      </Routes>
    </BrowserRouter>
  );
}