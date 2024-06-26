import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "../src/slices/todosSlice";
import axios from "axios";

export async function getTask() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateTask(task) {
    try {
        const response = await axios.patch(
            `https://jsonplaceholder.typicode.com/todos/${task.id}`,
            { ...task, title: task.title }
        );

        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function deleteTask(taskId) {
    try {
        const response = await axios.delete(
            `https://jsonplaceholder.typicode.com/todos/${taskId}`,
            { id: taskId }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
