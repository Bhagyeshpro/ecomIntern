import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useStateValue } from '../../../backend/StateProvider';
import { getBasketTotal } from '../../../backend/Reducer';
import CurrencyFormat from "react-currency-format"
import Button from '../Button/Button';

const Subtotal = ({navigation}) => {
    const [{basket}, dispatch] = useStateValue();
    
    const onCheckout = () => {
        navigation.navigate("AddressScreen")
    }

  return (
    <View style={styles.container}>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <Text style={{fontSize: 15, fontWeight: "bold"}}>Subtotal ({basket.length} items) : {value} </Text>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <Button onPress={onCheckout} text={"Proceed to Checkout"}/>
    </View>
  );
};

export default Subtotal;

const styles = StyleSheet.create({
    container: {
            margin: 7,
            padding: 10,
            borderWidth: 1,
            borderColor: "#d1d1d1",
            borderRadius: 10,
            backgroundColor: "#fff",
            marginTop: 7,
    }
});
