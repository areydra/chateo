import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const ProfileScene = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../../../assets/images/icons/defaultAvatar.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.field}
                    placeholder='First Name (Required)'
                />
                <TextInput
                    style={styles.field}
                    placeholder='Last Name (Optional)'
                />
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
            >
                <Text style={styles.textButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ProfileScene;
