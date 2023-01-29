import React from 'react'
import './styles.css'
import { db } from '../firebase-config'
import { addDoc, collection, doc } from 'firebase/firestore'
import { useState } from 'react'

const Entry = () => {

    const [name, setName] = useState('')
    const [cid, setCid] = useState('')
    const [exp, setExp] = useState('')
    const [rack, setRack] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const itemsCollectionRef = collection(db, 'items')

    const addItem = async (e) => {
        e.preventDefault()
        await addDoc(itemsCollectionRef, {name: name, rackNo: Number(rack), checkInDate: cid, expDate: exp, quantity: Number(quantity)})
        setName('')
        setCid('')
        setExp('')
        setRack(0)
        setQuantity(0)
    }

    return (
    <form className='entry--items'>
        Name : <input onChange={(e) => setName(e.target.value)} value={name} className='input'/>
        Check In Date: <input onChange={(e) => setCid(e.target.value)} value={cid}/>
        Expiry Date : <input onChange={(e) => setExp(e.target.value)} value={exp}/>
        Rack No. : <input type='number' onChange={(e) => setRack(e.target.value)} value={rack}/>
        Quantity : <input type='number' onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
        <button className='itemAdd--button' onClick={addItem}>Add Item</button>
    </form>
    )
}

export default Entry