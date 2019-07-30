import React from 'react';

import AllTypeMaketCentr from './AllTypeMaketCentr';

import data from '../../DATA/DATA';

class ContainerAllTypeMaketCentr extends React.Component {

    render(){
        return(
          <AllTypeMaketCentr data={data}/>
        );

    }
}

export default ContainerAllTypeMaketCentr;