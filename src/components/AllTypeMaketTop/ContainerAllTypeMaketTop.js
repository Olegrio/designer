import React from 'react';

import AllTypeMaketTop from './AllTypeMaketTop';




class ContainerAllTypeMaketTop extends React.Component {

   
  render(){

    let data = this.props.data;
    let state = this.props.state;
    
  return(
    <AllTypeMaketTop state={state} data={data}/>
  );
 }
}

export default ContainerAllTypeMaketTop;