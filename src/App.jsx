import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "./slices/todosSlice";
import "./App.css";

function App() {
    const todos = useSelector(selectTodos);
    // const dispatch = useDispatch();
    console.log(todos);

    return (
        <>
            <h1>Redux App</h1>

            <section>
                {todos &&
                    todos.map((todo) => {
                        return (
                            <div key={todo.id} style={{ display: "flex" }}>
                                <input type="checkbox" />
                                <button>edit</button>
                                <button>delete</button>
                                <div>{todo.title}</div>
                            </div>
                        );
                    })}
            </section>
        </>
    );
}

export default App;
