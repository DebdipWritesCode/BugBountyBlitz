import BugsTable from '@/components/BugsTable'
import { Input } from '@/components/ui/input'
import { getToken, removeToken } from '@/services/authService'
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ViewBugs = () => {

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchTitle, setSearchTitle] = useState("");

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
            <Input
              className="w-64 mr-3"
              placeholder="Search Submitted Bugs by Bug Title"
              type="text"
              value={searchTitle}
              onChange={(e)=>setSearchTitle(e.target.value)}
            />
          </div>
        </div>
        <div>
          {loading ? (<div>Loading all bugs...</div>) : (<BugsTable searchTitle={searchTitle} userId={userId} />)}
        </div>
      </div>
    </>
  )
}

export default ViewBugs