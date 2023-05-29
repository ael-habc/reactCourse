import React from 'react'
import { useState, useEffect } from 'react';

export default function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log('Updating Items');
    }, [getItems]);
  return (
    <div>
        {items.map(item => <div key={item}>{item}</div>)}
    </div>
  )
}
