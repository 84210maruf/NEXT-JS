import { Button, Text, View, StyleSheet, Alert } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
           <Button
          title="Click Me"
          
          onPress={() => Alert.alert('Simple Button pressed')}
        />

        
    </View>
  );
}
