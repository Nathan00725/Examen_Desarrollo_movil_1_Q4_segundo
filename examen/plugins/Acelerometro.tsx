import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import axios from 'axios';

export default function Acelerometro() {
  const [acelerometroData, setAcelerometroData] = useState({ x: 0, y: 0, z: 0 });
  const [balonPosicion, setBalonPosicion] = useState({ left: 150, top: 300 });
  const [balonColor, setBalonColor] = useState('blue');

  const updateBalonPosicion = ({ x, y }: any) => {
    setBalonPosicion((prev) => ({
      left: Math.min(Math.max(prev.left + x * 10, 0), 300),
      top: Math.min(Math.max(prev.top - y * 10, 0), 600),
    }));
  };

  useEffect(() => {
    const subscription = Accelerometer.addListener((data) => {
      setAcelerometroData(data);
      updateBalonPosicion(data);
    });

    Accelerometer.setUpdateInterval(15); 

    const interval = setInterval(() => {
      const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setBalonColor(newColor);
    }, 5000); 

    return () => {
      subscription.remove();
      clearInterval(interval); 
    };
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.balon,
          {
            left: balonPosicion.left,
            top: balonPosicion.top,
            backgroundColor: balonColor, 
            position: 'absolute',
          },
        ]}
      />
      <Text style={styles.texto}>Mover el dispositivo para ver efecto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  balon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  texto: {
    position: 'absolute',
    bottom: 50,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
