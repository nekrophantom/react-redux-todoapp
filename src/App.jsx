import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./components/todoCard";
import { addTodo } from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todo)  
  
  const [name, setName]         = useState("");
  const [date, setDate]         = useState("");
  const [task, setTask]         = useState("");
  const [priority, setPriority] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !task || !priority) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      name: name,
      dueDate: `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}/${date.getFullYear()}`,
      task: task,
      priority: priority,
      isCompleted: false,
    };

    dispatch(addTodo(newTodo))

    setName("");
    setDate("");
    setTask("");
    setPriority("");
  } 
  
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box w-full">
                <h1 className="card-title flex justify-center text-4xl font-bold">Todo App - RTK</h1>

                <label className="fieldset-label">Name - Title</label>
                <input type="text" className="input" placeholder="John - IT" value={name} onChange={(e) => setName(e.target.value)}/>
                
                <label className="fieldset-label">Due Date</label>
                <button type="button" popovertarget="rdp-popover" className="input input-border" style={{ anchorName: "--rdp" }}>
                  {date ? date.toLocaleDateString() : "Pick a date"}
                </button>
                <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" }}>
                  <DayPicker className="react-day-picker" mode="single" selected={date} onSelect={setDate} />
                </div>

                <label className="fieldset-label">Task</label>
                <textarea className="textarea" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)}></textarea>

                <label className="fieldset-label">Priority Level</label>
                <select className="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option disabled={true} value="">Pick the Priority Level</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                
                <button className="btn btn-neutral mt-4" type="submit">Submit</button>
              </fieldset>
            </form>

            {
              todos.map((todo) => (
                  <TodoCard key={todo.id} todo={todo}/>
                )
              )
            }

          </div>
        </div>
      </div>    
    </>
  )
}

export default App
