import React from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

type TPerson = {
  id        : number;
  lastName  : string;
  firstName : string;
  age       : number;
  email     : string;
};

type TButtonProps = {
  to : string;
  name     : string;
  setPeople?: React.Dispatch<React.SetStateAction<TPerson[]>>;
  state?   : TPerson[];
}

export function AddButton({
  to,
  name,
} : TButtonProps) {

  return (
    <Link to={to}>
      <Button variant="contained">
        {name}
      </Button>
    </Link>
  );
}