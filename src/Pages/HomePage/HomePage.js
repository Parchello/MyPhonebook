import { Typography } from '@mui/material';
import { Container } from './HomePage.styled';

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h1" component="h2">
        Phone Book
      </Typography>
      <p>Here you can save your contacts</p>
    </Container>
  );
}
