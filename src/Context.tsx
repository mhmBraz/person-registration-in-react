import { useState } from 'react';
import { App } from './App';

export type TPerson = {
  id        : number;
  lastName  : string;
  firstName : string;
  age       : string;
  email     : string;
};

export function ApplicationContextProvider() {
  const [people, setPeople] = useState<TPerson[]>([]);
  return(
    <App 
    people={people}
    setPeople={setPeople}/>
  );
}