import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from "../../components/Button/Button"
import { useNavigation } from '@react-navigation/native';

const OrderPlaced = () => {
    const navigation = useNavigation()

    const onShopMore = () => {
        navigation.navigate("Home")
    }

  return (
    <View style={styles.container}>
        <View style={{alignItems: "center", marginBottom: 20}}> 
      <Text style={{fontWeight: "bold", fontSize: 15}}>Congrats Your Order Is Placed !!!</Text>
        </View>
      <Button onPress={onShopMore} style={{width: 100}} text={"Shop More"}/>
    </View>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
    }
});
