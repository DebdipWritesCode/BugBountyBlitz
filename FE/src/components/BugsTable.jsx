import React, { useEffect, useState } from 'react'
import BugsTableContent from '@/components/BugsTableContent'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from '@/services/axiosInstance'
import toast, { Toaster } from 'react-hot-toast'

const BugsTable = ({ userId, searchTitle, isAdmin = false }) => {

    const [bugs, setBugs] = useState(null)

    const fetchAllBugs = async () => {
        try {
            const response = await axios.get("/bugs/getAllBugs?userID=" + userId);
            if (response.status === 200) {
                setBugs(response?.data)
            }
        } catch (err) {
            console.error(err);
            const message = err.response?.data?.message || 'Server Error';
            toast.error(message);
        }
    }

    useEffect(() => {
        fetchAllBugs()
    }, [])

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Table className="w-[80vw]">
                <TableCaption>A list of submitted bugs by team name</TableCaption>
                <TableHeader>
                    <TableRow className="uppercase">
                        <TableHead>Bug Title</TableHead>
                        <TableHead>Repository Name</TableHead>
                        <TableHead>PR Link</TableHead>
                        <TableHead>Issue ID</TableHead>
                        <TableHead>Description</TableHead>
                        {!isAdmin && <TableHead>Actions</TableHead>}
                    </TableRow>
                </TableHeader>
                {bugs && <TableBody>
                    {bugs?.map((bug) =>
                        (!searchTitle || bug.title.includes(searchTitle)) && <>
                            <BugsTableContent bugId={bug._id} bugTitle={bug.title} repositoryName={bug.repository_name} prLink={bug.pr_link} issueID={bug.issue_id} description={bug.description} isAdmin={isAdmin} key={bug._id} />
                        </>
                    )}
                </TableBody>}
            </Table>
        </>
    )
}

export default BugsTable