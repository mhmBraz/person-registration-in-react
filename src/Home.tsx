import Box from '@mui/material/Box';
import {AddButton} from './AddButton'
import { Header } from './Header';
import {Logo} from './Logo'
import {Row} from './Rows'
import { TPerson } from "./Context";

type THome = {
  people : TPerson[]
}

export function Home({
  people
} : THome) {

  return (
    <Header>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <Logo logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRag-8SqVR2mtWVc4RqyWgIoyVjkNTta6dFAg&usqp=CAU"}/>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1}}>
        <AddButton to={'addperson'} name={'Adicionar'} />
      </Box>

      <Box sx={{ display: 'grid', boxShadow: 5, gridTemplateRows: 'repeat(3, 1fr)'}}>
        <Row rows={people ? people : []}/> 
      </Box>
    </Header>
  );
}

export default Home;
