import React,{ useState } from 'react';
import { App } from './App';

type TPerson = {
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