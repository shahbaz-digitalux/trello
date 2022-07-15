import List from "./List";
import {useDispatch, useSelector} from "react-redux";
import CardDetail from "./CardDetail";
import {DragDropContext} from "react-beautiful-dnd";
import {listChanged, saveToLocalStorage} from "../store/cards/cardSlice";
import {useLayoutEffect} from "react";

const Home = () => {
    const cards = useSelector(state => state.cards.cards);
    const cardDetails = useSelector(state => state.cards.card);
    const dispatch = useDispatch();
    window.onbeforeunload = function(event)
    {
        console.log("UNMOUNTING...")
        dispatch(saveToLocalStorage(cards));
    };
    useLayoutEffect(() => {
        return () =>{

        }
    }, [])

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }


        const sourceCard = {...cards[result.source.index], "list": result.destination.droppableId};
        dispatch(listChanged(sourceCard));
        // dispatch(cardDeleted(sourceCard.id));
        // dispatch(cardAddedAtIndex(sourceCard));
        // dispatch(listChanged(sourceCard));


        // console.log(sourceCard.id);
        // console.log(size(cards));
        // dispatch(cardAddedAtIndex({sourceCard,"index":result.destination.index}));
        // dispatch(listChanged(sourceCard))
        // console.log("SOURCE ID: ", result.source.droppableId);
        console.log("SOURCE INDEX: ", result.source.index);
        // const sourceCard=cards[result.source.index];
        // console.log(sourceCard);
        // console.log("DESTINATION ID: ",result.destination.droppableId);
        console.log("DESTINATION INDEX: ", result.destination.index);
        // const listCopy = { ...elements }
        //
        // const sourceList = listCopy[result.source.droppableId]
        // const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index)
        // listCopy[result.source.droppableId] = newSourceList
        //
        // const destinationList = listCopy[result.destination.droppableId\]
        // listCopy[result.destination.droppableId] = addToList(destinationList, result.destination.index, removedElement)
        //
        // setElements(listCopy)
    }
    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex justify-evenly">
                    <List listTitle="To Do"/>
                    <List listTitle="Doing"/>
                    <List listTitle="Done"/>
                    <List listTitle="Completed"/>
                </div>
            </DragDropContext>
            {cardDetails.show && <>
                <div className="fixed top-0 left-0 flex items-start justify-center w-screen h-screen bg-[#000000a3]">
                    <CardDetail id={cardDetails.id}/>
                </div>
            </>}
        </>
    );
};

export default Home;
