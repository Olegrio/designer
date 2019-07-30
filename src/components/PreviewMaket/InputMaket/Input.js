import React from 'react';
import $ from 'jquery';
import  './Input.css';




class Input extends React.Component{

componentWillMount(){


  let arrTag = Array.from(document.getElementsByTagName('text')) ;
  let test = (id,text,idElement)=> { document.getElementById(id).insertAdjacentHTML('afterBegin', "<span class='tag' id='"+idElement +"_tag'><span class='close'>&times;</span><span class='textClose'>"+text +"</span></span>") };
  arrTag.map(data =>  test('tags',data.innerHTML,data.id))  ;
      
}

componentDidMount(){
  let arrTag = Array.from(document.getElementsByTagName('text')) ;
}
  render(){
  
    let arrayTag = Array.from(document.getElementsByTagName('text')).map((data)=> <span class='tag'  style='display:none'><span class='close'>&times;</span><span class='textClose'>{data.innerHTML}</span></span>);
    //let arrayTag = Array.from(document.getElementsByTagName('text')).map((data)=> data.innerHTML);

    let state = this.props.state;

      $(document).ready( function() {
       let count = 1;
       $("#tag-typer").keypress( function(event) {
       let key = event.which;
              

       if (key == 13 || key == 44){
       event.preventDefault();
       let tag = $(this).val();
        
       if(tag.length > 0 && document.getElementById($(this)[0].className +"_tag") == undefined ){
       // && document.getElementById($(this)[0].className +"_tag") === undefined
       debugger;         
       $("<span class='tag' id='"+$(this)[0].className +"_tag' count='"+count +"' style='display:none'><span class='close'>&times;</span><span class='textClose'>"+tag+"</span></span>").insertBefore(this).fadeIn(100);
       $(this).val("");
       count++;
        }
       }
       })
            
      $("#tags").on("click", ".close", function() {
      $(this).parent("span").remove(); 
      });

      $("#tags").on("click", ".textClose", function() {
      $(this).parent("span").remove();
      });   
   })
    
    
  
        
return(

   



<label>
<div id="tags">


  <input id="tag-typer" el='' type="text" placeholder="Выберите поле "/>
  
</div>
</label>

)

    }

}


export default Input;
