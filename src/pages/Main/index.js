import React from 'react';
// import { View, Text } from 'react-native';

import { Container, Logo, Button, ButtonText, LogoBlue } from './styles';

const Main = ({ navigation }) => {
  return (
    <Container>
      <Logo>AppDo<LogoBlue>Plopes</LogoBlue></Logo>

      <Button onPress={() => navigation.navigate('Cadastro')}>
        <ButtonText background="#0085FF" className="Test">Cadastrar</ButtonText>
      </Button>

    </Container>
  );
}

export default Main;