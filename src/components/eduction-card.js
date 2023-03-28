import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const EductionCard = () => {
    const eductionData = useSelector(state => state.eduction.userEduction);
    const navigation = useNavigation();

    const [school, setSchool] = useState(eductionData.school);
    const [collage, setCollage] = useState(eductionData.collage);
    const [university, setUniversity] = useState(eductionData.university);

    useEffect(() => {
        setSchool(eductionData.school)
        setCollage(eductionData.collage)
        setUniversity(eductionData.university)
    }, [eductionData])

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 20 }}>Eduction Data</Text>
            <View style={styles.dataText}>
                <Text>School Name = </Text>
                <Text>{school}</Text>
            </View>
            <View style={styles.dataText}>
                <Text>Collage Name = </Text>
                <Text>{collage}</Text>
            </View>
            <View style={styles.dataText}>
                <Text>University Name =  </Text>
                <Text>{university}</Text>
            </View>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => { navigation.navigate("EditEduction") }}
            >
                <Text style={styles.buttonText}>Edit Eduction</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EductionCard

const styles = StyleSheet.create({
    dataText: {
        flexDirection: 'row',
        margin: 20,
        marginTop: 20,
        justifyContent: "space-around"
    },
    nextButton: {
        borderRadius: 7,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green",
        marginHorizontal: '2%'
    },
    buttonText: {
        paddingHorizontal: '10%',
        paddingVertical: '3%',
        fontSize: 20,
        color: "#fff"
    },
})