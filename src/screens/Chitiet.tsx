import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Chitiet = ({ route }) => {
  const { navigate, goBack } = useNavigation();
  const gotoDanhSach = () => {
    goBack();
  }
  const { title, description } = route.params
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>NOTE APP</Text>
          <TouchableOpacity style={styles.bin}>
            <Image
              style={styles.tinyLogo}
              source={require('../icon/bin.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.done}
            onPress={gotoDanhSach}
          >
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
            <Text style={{ fontSize: 25, fontWeight: '800', paddingLeft: 35 }}>{title}</Text>
          </View>
          <View style={styles.decs}>
            <Text style={{ fontSize: 18, paddingLeft: 35 }}>{description}</Text>
          </View>

        </ScrollView>
      </View>
    </View>
  )
}

export default Chitiet

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
    marginTop: 15,
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
  bin: {
    width: 30,
    height: 35,
    position: 'absolute',
    right: 90,
  },
  done: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 30,
  }
})