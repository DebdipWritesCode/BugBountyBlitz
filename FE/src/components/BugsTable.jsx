import React, { useEffect, useState } from 'react'
import BugsTableContent from '@/components/BugsTableContent'
import { Dialog } from '@/components/ui/dialog'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from '@/services/axiosInstance'

const BugsTable = ({ userId, isAdmin = false }) => {

    const [loading, setLoading] = useState(true);

    const fetchAllBugs = async () => {
        try {
            const response = await axios.get("/bugs/getAllBugs?userID=" + userId);
            if (response.status === 200) {
                console.log(response)
            }
        } catch (err) {
            console.error(err);
            const message = err.response?.data?.message || 'Server Error';
            // toast.error(message);
        }
    }

    useEffect(() => {
        fetchAllBugs()
    }, [])

    return (
        <>
            <Dialog>
                <Table className="w-[80vw]">
                    <TableCaption>A list of submitted bugs by team name</TableCaption>
                    <TableHeader>
                        <TableRow className="uppercase">
                            <TableHead>Bug Title</TableHead>
                            <TableHead>Repository Name</TableHead>
                            <TableHead>PR Link</TableHead>
                            <TableHead>Steps to Reproduce</TableHead>
                            <TableHead>Expected Behaviour</TableHead>
                            <TableHead>Actual Behaviour</TableHead>
                            <TableHead>Additional Comments</TableHead>
                            <TableHead>Screenshots/logs</TableHead>
                            {!isAdmin && <TableHead>Actions</TableHead>}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <BugsTableContent isAdmin={isAdmin} />
                        <BugsTableContent isAdmin={isAdmin} />
                        <BugsTableContent isAdmin={isAdmin} />
                        {/* <div>Loading...</div> */}
                    </TableBody>
                </Table>
            </Dialog>
        </>
    )
}

export default BugsTable