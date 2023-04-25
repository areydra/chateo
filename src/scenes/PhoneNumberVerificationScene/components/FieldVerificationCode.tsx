import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';
import { StackActions, useNavigation } from '@react-navigation/native';

export interface IRefFieldVerificationCode {
    setValue: (value: string) => void;
};

const FieldVerificationCode = forwardRef(({}, ref) => {
    const navigation = useNavigation();

    const [verificationCode, setVerificationCode] = useState('');

    useImperativeHandle(ref, () => ({
        setValue: (value: string) => {
            setVerificationCode(prevVerificationCode => {
                if (value === 'del') {
                    return prevVerificationCode?.slice(0, -1);
                }

                if (prevVerificationCode.length === 4) {
                    return prevVerificationCode;
                }
                
                if (!prevVerificationCode) {
                    return value;
                }
    
                return prevVerificationCode + value;
            });    
        }
    }));

    useEffect(function handleVerificationCode() {
        if (verificationCode.length < 4) {
            return;
        }

        navigation.dispatch(StackActions.push('Profile'));
    }, [verificationCode]);
    
    return (
        <View style={styles.containerCode}>
            <View style={styles.containerTextCodeCircle}>
                {verificationCode[0] ? (
                    <Text style={styles.textCode}>{verificationCode[0]}</Text>
                ) : (
                    <View style={styles.circle}/>
                )}
            </View>
            <View style={styles.space}/>
            <View style={styles.containerTextCodeCircle}>
                {verificationCode[1] ? (
                    <Text style={styles.textCode}>{verificationCode[1]}</Text>

                ) : (
                    <View style={styles.circle}/>
                )}
            </View>
            <View style={styles.space}/>
            <View style={styles.containerTextCodeCircle}>
                {verificationCode[2] ? (
                    <Text style={styles.textCode}>{verificationCode[2]}</Text>

                ) : (
                    <View style={styles.circle}/>
                )}
            </View>
            <View style={styles.space}/>
            <View style={styles.containerTextCodeCircle}>
                {verificationCode[3] ? (
                    <Text style={styles.textCode}>{verificationCode[3]}</Text>

                ) : (
                    <View style={styles.circle}/>
                )}
            </View>
        </View>
    );
});

export default FieldVerificationCode;
