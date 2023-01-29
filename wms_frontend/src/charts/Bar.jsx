import React, { useState } from 'react'
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

const Bar = () => {
    const itemsCollectionRef = collection(db, "items")
    const [data, setData] = useState([])
    const [barData, setBarData] = useState({})

    anychart.onDocumentReady(function () {

        anychart.theme(anychart.themes.darkEarth);

        var chart = anychart.bar();
        chart.data(barData);
        chart.title("Items on a rack");
        chart.container("container");
        chart.draw();
    });

    useEffect(() => {
        const getItems = async () => {
            const data = await getDocs(itemsCollectionRef)
            setData(data.docs.map(item => ({rack: item.data().rackNo, quantity: item.data().quantity})))
        }
        getItems()
    }, [])

    useEffect(() => {
        let max_rack = 0
        for(let i = 0; i < data.length; i++){
            if(data[i].rack > max_rack) {
                max_rack = data[i].rack
            }
        }
        let dataItems = Array(max_rack).fill(0)
        for(let i = 0; i < data.length; i++){
            dataItems[(data[i].rack)-1] += data[i].quantity
        }
        console.log(dataItems);

        setBarData({
            header: ['Rack', 'Quantity of items on Rack'],
            rows: dataItems.map((item, index) => {
                return [`${index+1}`,item]
            })
        })
    }, [data])

    return (
    <div>
        <div id="container" style={{height: '400px'}}></div>
    </div>
    )
}

export default Bar
