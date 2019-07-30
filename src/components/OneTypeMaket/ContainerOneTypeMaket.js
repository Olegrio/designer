import React from 'react';
//import {connect} from 'react-redux';



import OneTypeMaket from './OneTypeMaket';



class ContainerAllTypeMaketCentr extends React.Component {



    render(){
let data = this.props.data;

  
return(
    <OneTypeMaket  data={data} />

)}}

export default ContainerAllTypeMaketCentr;

