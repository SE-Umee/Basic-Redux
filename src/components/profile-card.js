import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { userData } from '../redux/actions/auth-actions';


const ProfileCard = () => {
    const personalData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const [name, setName] = useState(personalData.name);
    const [fname, setFName] = useState(personalData.fName);
    const [email, setEmail] = useState(personalData.email);
    const [address, setAddress] = useState(personalData.address);
    useEffect(() => {
        setName(personalData.name);
        setEmail(personalData.email);
        setFName(personalData.fName);
        setAddress(personalData.address)
    }, [personalData]
    );

    const Clear = () => {
        dispatch(userData(''))
    }

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: "center", fontSize: 20 }}>Personal Data</Text>
            <View style={styles.dataText}>
                <Text>Name = </Text>
                <Text>{name}</Text>
            </View>
            <View style={styles.dataText}>
                <Text>Father Name = </Text>
                <Text>{fname}</Text>
            </View>
            <View style={styles.dataText}>
                <Text>Email = </Text>
                <Text>{email}</Text>
            </View>
            <View style={styles.dataText}>
                <Text>Address = </Text>
                <Text>{address}</Text>
            </View>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => { navigation.navigate("EditProfile") }}
            >
                <Text style={styles.buttonText}>Edit Data</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => Clear()}
            >
                <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    dataText: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: "space-around"
    },
    nextButton: {
        borderRadius: 7,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green",
        marginHorizontal: '2%',
        marginTop: '2%'
    },
    buttonText: {
        paddingHorizontal: '10%',
        paddingVertical: '3%',
        fontSize: 20,
        color: "#fff"
    },
})