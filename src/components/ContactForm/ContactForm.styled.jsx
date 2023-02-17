import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;

  font-size: 20px;
  font-weight: 500;

  border: 3px solid rgb(0, 4, 255);
`;

export const Label = styled.label`
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 5px 10px;
    transition: all 250ms ease-in-out;

    border-color: #d0cfcffb;
    outline: none;

    &:focus {
      box-shadow: 0 0 3px #4640ff;
      border-color: #40e2ff;
    }
  }
`;

export const AddBtn = styled.button`
  padding: 10px 20px;
  width: 150px;
  margin: 0 auto;

  text-transform: uppercase;
  font-weight: 700;
  background-color: white;
  border-radius: 20px;

  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #01d464;
    color: white;
  }
`;
