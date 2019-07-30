import React from 'react';

import Maket from  './Maket';


class ContainerMaket extends React.Component {

render(){
  

let name = this.props.name;
let src = this.props.src;
let state = this.props.state;

return( 

    <Maket name={name} state={state} src={src} />

    )
  }
}


export default ContainerMaket;
