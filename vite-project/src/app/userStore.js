import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const userStore = (set) => ({
    users: [],
    //adding users
    addUser: (user) => {
        set((state) => ({
            users: [user, ...state.users],
        }))
    },
    //removing users
    removeUsers: (userID) => {
        set((state) => ({
            users: state.users.filter((c) => c.id !== userID)
        }))
    },
    //update each users
    updateUser: (userId, newName, newEmail) => {
        set((state) => ({
            users: state.users.map((user) =>
                user.id === userId ? { ...user, name: newName, email: newEmail } : user
            )
        }));
    }
})

const useUserStore = create(
    devtools(
        persist(userStore, {
            name: "users",
        })
    )
)


export default useUserStore;