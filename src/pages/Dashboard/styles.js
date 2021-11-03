import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; height: 100%;
`;

export const Content = styled.View`
    width: 70%; 
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    width: 70%;
`;

export const InfoContainer = styled.Text`
    width: 100%; height: 40px;
    padding: 10px;

    font-size: 15px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.4);

    /* background: #000; */
`;

export const Bold = styled.Text`
    font-weight: bold;
    color: #000;
`;

export const HelloUser = styled.Text`
    font-size: 30px;
    color: rgba(0, 0, 0, 0.6);
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin: 50px 0;
`;

export const Button = styled.TouchableOpacity`
    width: 95%; height: 53px;
    background: red;    
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;