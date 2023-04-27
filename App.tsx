import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import colors from './src/themes/colors';
import NavigationContainer from './src/routes/components/NavigationContainer';

function App() {
    useEffect(function setDefaultStatusBar() {
        StatusBar.setBackgroundColor(colors.neutral.white);
        StatusBar.setBarStyle('dark-content');
    }, []);

    return <NavigationContainer/>;
}

export default App;
