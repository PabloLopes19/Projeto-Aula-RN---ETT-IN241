import styled from 'styled-components/native';

export const ViewContainer = styled.ScrollView`
    flex: 1;
    height: 100%;
`;
export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%; min-height: 100%;

    padding: 40px 0;
`;

export const InputArea = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-bottom: 10px;
`;
export const InputLabel = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);

    width: 90%;
    margin-bottom: 5px;
`;
export const Input = styled.TextInput`
    width: 90%; height: 65px;
    padding: 0 23px;
    /* border: 3px solid transparent; */
    border-radius: 6px;
    font-weight: bold;

    background: #F5F4F7;
    color: rgba(0, 0, 0, 0.6);
`;

export const Button = styled.TouchableOpacity`
    width: 95%; height: 53px;
    background: #0085FF;    
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 30px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const ErrorMessageText = styled.Text`
    color: red;
    margin-top: 10px;
`;