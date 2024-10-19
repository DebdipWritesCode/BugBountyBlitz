import BugsTable from '@/components/BugsTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getToken, removeToken } from '@/services/authService'
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ViewBugs = () => {

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = getToken();

    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUserId(decodedUser.id);
      } catch (err) {
        console.log("Error decoding token:", err);
        removeToken();
        toast.error("Internal Server Error")
      }
    }

    setLoading(false);

  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div>
        <div className="mb-5">
          <p className="font-bold text-3xl mb-7">
            Your Bugs
          </p>
          <div className="flex items-center justify-start">
            <Input type="text" placeholder="Search Submitted Bugs" className="w-56 mr-3" />
            <Button>Search</Button>
          </div>
        </div>
        <div>
          {loading ? (<div>Loading all bugs...</div>) : (<BugsTable userId={userId} />)}
        </div>
      </div>
    </>
  )
}

export default ViewBugs