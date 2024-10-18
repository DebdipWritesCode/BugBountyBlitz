import React from 'react'
import BugsTableContent from '@/components/BugsTableContent'
import { Dialog } from '@/components/ui/dialog'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useParams } from 'react-router-dom'
import BugsTable from '@/components/BugsTable'

const TeamBugs = (props) => {

    const team = useParams().team;

    console.log(team)

    return (
        <div>
            <div className="mb-5">
                <p className="font-bold text-3xl mb-7">
                    Team Name
                </p>
            </div>
            <div>
                <BugsTable isAdmin/>
            </div>
        </div>
    )
}

export default TeamBugs