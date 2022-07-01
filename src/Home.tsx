import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import {AddButton} from './AddButton'
import {Logo} from './Logo'
import {Row} from './Rows'
export function Home(props : any) {

  return (
    <Container maxWidth="md">
      <Card variant="outlined" sx={{ p: 1, m: 1, boxShadow: 5, maxHeight: 600}}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <Logo logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRag-8SqVR2mtWVc4RqyWgIoyVjkNTta6dFAg&usqp=CAU"}/>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1}}>
          <AddButton to={'addperson'} name={'Adicionar'} />
        </Box>

        <Box sx={{ display: 'grid', boxShadow: 5, gridTemplateRows: 'repeat(3, 1fr)'}}>
          <Row rows={props.people ? props.people : []}/> 
        </Box>
      </Card>
    </Container>
  );
}

export default Home;
