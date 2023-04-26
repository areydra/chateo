import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

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
            <Button
                onPress={() => {}}
                text='Save'
                style={styles.button}
            />
        </View>
    );
};

export default ProfileScene;
