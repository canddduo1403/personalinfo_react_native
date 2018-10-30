import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { MapView } from 'expo';
import * as firebase from 'firebase';


const W_Width = Dimensions.get('window').width;
const W_Higth = Dimensions.get('window').height;

export default class Header extends Component {
    state = {
        // region: {
        //     latitude: 13.8463,
        //     longitude: 100.5621,
        //     latitudeDelta: 0.0922,
        //     longitudeDelta: 0.0421
        // },
        item: '',
        items: [],
        address: {}
    }

    componentDidMount() {
        var config = {
            apiKey: "AIzaSyCPvKcv-tmr2n6ASOdg7c58grod1DNIf34",
            authDomain: "personalinfo-d1f0a.firebaseapp.com",
            databaseURL: "https://personalinfo-d1f0a.firebaseio.com",
            storageBucket: "personalinfo-d1f0a.appspot.com"
        };
        firebase.initializeApp(config);

        firebase.database().ref('user1').once('value', snapshot => {
            const data = snapshot.val()
            if (snapshot.val()) {
                const initItem = [];
                Object.keys(data).forEach(item => initItem.push(data[item]));
                this.setState({
                    items: initItem
                })
            }
        });

        const dbref = firebase.database().ref().child('user1');
        const dbRefList = dbref.child('Address');
        dbRefList.once('value', snapshot => {
            this.setState({ address: snapshot.val() })
        });
    }


    render() {
        const region = this.state.address.region;
        const url = this.state.items[2];
        return (
            <View>
                <View style={styles.headerArea}>
                    <Image
                        source={{ uri: url }}
                        style={styles.profileArea}
                    />
                </View>
                <MapView
                    style={styles.container}
                    region={this.state.address.region}>
                    <MapView.Marker
                        coordinate={{
                            latitude: 13.8463,
                            longitude: 100.5621
                        }}
                        title={this.state.address.name_address}
                        description={this.state.address.phy_address}
                    />
                </MapView>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    headerArea: {
        backgroundColor: '#22a6b3',
        height: W_Higth / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    profileArea: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
    },

    container: {
        height: W_Higth - 250,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})


