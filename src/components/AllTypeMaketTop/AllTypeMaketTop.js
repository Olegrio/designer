import React from 'react';
import {Route} from 'react-router-dom';

import st from './AllTypeMaketTop.module.css';
import ContainerPreviewMaket from '../PreviewMaket/ContainerPreviewMaket';
import Slide from '../Slide/Slide';



class AllTypeMaketTop extends React.Component {


render(){

let data = this.props.data; 
let state = this.props.state;

let arrPreviewMaket = data.map( (data,i) => <Route   
key={'arrPreviewMaket-'+i}  path={'/preview/'+data.type } data={data} render={ () => <ContainerPreviewMaket key={'ContainerPreviewMaket-'+i} state={state} data={data.maket} type={data.type} type_name={data.type_name} />} /> ) ;


    return(

      <div className={st.top}>
          <div className={st.arrContainerOneTypeMaket}>
            <Slide data={data} />
          </div>
          <div className={st.arrPreviewMaket}>
            {arrPreviewMaket}
          </div>
      </div>
    );
  }
}


export default AllTypeMaketTop;