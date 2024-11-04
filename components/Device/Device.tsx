import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from './styles'

interface deviceProps {
 name: string,
 image: any,
 type: string,
 id: any
}

const Device = (props: deviceProps) => {

 return (
  <View style={props.id === 1 ? styles.container : styles.container_selected}>
   <View style={styles.device_wrapper}>
    <Image style={styles.cover} source={{ uri: props.image }} alt="cover" />
    <Text style={styles.tite}>{props.name}</Text>
    <Text style={styles.subtitle}>{props.type}</Text>
   </View>
  </View>
 )
}

export default Device;
