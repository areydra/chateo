import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Text from '../Text';

interface IKeyboard {
    onPress: (value: string) => void;
};

const Keyboard = ({ onPress } : IKeyboard) => {
    return (
        <View style={styles.containerKeyboard}>
            <View style={styles.containerLineKeyboard}>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('1')
                    }}
                >
                    <Text
                        text='1'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('2')
                    }}
                >
                    <Text
                        text='2'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('3')
                    }}
                >
                    <Text
                        text='3'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerLineKeyboard}>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('4')
                    }}
                >
                    <Text
                        text='4'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('5')
                    }}
                >
                    <Text
                        text='5'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('6')
                    }}
                >
                    <Text
                        text='6'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerLineKeyboard}>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('7')
                    }}
                >
                    <Text
                        text='7'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('8')
                    }}
                >
                    <Text
                        text='8'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('9')
                    }}
                >
                    <Text
                        text='9'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerLineKeyboard}>
                <TouchableOpacity style={styles.containerTextKeyboard}>
                    <Text
                        text=''
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('0')
                    }}
                >
                    <Text
                        text='0'
                        typography='heading_2'
                        style={styles.textKeyboard}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('del')
                    }}
                >
                    <Image
                        source={require('../../../assets/images/icons/delete.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Keyboard;