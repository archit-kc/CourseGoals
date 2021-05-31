import React, { Component, useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    Button
} from 'react-native';

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            coursegoals : [],
            visibity : false
        };
    }
    render() {
        return ( 
            <View style={styles.screen}>
                <View style={styles.screentitleview}>
                    <Text style={styles.screentitle}>Course Goal</Text>
                </View>
                <Button title="Add course goal" onPress={()=> this.setState({visibity : true})}></Button>
                <GoalInput isvisible={this.state.visibity}
                            onAddGoal = { (goaltitle) => {
                                console.log(goaltitle);
                                if(goaltitle != ''){
                                    let goalobject = {
                                        id : Math.random().toString(),
                                        name : goaltitle
                                    }
                                    console.log(goalobject);
                                this.setState({coursegoals : [...this.state.coursegoals,goalobject]})
                                this.setState({visibity : false})}
                        }}
                        onCancelModal={()=>{
                            this.setState({visibity:false})
                        }} />
                <FlatList keyExtractor={(item,index) => item.id} 
                        data={this.state.coursegoals} 
                        renderItem={itemdata => <GoalItem id={itemdata.item.id} onDelete={(goalid) => {
                            let newcoursegoals = this.state.coursegoals.filter((goal) => goal.id !== goalid)
                            this.setState({coursegoals : newcoursegoals})
                        }} title={itemdata.item.name}/>}>
                </FlatList>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    screen : {
        padding : 20
    },
    screentitleview:{
        alignItems:'center',
        marginBottom:15
    },
    screentitle:{
        color:'green',
        fontSize:24
    }
})

export default App;