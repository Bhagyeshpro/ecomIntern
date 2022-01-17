import React from 'react'
import { StyleSheet, Picker, Text, View } from 'react-native'
// import countryList from "country-list"

// const countries = countryList.getData()
// console.log(countries);

const AddressScreen = () => {
    return (
        <View>
            <View style={styles.row}>
                <Picker>
                    <Picker.Item value="m" label="," />
                </Picker>
            </View>
        </View>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    row: {},
})
