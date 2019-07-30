import React from 'react';
import {NavLink} from 'react-router-dom';

import st from './OneTypeMaket.module.css';



class OneTypeMaket extends React.Component {

render(){

let data =this.props.data;
let custom_style = data.custom_style ;      
let arrayPreview = data.svg_preview.map( (svg_preview,i) => <NavLink key={svg_preview.SVG+'-'+i} sert={svg_preview.SVG} to={"/preview/"+data.type +'/' + svg_preview.SVG} className={st.OneTypeMaket_div} activeClassName={st.active}> <img alt="" className={st.OneTypeMaket_img}  src={svg_preview.img} /></NavLink> );

    return(
        <div className={st.OneTypeMaket} style={custom_style} > 
            <div className={st.OneTypeMaket_top}></div>
            <div className={st.OneTypeMaket_centr}>
                {arrayPreview}      
            </div>
            <div className={st.OneTypeMaket_bottom}>
            <NavLink className={st.OneTypeMaket_bottom_label} to={"/preview/"+data.type}><p>{data.type_name}</p></NavLink>
            </div>
        </div>
    );
  }
}

export default OneTypeMaket;


