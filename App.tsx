import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { devices } from './mocks/devicesData'
import { useFonts, Manrope_200ExtraLight, Manrope_300Light, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import Device from './components/Device';
import { Col, Row } from 'react-native-easy-grid';
import NoDevice from './components/NoDevice';

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={devices}
        numColumns={2}
        renderItem={({ index, item }) => (
        <View>
          <Device key={item.index} id={item.id} name={item.name} image={item.image} type={item.type} />
        </View>
      )}
      ListFooterComponent={() => <NoDevice/>}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#211D1D",
    flexDirection: "column",
    justifyContent: 'center'
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
