import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { userData } from '../redux/actions/auth-actions'

const ProfileScreen = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.user)
    const [name, setName] = useState("");
    const [fName, setFName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const navigation = useNavigation();

    const UserDetail = () => {
        let Obj = {
            name,
            fName,
            email,
            address,
        }
        dispatch(userData(Obj))
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={{ fontSize: 20 }}>User Profile</Text>
            <View style={styles.inputTextView}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder='Enter your Name'
                    style={styles.inputText}
                />
                <TextInput
                    value={fName}
                    onChangeText={setFName}
                    placeholder='Enter your F.Name'
                    style={styles.inputText}
                />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Enter your Email'
                    style={styles.inputText}
                />
                <TextInput
                    value={address}
                    onChangeText={setAddress}
                    placeholder='Enter your Address'
                    style={styles.inputText}
                />
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                        navigation.navigate("Eduction")
                        UserDetail()
                    }}
                >
                    <Text style={styles.buttonText}>Go to Eduction</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    inputTextView: {
        marginTop: '3%'
    },
    inputText: {
        paddingHorizontal: '20%',
        paddingVertical: '3%',
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: '3%',
        fontSize: 20
    },
    nextButton: {
        borderRadius: 7,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "gray"
    },
    buttonText: {
        paddingHorizontal: '20%',
        paddingVertical: '3%',
        fontSize: 20,
        color: "#fff"
    },
})