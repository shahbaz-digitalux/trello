import {createSlice} from "@reduxjs/toolkit";

const ID = localStorage.getItem("lastId");
let lastId = ID ? parseInt(ID) : 0;
const CARDS = localStorage.getItem("cards");
console.log(ID);
console.log(CARDS);
const cardSlice = createSlice({
    name: "Cards",
    initialState: {cards: CARDS ? JSON.parse(CARDS) : {}, card: {show: false, id: -1}},
    reducers: {
        cardAdded(state, action) {
            console.log("CARD ADDED");
            const card = action.payload;
            card.id = ++lastId;
            card.description = "";
            state.cards[card.id] = card;
            console.log(card);
        },
        cardDeleted(state, action) {
            console.log("CARD DELETED");
            delete state.cards[action.payload];
        },
        cardToggle(state, action) {
            console.log("CARD TOGGLE");
            state.card.show = !state.card.show;
            if (state.card.show)
                state.card.id = action.payload;
        },
        listChanged(state, action) {
            console.log("LIST CHANGED");
            const card = action.payload;
            state.cards[card.id] = card;
        },
        descriptionUpdated(state, action) {
            console.log("DESCRIPTION UPDATED");
            const card = action.payload;
            state.cards[card.id] = {...state.cards[card.id], "description": card.description};
        },
        saveToLocalStorage(state, action) {
            console.log("SAVING TO LOCAL STORAGE");
            const cards = action.payload;
            localStorage.setItem("lastId", lastId.toString());
            localStorage.setItem("cards", JSON.stringify(cards));
        },
        cardAddedAtIndex(state, action) {
            console.log("CARD ADDED AT INDEX");
            const card = action.payload;
            // const cards=state.cards;
            state.cards[++lastId] = card;
            const temp = {};
            let i = 1;
            for (let index in state.cards) {
                if (i !== card.id) i++
                state.cards[index] = state.cards[i];
                i++;
            }

            //     temp[prop]=cards[prop];
            //     i++;
            // }
            // state.cards=temp;
            // console.log(temp);
        }
    }
});

export const {
    cardAdded,
    cardDeleted,
    cardToggle,
    listChanged,
    descriptionUpdated,
    cardAddedAtIndex,
    saveToLocalStorage
} = cardSlice.actions;
export default cardSlice.reducer;
