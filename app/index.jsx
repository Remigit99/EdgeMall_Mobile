import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './navigation/BottomTabs';




const Stack = createNativeStackNavigator()

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    JostBlack: require('../assets/fonts/Jost-Black.ttf'),
    JostBold: require('../assets/fonts/Jost-Bold.ttf'),
    JostSemiBold: require('../assets/fonts/Jost-SemiBold.ttf'),
    JostMedium: require('../assets/fonts/Jost-Medium.ttf'),
    JostRegular: require('../assets/fonts/Jost-Regular.ttf'),
    JostThin: require('../assets/fonts/Jost-Thin.ttf'),
    MontserratBlack: require('../assets/fonts/Montserrat-Black.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    MontserratThin: require('../assets/fonts/Montserrat-Thin.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

    <Stack.Navigator screenOptions={
      {headerShown:false}
    }>
      <Stack.Screen name='BottomTabs' component={BottomTabs} />
    </Stack.Navigator>

  );
}
