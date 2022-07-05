import Card from "./Card";
import {useState} from "react";

const List = ({name}) => {
    const [cards, setCards] = useState([]);
    const [showCard, setShowCard] = useState(false);
    return (
        <div className="w-[272px] flex flex-col bg-[#EBECF0] rounded-[3px] py-[2px] px-[8px] pb-[5px] select-none">
            <div className="font-bold py-[4px] px-[8px]">
                {name}
            </div>
            {cards.map((curr, index) => <Card key={index} name={curr} setCards={setCards}/>)}
            {showCard ? <div className="flex flex-col">
                <textarea required placeholder="Enter a title for this card..."
                          className="cardLabel px-[8px] overflow-hidden mb-[8px] max-h-[162px] min-h-[54px] p-0 outline-0 text-[14px] shadow-[0_1px_0_#091e4240] rounded-[3px]">

                </textarea>
                <div className="flex items-center space-x-4">
                    <button onClick={(e) => {
                        const cardLabel = document.querySelector(".cardLabel").value;
                        if (cardLabel.trim().length === 0)
                            return;
                        setShowCard(false);
                        setCards((prevCards) => {
                            return [...prevCards, cardLabel];
                        })
                    }
                    } className="bg-[#0079bf] text-white rounded-[3px] py-[6px] px-[12px] hover:bg-[#026aa7]">
                        Add card
                    </button>
                    <span onClick={(e) => {
                        setShowCard(false);
                    }
                    } className="fa fa-close text-[#6b778c] text-2xl hover:text-[#172b4d]"> </span>

                </div>
            </div> : <button onClick={(e) => {
                setShowCard(true);
            }} className="flex rounded-[3px] text-[#5e6c84] py-[4px] px-[8px] cursor-pointer hover:bg-[#091e4214]">
                <span className="fa-solid fa-plus mt-1 mr-1"></span>Add a card
            </button>}

        </div>
    );
};

export default List;
