import { StyleSheet } from 'react-native';
import colors from '../../../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.neutral.line,
    },
    textTime: {
        marginHorizontal: 16,
    },
});

export default styles;