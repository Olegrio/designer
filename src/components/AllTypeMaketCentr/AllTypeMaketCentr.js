import React from 'react';

import st from './AllTypeMaketCentr.module.css';
import ContainerOneTypeMaket from '../OneTypeMaket/ContainerOneTypeMaket';

class AllTypeMaketCentr extends React.Component {


render(){

let data = this.props.data; 
let arrContainerOneTypeMaket = data.map( data =><ContainerOneTypeMaket data={data} /> );

    return(
        <div className={st.AllTypeMaketCentr}>
          {arrContainerOneTypeMaket}
        </div>
    );
 }
}


export default AllTypeMaketCentr;