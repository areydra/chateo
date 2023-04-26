import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral.white,
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
        borderRadius: 4,
        marginBottom: 12,
        height: 36,
    },
    button: {
        marginBottom: 32,
        marginHorizontal: 24,
    },
});

export default styles;
