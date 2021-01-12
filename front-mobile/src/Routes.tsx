import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator as navigar} from '@react-navigation/stack'
import Home from "./Home";
import Orders from "./Orders";
import OrderDetails from './OrderDetails';

const Stack = navigar();

export default function Routes(): JSX.Element{
  return(
    <NavigationContainer>
      <Stack.Navigator  
      headerMode ="none"   
      screenOptions={{
        cardStyle:{ backgroundColor: '#FFF' }
      }}  >

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />



      </Stack.Navigator>

    </NavigationContainer>
  )
}