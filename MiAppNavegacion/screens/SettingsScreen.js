import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SettingsScreen() {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      {}
      <Text style={styles.title}>estas en Settings</Text>
      <Text style={styles.subtitle}>Panel exclusivo de Administrador</Text>

      {}
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Cerrar Sesión (Logout)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#007bff' },
  subtitle: { fontSize: 15, color: '#555', marginVertical: 15 },
  logoutBtn: { backgroundColor: '#dc3545', padding: 12, borderRadius: 8 },
  logoutText: { color: '#fff', fontWeight: 'bold' }
});