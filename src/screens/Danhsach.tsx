import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Search from '../components/Search'
import Note from '../components/Note'
import { useNavigation } from '@react-navigation/native'
import { data } from '../data/data';


const Danhsach = ({ route }) => {

  const { navigate } = useNavigation();
  const goToTaomoi = () => {
    navigate('Taomoi', { useName: 'Taomoi' });
  };
  const [textSearch, settextSearch] = useState("");
  const renderResult = () => {
    const dataa = data.filter((value) =>
      value.title.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
    );
    const renderItem = () => (
      // data.map(element => {
      //   return <Note data={element} />
      // })
      < Note item={item} navigation={navigation} />
    );
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 15, paddingLeft: 20 }}>
          KẾT QUẢ
        </Text>
        <FlatList
          data={dataa}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          style={{ marginBottom: 15 }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>NOTE APP</Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginTop: 15 }}>
          {/* <Search /> */}
          <TextInput
            style={styles.textInputStyle}
            onChangeText={settextSearch}
            value={textSearch}
            underlineColorAndroid="transparent"
            placeholder="Search....."
          />
        </View>
        {textSearch.trim().length > 0 ? (
          renderResult()
        ) : (
          <>
            <View>
              <View style={styles.list}>
                {
                  data.map(element => {
                    return <Note data={element} />
                  })
                }

              </View>
            </View>
          </>
        )}
      </ScrollView>
      <TouchableOpacity style={styles.newnote} onPress={goToTaomoi}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Danhsach

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
  newnote: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 50,
    position: 'absolute',
    right: 30,
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 7,
    marginBottom: 20,
  },
  textInputStyle: {
    width: '93%',
    borderRadius: 25,
    paddingLeft: 25,
    borderWidth: 1,
  },
})