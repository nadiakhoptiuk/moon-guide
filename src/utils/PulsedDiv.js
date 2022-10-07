import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const pulsedAnimation = keyframes`${pulse}`;

export const PulsedDiv = styled.div`
  animation: 5s ${pulsedAnimation};
`;
