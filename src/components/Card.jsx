const Card = ({name, setCards}) => (
    <div
        className="mb-[5px] flex justify-between items-center bg-[#ffffff] rounded-[3px] text-[#5e6c84] py-[1px] px-[8px] cursor-pointer hover:bg-[#f4f5f7] shadow-[0_1px_0_#091e4240]">
        {name}
        <span onClick={(e) => {
            setCards((prevCards) => {
                return prevCards.filter((card) => card !== name);
            })
        }} className="fa fa-close hover:text-[#172b4d]"></span>
    </div>
);
export default Card;
