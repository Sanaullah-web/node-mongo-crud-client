import React, { useEffect, useState } from 'react';


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure to procced with deletion')
        if (confirmation) {
            // const url = `http://localhost:5000/user/${id}`;
            fetch(`http://localhost:5000/user/${id}`, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining);
                    }
                })
            console.log('deleting id: ', id);
        }

    }
    return (
        <div>
            <h1>This is Home. Available Data: {users.length}</h1>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >{user.name}
                        <button onClick={() => handleDelete(user._id)}>delete</button></li>)
                }
            </ul>
        </div>
    );
};

export default Home;