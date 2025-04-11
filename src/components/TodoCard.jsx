import React from 'react'

const TodoCard = ({todo}) => {

  function badgeColor (priority) {
    switch (priority) {
      case "Low": return "badge-info";
      case "Medium": return "badge-warning";
      case "High": return "badge-error";
      default: return "badge-neutral";
    }
  }
  
  return (
    <div className="card bg-base-100 w-96 shadow-sm mt-3">
      <div className="card-body">
        <div className="flex flex-wrap items-center justify-between gap-2">
        
        <div className="flex justify-between items-center">
          <input type="checkbox" className="checkbox mr-5" checked={todo.isCompleted} onChange={() => handleToggle(todo.id)}/>
          
          <div className="text-left">
            <p>{ todo.task }</p>
            <p>{ todo.name }</p>
            <p>Due Date: { todo.dueDate }</p>
          </div>
        </div>
        
        <button className="p-0 text-white" >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 30 30">
            <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
          </svg>
        </button>

        </div>

        <div className="flex items-center justify-center">
          <div className={`badge ${badgeColor(todo.priority)} text-white`}>{ todo.priority }</div>
        </div>
      </div>
    </div>
  )
}

export default TodoCard