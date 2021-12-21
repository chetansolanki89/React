import React, { Component } from 'react';
import LifeCycleMethodsChild from './LifeCycleMethodsChild';

class LifeCycleMethods extends Component {
    constructor(){
        super();
        console.log("This is Constructor.") // 1
    }
    static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStateFromProps") //2
    }
    componentDidMount(){
        console.log("This is componentDidMount") //4--It will be at the last, if child is there then first child's will be executed.
    }
    componentDidUpdate(){
        console.log("This is componentDidUpdate.")
    }
    shouldComponentUpdate(){
        console.log("This is shouldComponentUpdate.")
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("This is getSnapshotBeforeUpdate.")
    }
    render() {
        console.log("This is Render.") //3
        return (

            <div>
                <h1>Life cycle Methods</h1>
                <LifeCycleMethodsChild/>
            </div>
        );
    }
}

export default LifeCycleMethods;