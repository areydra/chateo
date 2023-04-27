import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral.white,
        paddingHorizontal: 24,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    imagePlus: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    search: {
        marginTop: 30,
    },
    separator: {
        backgroundColor: colors.neutral.line,
        height: 1,
        marginTop: 12,
        marginBottom: 16,
    },
    footer: {
        backgroundColor: colors.neutral.line,
        height: 1,
        marginTop: 12,
    },
    contactList: {
        marginTop: 16,
    },
});

export default styles;
