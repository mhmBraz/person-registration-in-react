import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

type TApplicationContextProviderProps = {
  children: React.ReactNode;
};

export function Header({
  children
} : TApplicationContextProviderProps) {
  return(
    <Container>
      <Card variant="outlined" sx={{ p: 1, m: 1, boxShadow: 5, maxHeight: 600}}>
        {children}
      </Card>
    </Container>
  );
}