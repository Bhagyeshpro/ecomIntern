import React, { useLayoutEffect } from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import CartProductItem from '../../components/CartProductItem/CartProductItem'
import { useNavigation } from '@react-navigation/native'
import Button from "../../components/Button/Button"
import products from "../../../backend/products/data/Cart"
import { FontAwesome5 } from '@expo/vector-icons'
import { useStateValue } from '../../../backend/StateProvider'
import Subtotal from '../../components/Subtotal/Subtotal'

const ShoppingCartScreen = () => {
    const navigation = useNavigation()
    const [{basket}] = useStateValue();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View
                    style={{
                         flexDirection: "row",
                        justifyContent: "space-between",
                        width :80,
                        marginRight: 10,
                    }}
                >
                </View>
            )
        })
    }, [])
    
    const totalPrice = products.reduce(
        (summedPrice, product) => 
        summedPrice + product.item.price * product.quantity,
        0,
    );

    

    return (
        <SafeAreaView style={styles.container}>            
            {/* <Text>{[basket[0]]}</Text> */}
            {
                basket?.length === 0 ? (
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.heading}>Your Shopping basket is empty!</Text>
                        <Text style={styles.heading}>Check your Saved for later items below or go to Home</Text>
                    </View>
                ): (
                    <View>
                        <Text style={{marginLeft: 10}}>Your Shopping Basket</Text>
                        <Subtotal navigation={navigation}/>
                        {
                            basket?.map(item => (

                                <CartProductItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    oldPrice={item.oldPrice}
                                    image={item.image}
                                    price={item.price}
                                />
                ))
                        }
                    </View>
                )
            }
        </SafeAreaView>
    )
}

{/* <FlatList
  data={products}
 renderItem={({item}) => <CartProductItem item={item}/>}
 ListHeaderComponent={() => (
  <View style={{marginHorizontal: 10}}>
     <Text style={{fontSize: 18}}>Subtotal ({products.length} items): 
     <Text style={{color: "orange", fontWeight: "bold"}}>
     {totalPrice.toFixed(2)}</Text>
     </Text>
 <Button text={"Proceed to checkout"} onPress={onCheckout}/>
</View>
)}
/> */}
export default ShoppingCartScreen

const styles = StyleSheet.create({
   container: {
       flex: 1,
       marginTop: 20
   },
   heading: {
        fontSize: 15,
        fontWeight: "bold"       
   }
})

