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
    menuListUser: {
        marginTop: 32,
    },
    menuListAppSetting: {
        marginTop: 40,
    },
    separatorMenuList: {
        height: 24,
    },
    separator: {
        height: 1,
        backgroundColor: colors.neutral.line,
        marginVertical: 16,
    },
});

export default styles;
