import React from 'react';
import { View, Text } from 'react-native';

import { Container, InfoContainer, Content, Bold, Title, HelloUser, Button, ButtonText } from './styles';

const Dashboard = ({ navigation, route }) => {
  return (
      <Container>

          <HelloUser>Olá, {route.params?.nome}.</HelloUser>

          <Title>Suas informações</Title>
          <Content>
            <InfoContainer><Bold>Nome:</Bold> {route.params?.nome} {route.params?.sobrenome}</InfoContainer>
            <InfoContainer><Bold>Email:</Bold> {route.params?.email}</InfoContainer>
            <InfoContainer><Bold>Senha:</Bold> {route.params?.senha}</InfoContainer>
            <InfoContainer><Bold>Profissão:</Bold> {route.params?.profissao}</InfoContainer>
            <InfoContainer><Bold>Telefone:</Bold> {route.params?.telefone}</InfoContainer>
            <InfoContainer><Bold>Endereço:</Bold> {route.params?.endereco}</InfoContainer>
          </Content>

          <Button onPress={() => navigation.navigate('Home')}>
            <ButtonText className="Test">Sair</ButtonText>
          </Button>
      </Container>
  );
}

export default Dashboard;