import React from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View, FlatList } from 'react-native'
import CartProductItem from '../../components/CartProductItem/CartProductItem'

import Button from "../../components/Button/Button"
import products from "../../../backend/products/data/Cart"

const ShoppingCartScreen = ({navigation}) => {
    const totalPrice = products.reduce(
        (summedPrice, product) => 
        summedPrice + product.item.price * product.quantity,
        0,
    );

    return (
        <SafeAreaView style={styles.container}>            
            {
                <FlatList
                    data={products}
                    renderItem={({item}) => <CartProductItem item={item}/>}
                    ListHeaderComponent={() => (
                        <View style={{marginHorizontal: 10}}>
                            <Text style={{fontSize: 18}}>Subtotal ({products.length} items): 
                            <Text style={{color: "orange", fontWeight: "bold"}}>
                            {totalPrice.toFixed(2)}</Text>
                            </Text>
                            <Button text={"Proceed to checkout"} onPress={() => navigation.navigate("Address")}/>
                        </View>
                    )}
                />
            }
        </SafeAreaView>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
   container: {
       flex: 1,
       marginTop: 20
   }
})
