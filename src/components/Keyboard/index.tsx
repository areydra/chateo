import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

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
                    <Text style={styles.textKeyboard}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('2')
                    }}
                >
                    <Text style={styles.textKeyboard}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('3')
                    }}
                >
                    <Text style={styles.textKeyboard}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLineKeyboard}>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('4')
                    }}
                >
                    <Text style={styles.textKeyboard}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('5')
                    }}
                >
                    <Text style={styles.textKeyboard}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('6')
                    }}
                >
                    <Text style={styles.textKeyboard}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLineKeyboard}>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('7')
                    }}
                >
                    <Text style={styles.textKeyboard}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('8')
                    }}
                >
                    <Text style={styles.textKeyboard}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('9')
                    }}
                >
                    <Text style={styles.textKeyboard}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLineKeyboard}>
                <TouchableOpacity style={styles.containerTextKeyboard}>
                    <Text style={styles.textKeyboard}></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerTextKeyboard}
                    onPress={() => {
                        onPress('0')
                    }}
                >
                    <Text style={styles.textKeyboard}>0</Text>
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