import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import EditRelativeScreen from '../screens/edit-relative-screen'

const RelativeCard = () => {
    const relativeData = useSelector(state => state.relative.relative);
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 20 }}>Relative Data</Text>
            <ScrollView>
                {relativeData.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate("EditRelative", { name: item.relativeName, relation: item.relation, currentIndex: item.id }) }}>
                            <View style={styles.dataText}>
                                <Text >{item?.relativeName}</Text>
                                <Text>{item?.relation}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => { navigation.navigate("Relative") }}
            >
                <Text style={styles.buttonText}>Add Relative</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RelativeCard

const styles = StyleSheet.create({
    dataText: {
        flexDirection: 'row',
        margin: 20,
        marginTop: 20,
        justifyContent: "space-around",
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