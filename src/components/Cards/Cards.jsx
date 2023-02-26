import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
      return(
      
            <div style={{display: 'flex', justifyContent:'space-between'}}>
            
                  {
                        characters.map((per) =>{
                        return<Card 
                        key={per.id} // solo sirve para react !== de id 
                        id={per.id}
                        name={per.name} 
                        species={per.species} 
                        gender={per.gender} 
                        image={per.image}
                        onClose={() => props.onClose(per.id)} 
                        /> 
                        })
                  
                  }
           
            </div>
      ) 
}

