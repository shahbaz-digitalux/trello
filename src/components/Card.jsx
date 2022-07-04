const Card=({name})=>(
    <div className="flex justify-between items-center bg-[#ffffff] rounded-[3px] text-[#5e6c84] py-[1px] px-[8px] cursor-pointer hover:bg-[#f4f5f7] shadow-[0_1px_0_#091e4240]">
        {name}
        <span className="fa fa-close"></span>
    </div>
);
export default Card;
