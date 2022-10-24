import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'
import Category from '../screens/Category' 
import CategoryMeal from '../screens/CategoryMeal'
import MealDetail from '../screens/MealDetail'
import {store} from '../store/redux/store';
import Favorite from '../screens/Favorite';
import { Provider } from 'react-redux';

const Stack  = createNativeStackNavigator() 

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator initialRouteName="HomeDraw"  screenOptions={{
            headerStyle:{backgroundColor:'#351401'},
            headerTintColor:'white',
            sceneContainerStyle:{backgroundColor:'#3f2f25'},
            drawerContentStyle:{backgroundColor:'#3f2f25'},
            drawerInactiveTintColor:'white',
            drawerActiveTintColor:'#351401',
            drawerActiveBackgroundColor:'#e4baa1'
        }}>
            <Drawer.Screen name="Categories" component={Category}  options={{
                title:'All Category',
                drawerIcon:({color,size}) => <Ionicons name='list' color={color} size={size} />
            }} />
            <Drawer.Screen name="Favorite" component={Favorite}   options={{
                title:'Favorite',
                drawerIcon:({color,size}) => <Ionicons name='search' color={color} size={size} />
            }} />
        </Drawer.Navigator> 
    )
}

const Drawer = createDrawerNavigator();
const NavigatorRedux = (props) => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle:{backgroundColor:'#351401'},
                headerTintColor:'white',
                contentStyle:{backgroundColor:'#3f2f25'}
            }}>
                <Stack.Screen name='Drawer' component={DrawerNavigation} options={{
                    headerShown:false
                }}
                />
                <Stack.Screen name='CategoryMeal' component={CategoryMeal} />
                <Stack.Screen name='MealDetail' component={MealDetail}/>
            </Stack.Navigator>   
        </NavigationContainer>
        </Provider>
    )
}

export default NavigatorRedux;
