import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    containerHeader: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 46,
        marginBottom: 30,
    },
    field: {
        width: '100%',
        backgroundColor: '#F7F7FC',
        borderRadius: 4,
        marginBottom: 12,
        fontFamily: 'Mulish-SemiBold',
        fontSize: 14,
        color: '#0F1828',
        height: 36,
    },
    button: {
        marginBottom: 32,
        marginHorizontal: 24,
    },
});

export default styles;
