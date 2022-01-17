import React from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem/ProductItem'

import products from "../../../backend/products/data/Products"

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* <ProductItem item={products[2]}/> */}
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
   }
})
