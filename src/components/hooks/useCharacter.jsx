import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCharacterDetail,cleanDetail } from "../../redux/actions";

const useCharacter = () =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const character = useSelector((state)=> state.characterDetail);

    useEffect(()=>{
        dispatch(getCharacterDetail(id))//se ejecuta cuando se monta el componente
        
        return ()=>{ //se ejecuta cuado el componente se desmonta 
            dispatch(cleanDetail());
        }
    },[id]);

    return character
}

export default useCharacter;