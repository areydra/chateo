import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.neutral.white,
    },
    title: {
        textAlign: 'center',
        color: colors.neutral.active,
        marginTop: 80,
    },
    description: {
        textAlign: 'center',
        color: colors.neutral.active,
        marginTop: 8,
    },
    textResendCode: {
        color: colors.brand.default,
        textAlign: 'center',
        marginBottom: 44,
    },
    containerCode: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 48,
        height: 40,
    },
    containerTextCodeCircle: {
        width: 32,
        alignItems: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 24,
        backgroundColor: colors.neutral.line,
    },
    textCode: {
        color: colors.neutral.active,
    },
    space: {
        height: 1,
        width: 40,
        backgroundColor: 'transparent',
    }
});

export default styles;