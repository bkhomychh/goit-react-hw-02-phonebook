import styled from 'styled-components';

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  max-width: 50%;

  font-size: ${({ theme }) => theme.fontSize.textSecondary};
`;
