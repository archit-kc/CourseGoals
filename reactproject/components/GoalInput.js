import React, {Component} from 'react';
import { View , Text, TextInput, TouchableOpacity, StyleSheet, Modal, TouchableHighlightBase } from 'react-native';

class GoalInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            enteredgoal : ''
        };
    }

    Addgoalhandler(){
        this.props.onAddGoal(this.state.enteredgoal);
        this.setState({enteredgoal:''});
    }

    render(){
        return (
            <Modal visible={this.props.isvisible}>
            <View style={styles.inputcontainer}>
                        <TextInput placeholder="Course Goal" style={styles.input} value={this.state.enteredgoal.value} onChangeText={(enteredtext) => this.setState({enteredgoal : enteredtext})}></TextInput>
                        <View style={styles.buttonview}>
                        <TouchableOpacity style={styles.cancelbutton} onPress={this.props.onCancelModal}>
                            <Text style={styles.cancelbuttontext}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addbutton} onPress={this.Addgoalhandler.bind(this)}>
                            <Text style={styles.addbuttontext}>Add</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    </Modal>
        )
    }
}

const styles = StyleSheet.create({
    inputcontainer : {
        flex:1,
        justifyContent: 'center',
    },
    input : {
        borderWidth:1,
        borderColor:'grey',
        padding:8,
        width:'75%',
        marginBottom:20,
        alignSelf:'center'
    },
    buttonview : {
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    addbutton:{
        borderRadius:50,
        paddingHorizontal:30,
        paddingVertical:7,
        backgroundColor:'green'
    },
    cancelbutton:{
        borderRadius:50,
        paddingHorizontal:20,
        borderWidth:1,
        paddingVertical:7,
        backgroundColor:'white'
    },
    addbuttontext : {
        color : 'white',
        fontSize:20
    },
    cancelbuttontext:{
        color:'green',
        fontSize:20
    }
})

export default GoalInput;