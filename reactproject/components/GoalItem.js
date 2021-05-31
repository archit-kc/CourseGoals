import React , { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class GoalItem extends Component{
    render(){
        return (
            <TouchableOpacity onPress={this.props.onDelete.bind(this, this.props.id)}>
            <View style={styles.listitem}>
                        <Text style={styles.listitemtext}>{this.props.title}</Text>
                    </View>
                    </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listitem : {
        padding:7,
        marginVertical:10,
        borderColor:'grey',
        borderWidth:1
    },
    listitemtext : {
        color : 'green',
        fontSize:20
    }
})

export default GoalItem;