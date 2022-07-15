import {useDispatch} from 'react-redux';
import {cardDeleted, cardToggle} from "../store/cards/cardSlice";
import {Draggable} from "react-beautiful-dnd";

const Card = ({card}) => {
    const dispatch = useDispatch();
    return (
        <Draggable draggableId={card.id.toString()} index={card.id}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mb-[5px] flex justify-between items-center bg-[#ffffff] rounded-[3px] text-[#5e6c84] py-[1px] px-[8px] cursor-pointer hover:bg-[#f4f5f7] shadow-[0_1px_0_#091e4240]">
                    <h1 className="w-[90%]" onClick={() => dispatch(cardToggle(card.id))}>{card.title}</h1>
                    <span
                        onClick={(e) => dispatch(cardDeleted(card.id))}
                        className="fa fa-close hover:text-[#172b4d]">
            </span>
                </div>
            )}
        </Draggable>
    )
};
export default Card;
