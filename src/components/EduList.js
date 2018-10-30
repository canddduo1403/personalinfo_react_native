import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import EducationDetail from './EduDetail';
import * as firebase from 'firebase';

export default class EducationList extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        const dbref = firebase.database().ref().child('user1');
        const dbRefList = dbref.child('Education');
        dbRefList.orderByValue().once('value', snapshot => {
            const data = snapshot.val();
            const initItem = [];
            Object.keys(data).forEach(item => initItem.push(data[item]));
            this.setState({
                items: initItem
            })
        })
    }

    render() {
        //console.log(this.state.items)
        return (
            <FlatList
                data={this.state.items}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EducationDetail',{items:{item}})} style={styles.opacityStyle}>
                        <Text>{item.s_name}</Text>
                        <Text>เกรดเฉลี่ย : {item.gpa}</Text>
                    </TouchableOpacity>}
            >
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({

    opacityStyle: {
        padding: 25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#22a6b3',
        margin:10
    }

})