import React, {useState} from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, Alert, Picker,TextInput, Text, View, Platform } from 'react-native'
import countryList from "country-list"
import Button from "../../components/Button/Button"
import { useNavigation } from '@react-navigation/native'

const countries = countryList.getData()

const AddressScreen = () => {
    const navigation = useNavigation()
    const [country, setCountry] = useState(countries[0].code)
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState("")
    const [city, setCity] = useState('');

    const onCheckout = () => {
        if(!fullName) {
            Alert.alert("Please fill in the fullname")
        }

        if(!phone) {
            Alert.alert("Please fill correct Phone Number")
        }
        navigation.navigate("OrderPlacedScreen")
    }

    console.log(country);
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <ScrollView>

        <View style={styles.root}>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry} >
                {
                    countries.map(country => (
                    <Picker.Item value={country.code} label={country.name} />
                    ))
                }
                </Picker>
            </View>
            
            {/* Full Name */}
            <View style={styles.row}>
                <Text style={styles.label}>Full Name (First And Last Name)</Text>
                <TextInput value={fullName} onChangeText={setFullName} style={styles.input} placeholder="Full Name"/>
            </View>

            {/* Phone Number */}
            <View style={styles.row}>
                <Text style={styles.label}>Enter Phone Number</Text>
                <TextInput 
                     style={styles.input}
                    placeholder="Phone number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType={'phone-pad'}
                />
            </View>
            
             {/* Address */}
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput value={address} 
                onChangeText={text => {
                    setAddress(text);
                    setAddressError("");
                }} 
                style={styles.input} placeholder="Full Name"/>
                {!!addressError && (
                    <Text style={{color: "red"}}>{addressError}</Text>
                )}
            </View>

             {/* City */}
            <View style={styles.row}>
            <Text style={styles.label}>City</Text>
            <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
            />
            </View>

            <Button text="Checkout" onPress={onCheckout} />

        </View>
                    </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    row: {
        marginVertical: 5
    },
    root: {
        padding: 10,
    },
    label: {
        fontWeight: "bold"
    },
    input: {
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 2,
    },
})

