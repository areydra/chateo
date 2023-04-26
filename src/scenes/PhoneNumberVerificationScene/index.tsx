import React, { useRef } from 'react';
import { View } from 'react-native';
import Keyboard from '../../components/Keyboard';

import styles from './styles';
import FieldVerificationCode, { IRefFieldVerificationCode } from './components/FieldVerificationCode';
import Text from '../../components/Text';
import { useUsertore } from '../../stores/useUserStore';

const PhoneNumberVerificationScene = () => {
    const phoneNumber = useUsertore(state => state.user.phoneNumber);

    const refFieldVerificationCode = useRef<IRefFieldVerificationCode>();

    const onPressKeyboard = (value: string) => {
        refFieldVerificationCode.current?.setValue(value);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text
                    text='Enter Code'
                    typography='heading_2'
                    style={styles.title}
                />
                <Text
                    text={`We have sent you an SMS with the code ${"\n"} to ${phoneNumber}`}
                    typography='body_text_2'
                    style={styles.description}
                />
                <FieldVerificationCode ref={refFieldVerificationCode}/>
            </View>
            <View>
                <Text
                    text='Resend Code'
                    typography='subheading_2'
                    style={styles.textResendCode}
                />
                <Keyboard onPress={onPressKeyboard}/>
            </View>
        </View>
    );
};

export default PhoneNumberVerificationScene;
