import { register } from 'Redux/Auth/authOperations';
import { useDispatch } from 'react-redux';
import { Button, Form, Label, Title } from './RegisterForm.styled';
import { Container } from 'Pages/HomePage/HomePage.styled';
import { Input } from 'components/LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Title> Username</Title>
          <Input type="text" name="name" />
        </Label>
        <Label>
          <Title> Email</Title>
          <Input type="email" name="email" />
        </Label>
        <Label>
          <Title> Password</Title>
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};
