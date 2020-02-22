// import React from 'react';
import Movilist from './components/movilist'
// import Spinner from './components/Loading'
import './App.css';

import Coco from './img/coco.jpg'
import Frozen from './img/frozen.jpg'
import Pinocchio from './img/Pinocchio.jpg' 

import React, { Component } from 'react'





 class App extends Component {
 state={
 list:[
  { image : Coco,
    name :'coco'
  },
   { image: Frozen,
     name : 'Frozen'},
  { image : Pinocchio,
     name : 'Pinocchio'}
  ],
  loading: true
 }

 componentDidMount=()=>{
    setTimeout(() => { 
      this.setState({loading: false})
    },2000)
}
 

  render() {
    return (
      <div>
        {/* <Spinner/> */}
        <Movilist    loading={this.state.loading} img={this.state.list}/>
      </div>
    )
  }
}

export default App;