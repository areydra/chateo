import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    innerContainerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageMenu: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 6,
    },
    imageForward: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default styles;
