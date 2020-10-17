import React from 'react';
import {Text} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <FloatingButton>
        <Text>+</Text>
      </FloatingButton>
    </Container>
  );
};

export default Home;
