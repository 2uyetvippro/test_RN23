import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import StyledInput from './StyledInput'
import Note from './Note';

const Search = () => {
    const [keySearch, setKeySearch] = useState('');
    const renderResult = () => {
        const data = productData.filter((value) =>
            value.name.toLocaleLowerCase().includes(keySearch.toLocaleLowerCase())
        );
        const renderItem = ({ item, index }) => (
            <Note item={item} navigation={navigation} />
        );
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
                    KẾT QUẢ
                </Text>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                />
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <StyledInput
                onChangeText={setKeySearch}
                placeholderText='Search........'
                customStyle={styles.styleSearch}
            />

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',

    },
    styleSearch: {
        width: '93%',
        borderRadius: 25,
        paddingLeft: 25,
        backgroundColor: 'gray',


    },
})