import { useDispatch } from 'react-redux';
import { Button, Form, Input, Label, Title } from './LoginForm.styled';
import { logIn } from 'Redux/Auth/authOperations';
import { Container } from 'Pages/HomePage/HomePage.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;

    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Title>Email</Title>
          <Input type="email" name="email" />
        </Label>
        <Label>
          <Title>Password</Title>
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
};
