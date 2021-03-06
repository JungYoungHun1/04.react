import React from 'react'

function CreateUser({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input name="username" onChange={onChange} value={username} />
            <input name="email" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUser
