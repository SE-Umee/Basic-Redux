import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import ProfileCard from '../components/profile-card'
import EductionCard from '../components/eduction-card'
import RelativeCard from '../components/relative-card'
import { useSelector } from 'react-redux'

const FullDetailScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 0.33 }}>
        <ProfileCard
        />
        <View style={{ height: 1, backgroundColor: 'gray', marginHorizontal: "3%" }}></View>
      </View>
      <View style={{ flex: 0.33 }}>
        <EductionCard />
        <View style={{ height: 1, backgroundColor: 'gray', marginHorizontal: "3%" }}></View>
      </View>
      <View style={{ flex: 0.33, }}>
        <RelativeCard />
      </View>
    </SafeAreaView>
  )
}

export default FullDetailScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

  }
})