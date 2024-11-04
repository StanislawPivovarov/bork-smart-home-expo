import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 container: {
  borderRadius: 24,
  alignItems: 'center',
  backgroundColor: "#282424",
  width: 170,
  height: 186,
 },
 container_selected: {
  borderRadius: 24,

  alignItems: 'center',
  backgroundColor: "#282424",
  width: 170,
  height: 186,
  borderWidth: 1,
  borderColor: '#FFB267'

 },
 device_wrapper: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },
 cover: {
  width: 78,
  height: 78
 },
 tite: {
  fontSize: 17,
  color: "#F8F8F8",
  textAlign: "center",
  fontFamily: "Manrope_600SemiBold",
  marginTop: 16
 },
 subtitle: {
  marginTop: 4,
  fontSize: 12,
  textAlign: 'center',
  color: "#FFFFFF",
  opacity: 0.6,
  fontFamily: 'Manrope_500Medium'
 }
})