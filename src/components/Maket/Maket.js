import React from 'react';
import $ from 'jquery';
import st from './Maket.module.css';


class Maket extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.state;
  }
    

componentWillMount(){
  let state = this.state;

   //так себе решение. заполняем поля на превью значенияими из state каждые 500ms 
  //  setInterval(function() {
  //      state.fill_maket();
  //      console.log('interval');
  //   }, 500);

   //Получаем SVG по ссылке переданной в props и вставляем SVG в блок maket 
    fetch(this.props.src).then(function(response) {return response.text()}).then(svg=> 
    document.getElementById('maket').innerHTML = svg).then( state.fill_maket());
  

    document.addEventListener("click", function (e) {
        console.log(e.target.id);
        
        e.target.id !== '' && e.target.id !== "tag-typer" && e.target.id !== "tags" ? state.createValue(e.target.id) :document.getElementById("tag-typer").disabled = true ;
        
    });
 
}

render(){

    return(
    <div>    
    <div id='maket' className={st.maket}></div>    
    <div id="inputs" > </div>
    </div>
    );
}
componentDidMount(){
  let state = this.state;
  
  setTimeout(function() {
    
    let arr =Array.from(document.getElementsByTagName('text'));
    let arr2 =Array.from(document.getElementsByClassName('tag'));
    arr2.map(data=>data.remove());
    
    arr.map((data,key)=>$("<span class='tag' id='"+data.id +"_tag' count='"+1 +"' style='display:none'><span class='close'>&times;</span><span class='textClose'>"+data.innerHTML+"</span></span>").insertBefore('input#tag-typer').fadeIn(100) );
    
    
       }, 500);

}
}


export default Maket;
