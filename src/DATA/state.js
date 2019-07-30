let state  = {
    _site_value: 'WWW.SLETAT.RU',
    _phone_value: '8 800 333-99-63 ',
    _adress_value:'г. Санкт-Петербург, пл. Карла Фаберже, д. 8 литер б.',
    render_value(el){
        let value;
        
        switch(el){


            case 'SITE':
            value =  this._site_value;
            break;

            case 'PHONE':
            value = this._phone_value;
            break;

            case 'ADRESS':
            value = this._adress_value;
            break;

            default:
            value='';
        }
    return value;},
   add_value(text, el){
       
    switch (el){
       
        case "SITE":
            this._site_value = text;
        break;
        
        case "PHONE":
            this._phone_value =   text;
        break;

        case "ADRESS":
            this._adress_value =  text;
        break;

        default:
        console.log('нет value для данного id')
    };},

    fill_maket(){
        
        let arrText = Array.from(document.getElementsByTagName('text'));
        arrText.map(data => document.getElementById(data.id).innerHTML = this.render_value(data.id) );
        console.log('fill');
        },
    addText (){

            let arrTag = Array.from(document.getElementsByTagName('text')) ;
            document.getElementById('tags').innerHTML = '';
            let test = (id,text,idElem)=> {  (document.getElementById(id).insertAdjacentHTML('afterBegin', "<span class='tag' id='"+idElem +"_tag' ><span class='close'>&times;</span><span class='textClose'>"+text +"</span></span>") )};
            arrTag.map(data =>  test('tags',data.innerHTML,data.id))  ;
            console.log('addText')
        },
    createValue (e){

    document.getElementById("tag-typer").disabled = false;
           
            let addInputCrValue = (el) =>{

                document.getElementById('tag-typer').setAttribute('el', el);
                document.getElementById('tag-typer').setAttribute('class', el);
                document.getElementById('tag-typer').focus();
                document.getElementById('tag-typer').value = this.render_value(el) ;
              
               
                
                document.getElementById('tag-typer').oninput = function(e){
                    console.log(e.target.value + ' ' +e.target.classList[0]); 
                  
                    state.add_value(e.target.value,e.target.classList[0]);
                    
                    state.fill_maket();
                };
                }
        
         addInputCrValue(e);
        }      
    

}

export default state;