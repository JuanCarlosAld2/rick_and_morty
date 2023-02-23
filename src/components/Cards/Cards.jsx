import Card from '../Card/Card';
export default function Cards(props) {
   const { characters } = props;
      return(
      
            <div style={{display: 'flex', justifyContent:'space-between'}}>
            
                  {
                        characters.map((per) =>{
                        return<Card 
                        id={per.id}
                        name={per.name} 
                        species={per.species} 
                        gender={per.gender} 
                        image={per.image}
                        onClose={() => window.alert('Emulamos que se cierra la card')} 
                        /> 
                        })
                  
                  }
           
            </div>) 
}

