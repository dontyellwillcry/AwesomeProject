import React, { useState, useEffect, useCallback } from 'react';
import {
    StyleSheet,
    FlatList,
    RefreshControl,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const Home = () => {

    const navigation = useNavigation(); // Use the useNavigation hook
    const route = useRoute();

    // const newPalette = route.params ? route.params.newPalette : null;
    const [palettes, setPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);




    return (
        <>
            <TouchableOpacity
                style={styles.button}
            // onPress={() => navigation.navigate('Chat')}
            >
                <Text style={styles.buttonText}>Get Chatting!</Text>
            </TouchableOpacity>

        </>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    button: {
        height: 50,
        backgroundColor: 'white',
        padding: 10,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'teal',
    },
});

export default Home;