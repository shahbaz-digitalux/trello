import Card from "./Card";
import {useState} from "react";

const addCard = (event) => {
    const btn = event.target;
    btn.style.display = "none";
}

const List = ({name}) => {
    const [cards, setCards] = useState([]);
    return (
        <div className="flex flex-col bg-[#EBECF0] rounded-[3px] py-[2px] px-[8px] pb-[5px] select-none">
            <div className="font-bold py-[4px] px-[8px] ">
                {name}
            </div>
            {cards.map((curr, index) => <Card key={index}/>)}
            <div className="">
                <textarea>

                </textarea>
                <div>
                    <button>
                        Add card
                    </button>
                    <span className="fa fa-close"> </span>

                </div>
            </div>
            <button onClick={(e) => addCard(e)}
                 className="flex rounded-[3px] text-[#5e6c84] py-[4px] px-[8px] cursor-pointer hover:bg-[#091e4214]">
                <span className="fa-solid fa-plus mt-1 mr-1"></span>Add a card
            </button>
        </div>
    );
};

export default List;
