import React from 'react'
import { useLocation, useHistory } from 'react-router'
import { useState } from 'react'

const initalState = {
    category: ''
}

export default function CategoryPage() {

    const [category, setCategory] = useState(initalState.category)
    const location = useLocation()
    const history = useHistory()
    const query = new URLSearchParams(location.search)
    const name = query.get('name') || 'romantic'

    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    const handleSubmit = () => {

        query.set('name', name +', ' + category)
        history.push({search:query.toString()})
    }
    return (
        <div>
            <h1>CategoryPage</h1>
            <h2>Category: {name}</h2>
            <input type ='text' name = 'category' value = {category} onChange ={handleChange}/>
            <button onClick = {handleSubmit}>Next</button>
        </div>
    )
}
