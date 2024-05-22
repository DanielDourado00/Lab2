// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicio from './src/TelaInicio';
import Treino from './src/Treino';
import Dia from './src/Dia';
import Braco from './src/Exercicios.js/Braco';
import Perna from './src/Exercicios.js/Perna';
import Peito from './src/Exercicios.js/Peito';
import Costa from './src/Exercicios.js/Costa';
import Cardio from './src/Exercicios.js/Cardio';
import Login from './src/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TelaInicio" component={TelaInicio} />
        <Stack.Screen name="Treino" component={Treino} />
        <Stack.Screen name="Dia" component={Dia} />
        <Stack.Screen name="Braco" component={Braco} />
        <Stack.Screen name="Perna" component={Perna} />
        <Stack.Screen name="Peito" component={Peito} />
        <Stack.Screen name="Costa" component={Costa} />
        <Stack.Screen name="Cardio" component={Cardio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
