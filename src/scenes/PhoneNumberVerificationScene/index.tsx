import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import Keyboard from '../../components/Keyboard';

import styles from './styles';
import FieldVerificationCode, { IRefFieldVerificationCode } from './components/FieldVerificationCode';

interface IPhoneNumberVerificationScene {
    phoneNumber: string;
};

const PhoneNumberVerificationScene = ({ phoneNumber='+62 838-0710-6451' }: IPhoneNumberVerificationScene) => {
    const refFieldVerificationCode = useRef<IRefFieldVerificationCode>();

    const onPressKeyboard = (value: string) => {
        refFieldVerificationCode.current?.setValue(value);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Enter Code</Text>
                <Text style={styles.description}>
                    <Text>We have sent you an SMS with the code</Text>
                    {"\n"}
                    <Text> to {phoneNumber}</Text>
                </Text>
                <FieldVerificationCode ref={refFieldVerificationCode}/>
            </View>
            <View>
                <Text style={styles.textResendCode}>Resend Code</Text>
                <Keyboard onPress={onPressKeyboard}/>
            </View>
        </View>
    );
};

export default PhoneNumberVerificationScene;
