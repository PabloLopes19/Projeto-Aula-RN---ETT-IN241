import React, { useState } from 'react';

import { Container, InputArea, Input, InputLabel, ViewContainer, Button, ButtonText, ErrorMessageText } from './styles';

const Register = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [profissao, setProfissao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const [ValidacaoSenha, setValidacaoSenha] = useState('');

  const [ErrorMessage, setErrorMessage] = useState(false);

  function ValidateData() {
    if(ValidacaoSenha === senha){
      navigation.navigate('Dashboard', {
        nome,
        sobrenome,
        email,
        senha,
        profissao,
        telefone,
        endereco
      });

      setErrorMessage(false);
    }else{
      setErrorMessage(true);
    }
  }

  return (
    <ViewContainer>
      <Container>
          <InputArea>
            <InputLabel>Nome</InputLabel>
            <Input onChangeText={nome => setNome(nome)} placeholder="Digite o seu nome" />
          </InputArea>
          <InputArea>
            <InputLabel>Sobrenome</InputLabel>
            <Input onChangeText={sobrenome => setSobrenome(sobrenome)} placeholder="Digite o seu sobrenome" />
          </InputArea>
          <InputArea>
            <InputLabel>Email</InputLabel>
            <Input onChangeText={email => setEmail(email)} placeholder="Digite o seu email" />
          </InputArea>
          <InputArea>
            <InputLabel>Senha</InputLabel>
            <Input onChangeText={senha => setSenha(senha)} secureTextEntry={true} placeholder="Digite a sua senha" />
          </InputArea>
          <InputArea>
            <InputLabel>Confirmar senha</InputLabel>
            <Input onChangeText={ValidacaoSenha => setValidacaoSenha(ValidacaoSenha)} secureTextEntry={true} placeholder="Confirme sua senha" />
          </InputArea>
          <InputArea>
            <InputLabel>Profissão</InputLabel>
            <Input onChangeText={profissao => setProfissao(profissao)} placeholder="Ex: Programador" />
          </InputArea>
          <InputArea>
            <InputLabel>Telefone</InputLabel>
            <Input onChangeText={telefone => setTelefone(telefone)} keyboardType="numeric" placeholder="(00) 0 0000-0000" />
          </InputArea>
          <InputArea>
            <InputLabel>Endereço</InputLabel>
            <Input onChangeText={endereco => setEndereco(endereco)} placeholder="Rua e número" />
          </InputArea>

          <Button onPress={ValidateData}>
            <ButtonText>Feito</ButtonText>
          </Button>

          { ErrorMessage && <ErrorMessageText>A senhas precisam ser a mesma</ErrorMessageText> }
      </Container>
    </ViewContainer>
  );
}

export default Register;