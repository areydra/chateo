import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    containerHeader: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
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
        width: '100%',
        backgroundColor: '#002DE3',
        paddingVertical: 12,
        borderRadius: 30,
        marginBottom: 32,
        marginHorizontal: 24,
    },
    textButton: {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 16,
        lineHeight: 28,
        color: '#F7F7FC',
        textAlign: 'center',
    },
});

export default styles;
