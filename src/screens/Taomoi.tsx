import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import StyledInput from '../components/StyledInput'

const Taomoi = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>NOTE APP</Text>
          <TouchableOpacity style={styles.done}>
            <Image
              style={styles.tinyLogo}
              source={require('../icon/done.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 30, width: '100%' }}>

        </View>

        <ScrollView style={styles.note}>
          <View style={styles.title}>
            {/* <Text style={{ fontSize: 25, fontWeight: '800', paddingLeft: 35 }}>My notes</Text> */}
            <StyledInput 
            customStyle={styles.textTitle} 
            label='Title'
            />
          </View>
          <View style={styles.decs}>
            {/* <Text style={{ fontSize: 18, paddingLeft: 35 }}>My Note here</Text> */}
            <StyledInput
              customStyle={styles.textdesc}
            label='Description'
            />
          </View>

        </ScrollView>
      </View>
    </View>
  )
}

export default Taomoi

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: 'blue',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  note: {
    width: '100%',
    marginTop: 14,

  },
  title: {

  },
  decs: {

  },
  textdesc: {
    backgroundColor: 'white',
    marginLeft: 10,
    width: '95%',
    height: 100,
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
  done: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 30,
  },
  textTitle: {
    backgroundColor: 'white',
    marginLeft: 10,
    width: '95%',
  }
})