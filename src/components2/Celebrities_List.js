import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCel, setCel } from "../reducers/slices/celSlices";

const Celebrities_List = ({ celebrities }) => {
    const dispatch = useDispatch();
    const {celebrities_List} = useSelector (state => state.cel)
    function handleAdd (celid) {
        const celebrity = celebrities.find(c=> c.birthday === celid);
        if(celebrities_List.find(c => c.birthday === celid)){
            dispatch(removeCel(celid));
        } else {
            dispatch(setCel(celebrity));
            
        }
        console.log(celebrity);
        
    }
//pendiente boton en el return para agregar al redux, generar un handle para disparar  el dispatch


    return (
        <div>
            <div>Celebrities_List</div>
            <div>{celebrities.map(c => {
                return (
                    <div>
                        <h4>{c.name}</h4>
                        <h2>{c.age}</h2>
                        <div>{c.occupation}</div>
                        <button onClick={()=> handleAdd (c.birthday)}>Agregar a celebridades favoritas</button>
                    </div>)
            }
            )}
            </div>
        </div>
    )
}

export default Celebrities_List