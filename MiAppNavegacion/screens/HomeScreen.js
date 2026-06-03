import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen() {
  const { logout, userRole } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la pestaña Home!</Text>
      <Text style={styles.text}>Rol actual detectado por Contexto: {userRole}</Text>
      
            <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Cerrar Sesión (Logout)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  text: { fontSize: 16, marginVertical: 15, color: '#666' },
  logoutBtn: { backgroundColor: '#dc3545', padding: 12, borderRadius: 8, marginTop: 10 },
  logoutText: { color: '#fff', fontWeight: 'bold' }
});