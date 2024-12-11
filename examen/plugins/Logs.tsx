import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fetchLogs } from '../service/api'; 

interface LogData {
  x: number;
  y: number;
  z: number;
  timestamp: number;
}

const RegistroLogs: React.FC = () => {
  const [logEntries, setLogEntries] = useState<LogData[]>([]);

  useEffect(() => {
    fetchLogs()
      .then(setLogEntries)
      .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Registros:</Text>
      <FlatList
        data={logEntries}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{`X: ${item.x}, Y: ${item.y}, Z: ${item.z}, Timestamp: ${item.timestamp}`}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistroLogs;
