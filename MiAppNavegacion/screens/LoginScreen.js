import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const [selectedRole, setSelectedRole] = useState('common'); // se deja común como rol predeterminado
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione su Rol</Text>

      {/* Para Common */}
      <TouchableOpacity 
        style={[styles.radioBtn, selectedRole === 'common' && styles.radioBtnSelected]}
        onPress={() => setSelectedRole('common')}
      >
        <Text style={[styles.radioText, selectedRole === 'common' && styles.radioTextSelected]}>
          Usuario Común (common)
        </Text>
      </TouchableOpacity>

      {/* Para Admin */}
      <TouchableOpacity 
        style={[styles.radioBtn, selectedRole === 'admin' && styles.radioBtnSelected]}
        onPress={() => setSelectedRole('admin')}
      >
        <Text style={[styles.radioText, selectedRole === 'admin' && styles.radioTextSelected]}>
          Administrador (admin)
        </Text>
      </TouchableOpacity>

      {/* Botón Ingresar */}
      <TouchableOpacity style={styles.submitBtn} onPress={() => login(selectedRole)}>
        <Text style={styles.submitBtnText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  radioBtn: { width: '100%', padding: 15, borderRadius: 8, borderWidth: 2, borderColor: '#ccc', backgroundColor: '#fff', marginBottom: 15, alignItems: 'center' },
  radioBtnSelected: { borderColor: '#007bff', backgroundColor: '#e7f1ff' },
  radioText: { fontSize: 16, color: '#555', fontWeight: '600' },
  radioTextSelected: { color: '#007bff' },
  submitBtn: { width: '100%', backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  submitBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});