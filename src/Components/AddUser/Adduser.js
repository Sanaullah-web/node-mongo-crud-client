import React from 'react';

const Adduser = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email }

        fetch('http://localhost:5000/user', {
            method: "post",
            headers: {
                "content-type": 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('user added successfully');
                console.log(data);
            })
    }

    return (
        <div>
            <h2>Please add a user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" required />
                <input type="email" name="email" required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Adduser;