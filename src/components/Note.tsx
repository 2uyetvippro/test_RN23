import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Note = ({ data }: any) => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.containernote}
            onPress={() => {
                navigation.navigate('Chitiet', {
                    title: data.title,
                    description: data.description,
                })
            }}
        >
            <Text style={{ marginTop: 15, fontSize: 18, fontWeight: '800' }}>
                {data.title}
            </Text>
            <Text>
                {data.description}
            </Text>

        </TouchableOpacity>

    )
}

export default Note

const styles = StyleSheet.create({
    containernote: {
        width: 180,
        height: 120,
        borderRadius: 20,
        backgroundColor: 'green',
        marginTop: 15,
        marginHorizontal: 10,
        paddingHorizontal: 20,

    },
})