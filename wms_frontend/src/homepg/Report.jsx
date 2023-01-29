import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

export default function Report() {

    const [dataItems, setDataItems] = useState([])
    const itemsCollectionRef = collection(db, 'items')

    useEffect(() => {
        const getItems = async () => {
            const data = await getDocs(itemsCollectionRef)
            setDataItems(data.docs.map(item => ({name: item.data().name, value: item.data().quantity})))
        }
        getItems()
    }, [])

    useEffect(() => {
        console.log(dataItems);
    }, [dataItems])

    return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
            style={{marginLeft:20}}
              dataKey="value"
              isAnimationActive={false}
              data={dataItems}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />          
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );
}