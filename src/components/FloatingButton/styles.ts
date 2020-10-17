import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled(RectButton)`
  width: 60px;
  height: 60px;
  background: #ff3981;
  position: absolute;
  bottom: 40px;
  right: 20px;
  border-radius: 30px;
  elevation: 5;
  justify-content: center;
  align-items: center;
`;

export const PlusIcon = styled(Icon).attrs({
  size: 28,
  name: 'plus',
  color: '#fff',
})``;
