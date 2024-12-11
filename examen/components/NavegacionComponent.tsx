import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SensorAcelerometro from '../plugins/Acelerometro';
import RegistroLogs from '../plugins/Logs';

const Tab = createBottomTabNavigator();

export default function NavegacionComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="SensorAcelerometro">
        <Tab.Screen name="SensorAcelerometro" component={SensorAcelerometro} />
        <Tab.Screen name="RegistroLogs" component={RegistroLogs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
