import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const W_Width = Dimensions.get('window').width;
const W_Higth = Dimensions.get('window').height;


export default class EducationDetail extends Component {
    render() {
        const { navigation } = this.props;
        const itemporps = navigation.getParam('items')
        console.log(itemporps)
        return (
            <View>
                <View style={styles.imgArea}>
                    <Image
                    source={{ uri: itemporps.item.simg_url }}
                    style={styles.imgArea}
                    />
                </View>
                <View style={styles.detailBox}>
                    <Text>{itemporps.item.s_name}</Text>
                    <Text>เกรดเฉลี่ย: {itemporps.item.gpa}</Text>
                    <Text>เริ่มเรียน ปี :{itemporps.item.start_year}</Text>
                    <Text>จบปี :{itemporps.item.end_year}</Text>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    detailBox:{
       backgroundColor:'#22a6b3',
       padding:20,
       top:30,
       justifyContent:'center'
    },
    imgArea:{
        width:W_Width,
        height:W_Higth/2,
        top:5
    }
})

