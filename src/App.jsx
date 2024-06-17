import { useSelector } from "react-redux";
import { selectTodos } from "./slices/todosSlice";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
    const todos = useSelector(selectTodos);
    // const dispatch = useDispatch();
    console.log(todos);

    return (
        <>
            <h1>Todo List</h1>

            <section>
                <TaskList />
            </section>
        </>
    );
}

export default App;
