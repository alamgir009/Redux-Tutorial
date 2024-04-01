import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../App.css'
import { addUser, deleteUser, editUser } from './todoSlice';

function ShowUsers() {
const users = useSelector((state)=>state.user)
const dispatch = useDispatch()

    const handleDelete = (index) =>{
        dispatch(deleteUser(index))
    }

    const [formData, setFormData] = useState({
        name:"",
        email:""
    })

    const [editedForm, setEditedForm] = useState({
        name:"",
        email:""
    })

    const [showEditform, setShowEditform] = useState(false)

    const [indexEdit, setIndexEdit] = useState(null)

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData((data)=>({
            ...data,[name]:value
        }))
    }

    const handleEditedChangle = (e)=>{
        const {name, value} = e.target;
        setEditedForm((data)=>({
            ...data, [name]:value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addUser(formData))
        setFormData({
            name:"",
            email:""
        })
    
    }

    const handleEdit = (index)=>{
        // dispatch(editUser(i))
        setShowEditform(true)
        const data = users.find((_,i)=> i === index)
        setEditedForm(data)
        setIndexEdit(index)
    }

    const onEdit = (e)=>{
        e.preventDefault();
        dispatch(editUser({index:indexEdit, newData:editedForm}))
        setShowEditform(false)
        setIndexEdit(null)
    }

  return (
    <>
    <h1>ShowUsers</h1>

    {showEditform && (
        <form onSubmit={onEdit}>
            <label htmlFor="name">
                <input type="text" name='name' id='name' value={editedForm.name} onChange={handleEditedChangle}/>
            </label>

            <label htmlFor="email">
                <input type="email" name='email' id='email' value={editedForm.email} onChange={handleEditedChangle}/>
            </label>
            <button type='button' onClick={()=>setShowEditform(false)}>X</button>
            <button>Save</button>
        </form>
    )}

    <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name
            <input type="text" id='name' name='name' 
            value={formData.name}
            onChange={handleChange}
             />
        </label>

        <label htmlFor="email"> Email
            <input type="email" id='email' name='email' 
            value={formData.email}
            onChange={handleChange}
             />
        </label>
        <div>
            <button >ADD</button>
        </div>
    </form>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <thead>
            {
                users.map((data,i)=>(
                    <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td><button onClick={()=>handleEdit(i)}>edit</button><button onClick={()=>handleDelete(i)}>delete</button></td>
                    </tr>
                ))
            }
        </thead>
    </table>
    </>
  )
}

export default ShowUsers