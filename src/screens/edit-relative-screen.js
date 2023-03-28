import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userRelative } from '../redux/actions/relative-action';
import ActionTypes from '../redux/ActionTypes';

const EditRelativeScreen = ({ route }) => {
    const { name, relation, currentIndex } = route.params;
    const relativeData = useSelector(state => state.relative.relative);
    const dispatch = useDispatch()
    const [relativeName, setRelativeName] = useState("")
    const [changeRelation, setChangeRelation] = useState("");
    const navigation = useNavigation();
    const relative = ["Father", "Mother", "Brother", "Sister", "Uncle", "Cousin"]

    const Edit = () => {
        dispatch(userRelative({
            id: currentIndex,
            relativeName: relativeName || name,
            relation: changeRelation || relation,
        }, ActionTypes.UPDATE_USER))
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text>Current Name is {name}</Text>
            <Text>Current RelationShip is {relation}</Text>
            <Text>Current index is {currentIndex}</Text>
            <Text style={{ fontSize: 20 }}>Edit Relative</Text>
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
                        setChangeRelation(selectedItem)
                    }}
                />
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => { Edit(), navigation.goBack() }}
                >
                    <Text style={styles.buttonText}>Save & Go Back </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EditRelativeScreen

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