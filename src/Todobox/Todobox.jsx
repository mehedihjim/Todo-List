import React, { useEffect, useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";


const Todobox = () => {
    const db = getDatabase();
    let [task, setTask] = useState("")
    let [allTodos, setAllTodos] = useState([])

    let handleInput = (inputValue) => {
        setTask(inputValue.target.value)
    }

    let handleSubmit = () => {
        if (allTodos.length >= 10) {
            alert('The task limit reached, To add more than 200+ task get premium');
            return;
        }

        set(push(ref(db, 'todos/')), {
            todos: task
        }).then(() => {
            setTask("")
            alert('Task Added Successfully!')
        })
    }

    let [id, setId] = useState()

    useEffect(() => {
        const todosRef = ref(db, 'todos/');
        let array = [];
        onValue(todosRef, (snapshot) => {
            array = [];
            snapshot.forEach((item) => {
                array.push({ ...item.val(), key: item.key });
            });
            setAllTodos(array);
        });
    }, []);
    //*** */ Write & Read Done ******//////////////
    let [editModal, setEditModal] = useState(false)

    let handleEdit = (id) => {
        setId(id)
        setEditModal(true)
    }

    let handleBoxhide = () => {
        setEditModal(!editModal)
    }

    // edit input data

    let [updatedTask, setUpdatedTask] = useState('')

    let handleUpdateTask = (editData) => {
        setUpdatedTask(editData.target.value)
    }

    let handleUpdate = () => {
        update(ref(db, 'todos/' + id), {
            todos: updatedTask
        }).then(() => {
            setEditModal(false)
        })
    }

    function handleDelete(id) {
        remove(ref(db, 'todos/' + id))
    }


    return (
        <div id="Todobox" className='w-[500px] h-[80vh] px-[40px] py-[28px] bg-white rounded-[10px] mx-auto mt-[36px] shadow-custom-inset relative'>
            <input onChange={handleInput} value={task} type="text" placeholder='Add Task Here!' className='w-full mb-[18px] py-[6px] px-[8px] border-slate-400 border-b-[2px]' />
            <button onClick={handleSubmit} className='bg-slate-800 text-white w-[40%] text-[16px] py-[12px]'>Add Task</button>
            <div className="tasklist">
                <ul className='pt-[60px] px-[30px]'>
                    {allTodos.map((item) => {
                        return (
                            <li key={item.key} className='w-full py-[8px] border-b border-slate-400 mb-[12px] flex justify-between'>{item.todos}
                                <div className="btns flex gap-[12px]">
                                    <button className='py-[2px] px-[6px] rounded-[3px] text-[14px] bg-green-500 hover:bg-green-600 transition-all duration-150 ease-linear' onClick={() => handleEdit(item.key)}>edit</button>
                                    <button className='text-red-800' onClick={() => handleDelete(item.key)}><FaDeleteLeft />
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <p className='absolute left-[50%] translate-x-[-50%] bottom-[2px] text-slate-400'>Todo List by <a href="#">©MH Jim</a></p>

            {editModal &&
                <div className="editBox p-[50px] w-[600px] h-[200px] bg-slate-100 rounded-[10px] absolute top-[95px] left-[50%] translate-x-[-50%]">
                    <input type="text" placeholder='Edit your task~' onChange={handleUpdateTask} className='bg-transparent w-full mb-[18px] py-[6px] px-[8px] border-slate-400 border-b-[2px]' />
                    <button className='bg-slate-800 text-white w-[40%] text-[16px] py-[12px]' onClick={handleUpdate}>Edit Task</button>

                    <button className='absolute right-2 top-2 text-red-800 text-[20px]' onClick={handleBoxhide}><IoIosCloseCircle /></button>
                </div>

            }
        </div>
    )
}

export default Todobox
