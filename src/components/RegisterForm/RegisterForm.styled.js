import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 320px;
  background: rgb(17, 112, 210);
  background: linear-gradient(
    90deg,
    rgba(17, 112, 210, 1) 0%,
    rgba(86, 239, 1, 1) 100%,
    rgba(9, 9, 121, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 15px;
  box-shadow: -11px 11px 37px 7px rgba(81, 42, 42, 0.47);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Title = styled.span`
  font-size: large;
  font-weight: 400;
  color: #434455;
`;

export const Button = styled.button`
  font-weight: bold;
  background-color: green;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: greenyellow;
    color: white;
  }
`;
