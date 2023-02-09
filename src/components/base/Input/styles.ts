import styled from 'styled-components';
import { Container as ContainerDiv } from '../Container/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.sizes.base} 0;
`;

export const InputContainer = styled.input`
  padding: ${({ theme }) => theme.sizes.xs};
  border-radius: 10px;
  border-width: 1px;
`;

export const LabelContainer = styled.label`
  background-color: ${({ theme }) => theme.colors.white[1]};
  padding: 0 ${({ theme }) => theme.sizes.xs};
  margin-left: ${({ theme }) => theme.sizes.base};
  position: absolute;
  top: 25%;
  transform: translate(0, -50%);
`;
