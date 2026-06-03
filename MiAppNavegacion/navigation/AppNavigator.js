import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext'; // Consumo obligatorio del estado global

// Importación de las pantallas requeridas por la tarea
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Inicialización de los navegadores solicitados en el Setup
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Navegador secundario de pestañas (Tabs)
 * Controla dinámicamente los accesos y la redirección inicial según el rol del usuario
 */
function TabNavigator() {
  const { userRole } = useAuth();

  return (
    <Tab.Navigator 
      // REQUISITO: Si el rol es admin redirige directo a Settings, si es common va a Home
      initialRouteName={userRole === 'admin' ? 'Settings' : 'Home'}
    >
      {/* Pestaña accesible para todos los usuarios */}
      <Tab.Screen name="Home" component={HomeScreen} />
      
      {/* REQUISITO: Renderizado condicional estricto. 
          Si el usuario es 'common', la pestaña 'Settings' no se renderiza en el árbol de navegación */}
      {userRole === 'admin' && (
        <Tab.Screen name="Settings" component={SettingsScreen} />
      )}
    </Tab.Navigator>
  );
}

/**
 * Navegador principal (Raíz) de la aplicación
 * Evalúa si existe una sesión iniciada para mostrar el Login o el flujo de la App
 */
export default function AppNavigator() {
  const { userToken, login } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userToken == null ? (
        // Flujo de Autenticación: Si no hay token, solo se puede ver la pantalla de Login
        <Stack.Screen name="Login">
          {() => <LoginScreen onLogin={login} />}
        </Stack.Screen>
      ) : (
        // Flujo Protegido: Si la sesión está iniciada, se montan las Tabs dinámicas
        <Stack.Screen name="AppTabs" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
}