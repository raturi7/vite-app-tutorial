import React, { useState } from 'react';
import useUserStore from '../app/userStore';

function UserList() {
    const { users, removeUsers, updateUser } = useUserStore((state) => ({
        users: state.users,
        removeUsers: state.removeUsers,
        updateUser: state.updateUser,
    }));

    const [editUserId, setEditUserId] = useState(null);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleEditClick = (user) => {
        setEditUserId(user.id);
        setNewName(user.name);
        setNewEmail(user.email);
    };

    const handleUpdateUser = (id) => {
        updateUser(id, newName, newEmail);
        setEditUserId(null);
        setNewName('');
        setNewEmail('');
    };

    return (
        <>
            <ul>
                {users.map((user, i) => (
                    <React.Fragment key={i}>
                        <li className="user-item">
                            {editUserId === user.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        placeholder="New Name"
                                    />
                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        placeholder="New Email"
                                    />
                                    <button
                                        onClick={() => handleUpdateUser(user.id)}
                                        className="update-btn"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditUserId(null)}
                                        className="cancel-btn"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span>{user?.name}</span>
                                    <span>{user?.email}</span>
                                    <button
                                        onClick={() => removeUsers(user.id)}
                                        className="delete-btn"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="edit-btn"
                                    >
                                        Edit
                                    </button>
                                </>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </>
    );
}

export default UserList;
