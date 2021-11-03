import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* background: #000; */
`;

export const Logo = styled.Text`
    font-size: 30px;
    font-weight: bold;

    margin-bottom: 20px;
`;
export const LogoBlue = styled.Text`
    color: #0085FF;
`;

export const Button = styled.TouchableOpacity`
    width: 95%; height: 53px;
    background: #0085FF;    
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;