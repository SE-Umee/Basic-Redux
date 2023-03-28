import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userRelative } from '../redux/actions/relative-action';
import ActionTypes from '../redux/ActionTypes';

const RelativeScreen = () => {
    const [relativeName, setRelativeName] = useState("")
    const [relation, setRelation] = useState("");
    const dispatch = useDispatch();
    const nameWithRelation = () => {
        let obj = {
            id: Math.random(),
            relativeName,
            relation
        }
        dispatch(userRelative(obj, ActionTypes.USER_RELATIVE))
        setRelativeName("")
    }
    const navigation = useNavigation();
    const relative = ["Father", "Mother", "Brother", "Sister", "Uncle", "Cousin"]
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={{ fontSize: 20 }}>User Relative</Text>
            <View style={styles.inputTextView}>
                <TextInput
                    value={relativeName}
                    placeholder='Enter your Relative Name'
                    style={styles.inputText}
                    onChangeText={setRelativeName}
                />
                <SelectDropdown
                    defaultButtonText={"Select Your Relative"}
                    data={relative}
                    buttonStyle={styles.dropDown}
                    renderDropdownIcon={() => { }}
                    onSelect={(selectedItem, index) => {
                        setRelation(selectedItem)
                    }}
                />
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => { nameWithRelation() }}
                >
                    <Text style={styles.buttonText}>Add Relative</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => { navigation.navigate("Detail") }}
                >
                    <Text style={styles.buttonText}>Get All Detail</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RelativeScreen

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
        paddingHorizontal: '10%',
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
        backgroundColor: "gray",
        marginBottom: '3%'
    },
    buttonText: {
        paddingHorizontal: '10%',
        paddingVertical: '3%',
        fontSize: 20,
        color: "#fff"
    },
    dropDown: {
        height: '15%',
        width: '75%',
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: '2%'
    }
})