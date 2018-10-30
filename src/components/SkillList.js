import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import * as firebase from 'firebase';


export default class SkillList extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        const dbref = firebase.database().ref().child('user1');
        const dbRefList = dbref.child('Skill');
        dbRefList.once('value', snapshot => {
            const data = snapshot.val();
            const initItem = [];
            Object.keys(data).forEach(item => initItem.push(data[item]));
            this.setState({
                items: initItem
            })
        })
    }

    render() {
        console.log(this.state.items)
        return (

            <View style={{ top: 50 }}>
                <Text style={styles.headerText}>Skill</Text>
                <FlatList
                    data={this.state.items}
                    renderItem={({ item }) =>
                        <View style={{paddingBottom:10}}>
                            <Text>{item.sk_name}</Text>
                            <ProgressBarAndroid
                                styleAttr="Horizontal"
                                indeterminate={false}
                                progress={item.sk_lv/100}
                            />
                        </View>}
                >
                </FlatList>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30
    }
})