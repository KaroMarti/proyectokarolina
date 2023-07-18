import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const Celebrities_List = ({ celebrities }) => {
    const dispatch = useDispatch();
    const {celebrities_List} = useSelector (state => state.Celebrities_List)
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
                    </div>)
            }
            )}
            </div>
        </div>
    )
}

export default Celebrities_List