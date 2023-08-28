import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsScreen} from './Screens/ProductsScreen';
import {TutorialsScreen} from './Screens/TutorialsScreen';

const Stack = createNativeStackNavigator();
//const Logo = require('./assets/PNGLogo.png');
function App (){
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={{title: 'Products'}}
            />
            <Stack.Screen
                name="Tutorials"
                component={TutorialsScreen}
                options={{title: 'Tutorials'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
)};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 58,
//   },
//   image: {
//     height: 160,
//     resizeMode: 'contain',
//   },
// });

export default App;
