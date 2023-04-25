import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const OnboardingScene = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../../../assets/images/illustrations/onboarding.png')}
                    style={styles.image}
                />
                <Text style={styles.textTitle}>
                    Connect easily with your family and friends over countries
                </Text>
            </View>

            <View style={styles.containerBottom}>
                <Text style={styles.textPrivacyPolicy}>Terms & Privacy Policy</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.containerButton}
                >
                    <Text style={styles.textButton}>
                        Start Messaging
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OnboardingScene;
