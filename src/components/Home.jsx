import List from "./List";

const Home = () => (
    <div className="flex justify-evenly">
        <List name="To Do" />
        <List name="Doing" />
        <List name="Done" />
        <List name="Completed" />
    </div>
);

export default Home;
