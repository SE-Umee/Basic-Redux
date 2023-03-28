import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { userEduction } from '../redux/actions/eduction-actions'

const EditEductionScreen = () => {
    const eductionData = useSelector(state => state.eduction.userEduction);
    const dispatch = useDispatch()
    const [school, setSchool] = useState("");
    const [collage, setCollage] = useState("");
    const [university, setUniversity] = useState("");
    const navigation = useNavigation();
    const UserEduction = () => {
        let newData = { ...eductionData }
        newData.school = school
        newData.collage = collage
        newData.university = university
        dispatch(userEduction(newData))
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={{ fontSize: 20 }}> Edit Eduction Details</Text>
            <View style={styles.inputTextView}>
                <TextInput
                    placeholder='Enter your School Name'
                    value={school}
                    onChangeText={setSchool}
                    style={styles.inputText}
                />
                <TextInput
                    placeholder='Enter your Collage Name'
                    value={collage}
                    onChangeText={setCollage}
                    style={styles.inputText}
                />
                <TextInput
                    placeholder='Enter your University Name'
                    value={university}
                    onChangeText={setUniversity}
                    style={styles.inputText}
                />
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => { navigation.goBack(), UserEduction() }}
                >
                    <Text style={styles.buttonText}>Save & Go Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EditEductionScreen

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
        backgroundColor: "gray"
    },
    buttonText: {
        paddingHorizontal: '10%',
        paddingVertical: '3%',
        fontSize: 20,
        color: "#fff"
    },

})