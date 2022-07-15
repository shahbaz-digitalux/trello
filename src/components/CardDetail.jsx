import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import MoveCard from "./MoveCard";
import {cardToggle, descriptionUpdated} from "../store/cards/cardSlice";

const CardDetail = ({id}) => {
    const cards = useSelector(state => state.cards.cards);
    const card = cards[id];
    const [moveCard, setMoveCard] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const dispatch = useDispatch();
    return (
        <div
            className=" flex flex-col w-[60] bg-[#f4f5f7] w-[60%] mt-[48px] mb-[80px] mx-[20%] rounded-[2px] p-[16px] select-none">
            <div className="flex justify-between items-center">
                <h1 className="">
                    <span className="fas fa-tasks mr-2"></span>
                    {card.title}
                </h1>
                <span
                    onClick={() => dispatch(cardToggle())}
                    className="fa fa-close text-2xl hover:text-[#172b4d] hover:bg-[#091e4214] px-3 py-2 rounded-[50%]">
                </span>
            </div>
            <div className="-mt-2 pl-6 relative">in list
                <span
                    onClick={() => setMoveCard(true)}
                    className="ml-2 underline hover:text-[#172b4d] cursor-pointer">
                    {card.list}
                </span>
                {moveCard &&
                    <>
                        <div className="fixed w-screen h-screen top-0 left-0 z-10"></div>
                        <MoveCard card={card} setMoveCard={setMoveCard}/>
                    </>
                }
            </div>
            <div className="mt-6">
                <span className="fa-solid fa-bars-staggered mr-2"></span>
                Description
                { (card.description !== "" && !showDescription) && <button
                    onClick={(e) => setShowDescription(true)}
                    className="ml-2 bg-[#091e420a] text-[#172b4d] text-[14px] rounded-[3px] py-[6px] px-[12px] hover:bg-[#091e4214]">
                    Edit
                </button>}
            </div>
            {showDescription ?
                <div className="flex flex-col">
                    <textarea required defaultValue={card.description} placeholder="Add a more detailed description..."
                              className="mt-3 ml-6 description py-[12px] px-[12px] mb-[8px]  min-h-[108px] outline-0 text-[14px] shadow-[inset_0_0_0_2px_#0079bf] rounded-[3px]">

                    </textarea>
                    <div className="ml-6 flex items-center space-x-2">
                        <button
                            onClick={(e) => {
                                const description = document.querySelector(".description").value;
                                if (description.trim().length === 0) {
                                    dispatch(descriptionUpdated({"id": card.id, "description": description.trim()}));
                                    setShowDescription(false);
                                    return;
                                }
                                dispatch(descriptionUpdated({"id": card.id, description}));
                                setShowDescription(false);
                            }}
                            className="bg-[#0079bf] text-white rounded-[3px] py-[6px] px-[12px] hover:bg-[#026aa7]">
                            Save
                        </button>
                        <button
                            onClick={(e) => setShowDescription(false)}
                            className="bg-none text-[#172b4d] rounded-[3px] py-[6px] px-[12px] hover:bg-[#091e4214]">
                            Cancel
                        </button>
                    </div>
                </div>
                : card.description === "" ?
                    <div
                        onClick={() => setShowDescription(true)}
                        className="mt-6 ml-6 py-[8px] px-[12px] pb-[35px] rounded-[3px] bg-[#091e420a] hover:bg-[#091e4214] cursor-pointer">Add
                        a more detailed description...
                    </div>
                    : <div
                        onClick={() => setShowDescription(true)}
                        className="mt-3 ml-6 cursor-pointer">
                        {card.description}
                    </div>

            }
            {/**/}
        </div>
    );

}
export default CardDetail;
