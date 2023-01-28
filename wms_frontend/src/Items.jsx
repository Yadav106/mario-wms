import React from 'react'
import {db} from './firebase-config'
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore'
import { useState, useEffect } from 'react'
import './styles.css'

const Items = () => {

    const [data, setData] = useState([])
    const usersCollectionRef = collection(db, "items")

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(usersCollectionRef)
            setData(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        getData()
    }, [])

    return (
    <div>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Check In</th>
                <th>Expiry</th>
                <th>Rack No.</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {data.map(item => {
            return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.checkInDate}</td>
                    <td>{item.expDate}</td>
                    <td>{item.rackNo}</td>
                    <td>{item.quantity}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
    )
}

export default Items
