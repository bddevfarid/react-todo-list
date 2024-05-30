"use client";

import React, { useState } from "react";

const Page = () => {


    const [title, setTitle] = useState("");
    // const [desc, setDesc] = useState("");
    const [MainTasks, setMainTasks] = useState([]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        setMainTasks([...MainTasks, title]);
        //console.log(MainTasks);
        setTitle("");
        // setDesc("");
    }


    let renderTasks = (
        <li className="bg-gray-200 text-gray-800 p-3 m-2">
            <h3 className="text-xl">No tasks yet</h3>
        </li>
    )
    if (MainTasks.length > 0) {
        renderTasks = MainTasks.map((task, index) => {
            const removeTask = () => {
                const newTasks = [...MainTasks];
                newTasks.splice(index, 1);
                setMainTasks(newTasks);
            }
            return (
                <li key={index} className="bg-gray-200 text-gray-800 p-3 m-2">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl">{task}</h3>
                        <button onClick={removeTask} className="bg-red-500 text-white px-4 py-2">Delete</button>
                    </div>
                </li>
            );
        });
    }

    return (
        <>
        
        <h1 className="bg-gray-600 text-white text-xl rounded m-10 p-10 text-center">Farid's Todo List</h1>

        <div className="flex justify-center">
            <form className="flex flex-col w-1/3" onSubmit={submitHandler}>
                <input name="text" type="text" placeholder="Enter a task" className="border border-gray-400 p-2 m-2" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
                <button className="bg-blue-500 text-white p-2 m-2">Add</button>
            </form>
        </div>

        <div className="flex justify-center">
            <ul className="w-1/3">
                {renderTasks}
            </ul>
        </div>

        </>
    );

}

export default Page;