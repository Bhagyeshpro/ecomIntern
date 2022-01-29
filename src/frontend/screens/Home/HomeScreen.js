import React, { useLayoutEffect } from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import ProductItem from '../../components/ProductItem/ProductItem'
import {Feather, FontAwesome5} from "@expo/vector-icons"
import products from "../../../backend/products/data/Products"
import Navigation from '../../navigation/Navigation'
import {useStateValue} from "../../../backend/StateProvider"

const HomeScreen = ({navigation}) => {
    const [{basket}] = useStateValue()
    const windowWidth = useWindowDimensions().width;
    
    console.log(basket);

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
                    <TouchableOpacity onPress={() => navigation.navigate("shoppingCart")}>
                    <FontAwesome5 name="shopping-cart" size={24} color="white" />
                    <View style={styles.iconContainer}>
                        <Text style={{color: "white", fontWeight: "bold"}}>{basket?.length}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [basket])

    return (
        <View style={styles.container}>
            {
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductItem item={item}/>}
                />
            }
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
   container: {
       flex: 1,
       marginTop: 20
   },
   iconContainer: {
       position: "absolute",
       top: -5,
       right: -5,
       backgroundColor: "#ed4c59",
       borderRadius: 50,
       height: 17,
       alignItems: "center",
       justifyContent: "center",
       width: 17,
   }
})
