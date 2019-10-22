import styled from 'styled-components';
import Colors from '~/theme/Colors';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  overflow: auto;
  background: linear-gradient(
    180deg,
    ${Colors.backgroundPrimary},
    ${Colors.backgroundSecundary}
  );
`;
