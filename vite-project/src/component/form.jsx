import React, {useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import useUserStore from '../app/userStore'

function form() {
    const addUser = useUserStore((state) => state.addUser)

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    console.log("User Form Rendered");

    const handleUserSubmit = () => {
        if(!userName || !userEmail) return alert("Please Enter User Name and Email");

        addUser({
            id: Math.ceil(Math.random() * 1000000),
            name: userName,
            email: userEmail
        })
        setUserName("")
        setUserEmail("")
    }
  return (
    <>
     <div className=''>
        {/* <label for="price" className="block text-sm font-medium leading-6 text-center text-gray-900">Email Address</label> */}
        <div className="flex justify-center relative mt-2 rounded-md shadow-sm">
          {/* <div className ="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className ="text-gray-500 sm:text-sm"><FontAwesomeIcon icon={faEnvelope} /></span>
          </div> */}
          <input type="text" name="name" id="name" className="block w-3/12 rounded-md border-0 mx-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Name" value={userName} onChange={(e) => setUserName(e.target.value)} />

          <input type="email" name="email" id="email" className="block w-3/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter Email Address" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        

          <button className="relative inline-flex items-center justify-center p-0.5 mx-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-dark focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick={() => {
            handleUserSubmit();
          }} >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </div> 
    </>
  )
}

export default form
