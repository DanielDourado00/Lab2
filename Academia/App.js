import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicio from './src/TelaInicio';
import Treino from './src/Treino';
import Dia from './src/Dia';
import Braco from './src/Exercicios.js/Braco';
import Perna from './src/Exercicios.js/Perna';
import Peito from './src/Exercicios.js/Peito';
import Costa from './src/Exercicios.js/Costa';
import Cardio from './src/Exercicios.js/Cardio';
import PersonalTrainers from './src/PersonalTrainers';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import ListaAlunos from './src/ListaAlunos';
import DimensionsExample from './src/DimensionsExample';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userData, setUserData] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => <Login {...props} setUserData={setUserData} />} 
        </Stack.Screen>
        <Stack.Screen name="Cadastro">
          {props => <Cadastro {...props} setUserData={setUserData} />} 
        </Stack.Screen>
        <Stack.Screen name="Main">
          {props => <MainTabs {...props} userData={userData} />} 
        </Stack.Screen>
        <Stack.Screen name="Treino" component={Treino} />
        <Stack.Screen name="Dia" component={Dia} />
        <Stack.Screen name="Braco" component={Braco} />
        <Stack.Screen name="Perna" component={Perna} />
        <Stack.Screen name="Peito" component={Peito} />
        <Stack.Screen name="Costa" component={Costa} />
        <Stack.Screen name="Cardio" component={Cardio} />
        <Stack.Screen name="ListaAlunos">
          {props => <ListaAlunos {...props} userData={userData} />} 
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs({ route, userData }) {
  const { username } = route.params;
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio">
        {props => <TelaInicio {...props} username={username} />} 
      </Tab.Screen>
      <Tab.Screen name="Personais" component={PersonalTrainers} />
      <Tab.Screen name="Ver Alunos">
        {props => <ListaAlunos {...props} userData={userData} />} 
      </Tab.Screen>
    </Tab.Navigator>
  );
}
