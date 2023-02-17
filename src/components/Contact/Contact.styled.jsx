import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const Name = styled.span`
  font-weight: 700;
`;

export const Number = styled.span`
  font-size: 20px;
  /* color: ${props => props.color}; */
`;

export const DeleteBtn = styled.button`
  padding: 5px 10px;
  margin-left: auto;

  text-transform: uppercase;
  font-weight: 700;
  background-color: white;
  border-radius: 5px;

  cursor: pointer;
  transition: all 150ms ease;

  :hover,
  :focus {
    background-color: #ff2003;
    color: white;
  }
`;
