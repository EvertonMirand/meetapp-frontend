import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import Colors from '~/theme/Colors';

export const Spinner = styled(Loader).attrs({
  type: 'Oval',
  color: Colors.defaultText,
  height: 25,
  width: 25,
})`
  display: flex;
  justify-items: center;
  justify-content: center;
  margin: 0 40px;
`;
