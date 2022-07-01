import React, {useState}  from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import {Logo} from './Logo'
import { AddButton } from "./AddButton";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

export function AddPerson(props : any) {
  const [firtName, setFirstName] = useState('');
  const [lastName, setLastName]  = useState('');
  const [age, setAge]            = useState('');
  const [email, setEmail]        = useState('');

  function addRow() {   

    if(firtName === '' || lastName === '' || age === '' || email === '') {
      alert('Por favor, preencher todos os campos')
      return;
    }
    console.log('aqui');
    
    let data  = [...props.people];
    let count = data.length + 1
    
    data.push({ id: count,lastName: lastName, firstName: firtName, age: age,  email : email });
                
    props.setPeople(data);      
  }

  function saveChange(value : any, set : React.Dispatch<React.SetStateAction<string>>) {
    set(value);
  }

  return (
    <Container maxWidth="md">
      <Card variant="outlined" sx={{ p: 1, m: 1, boxShadow: 5, maxHeight: 600}}>
        <Box sx={{ mb: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <Logo logo={"./download.png"}/>
        </Box>

        <Box>
         <AddButton to={'/'} name={'Voltar'} />
        </Box>

        <Card variant="outlined" sx={{boxShadow: 5, mt: 2, p:1}}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 6">
                <TextField name="firstName" 
                  onChange={event => saveChange(event.target.value, setFirstName)}
                  label="Primeiro nome" variant="outlined" />
            </Box>

            <Box gridColumn="span 6">
              <TextField name="LastName" 
                onChange={event => saveChange(event.target.value, setLastName)}
                label="Segundo nome" variant="outlined" />
            </Box>

            <Box gridColumn="span 4">
                <TextField name="age" 
                  onChange={event => saveChange(event.target.value, setAge)}
                  label="Idade" variant="outlined" />
            </Box>

            <Box gridColumn="span 8">
              <TextField name="email" 
                onChange={event => saveChange(event.target.value, setEmail)}
                label="E-mail" variant="outlined" />
            </Box>
          </Box>

          <Link to={'/'}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt:2 }}>
              <Button variant="contained"
                onClick={() => addRow()}>Salvar</Button>
            </Box>
          </Link>
        </Card>
      </Card>
    </Container>
  );
};