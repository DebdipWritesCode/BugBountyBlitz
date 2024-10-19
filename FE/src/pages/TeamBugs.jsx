import React from 'react'
import { useParams } from 'react-router-dom'
import BugsTable from '@/components/BugsTable'

const TeamBugs = (props) => {

    const userId = useParams().userId;
    const team = useParams().team;

    return (
        <div>
            <div className="mb-5">
                <p className="font-bold text-3xl mb-7">
                    {team}
                </p>
            </div>
            <div>
                <BugsTable userId={userId} isAdmin/>
            </div>
        </div>
    )
}

export default TeamBugs