import React, { useEffect, useRef, useState } from 'react';
import {} from 'react-native';
import Text from '../../../components/Text';
import styles from '../styles';

const DEFAULT_COUNTDOWN_IN_SECOND = 60;

const CountdownResend = () => {
    let refIntervalCountdown = useRef<number>();

    const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWN_IN_SECOND);
    const [isCountdownFinished, setIsCountdownFinished] = useState(false);

    useEffect(() => {
        refIntervalCountdown.current = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown-1);
        }, 1000);
    }, []);

    useEffect(() => {
        if (countdown > 0 || !refIntervalCountdown.current) {
            return;
        }

        clearInterval(refIntervalCountdown.current as number);
        refIntervalCountdown.current = undefined;

        setIsCountdownFinished(true);
        setCountdown(DEFAULT_COUNTDOWN_IN_SECOND);
    }, [countdown]);

    const startCountdown = () => {
        if (isCountdownFinished) {
            setIsCountdownFinished(false);
        }

        refIntervalCountdown.current = setInterval(() => {
            setCountdown(prevCountdown => {
                return prevCountdown-1;
            });
        }, 1000);
    };

    return isCountdownFinished ? (
        <Text
            text='Resend Code'
            typography='subheading_2'
            style={styles.textResendCode}
            onPress={startCountdown}
        />
    ) : (
        <Text
            text={countdown.toString()}
            typography='subheading_2'
            style={styles.textCountdown}
        />
    )
};

export default CountdownResend;
