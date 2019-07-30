import React, { Component } from 'react';

import styled from 'styled-components';
import {connect} from 'react-redux';

import Slider from 'react-slick';
import ContainerOneTypeMaket from '../OneTypeMaket/ContainerOneTypeMaket';
import st from './Slide.module.css';

const Wrapper = styled.div`
    text-align:center;
    width:90%;
    margin-bottom:30px;
`;

const Page = styled.div`

width: 100px;
transform: matrix(0.4, 0, 0, 0.4, 0, 0);

focus::outline: -webkit-focus-ring-color auto 0px;
`;

class SlideView extends React.Component {
    constructor (props){
        super(props);
        
    
        
      this.arrayOneUser = props.data.map( (data,i) =><div key={'arrContainerOneTypeMaket-'+i} className={st.element}> <Page > <ContainerOneTypeMaket data={data} /> </ Page></div> );
  }

render(){

    return(

            <Wrapper>

                <Slider
                    speed={500}
                    slidesToShow={8}
                    slidesToScroll={1}
                    infinite={false}
                    dots={false}
                    arrows={true}
                >
                { this.arrayOneUser}

                </Slider>
            </Wrapper>
    );
}

}

export default SlideView;