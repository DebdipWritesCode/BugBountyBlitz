import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const RepoTable = () => {
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
                        <TableHead>Organisation</TableHead>
                        <TableHead>Difficulty</TableHead>
                        <TableHead>Repository</TableHead>
                        {!isAdmin && <TableHead>Actions</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Avanti Fellows</TableCell>
                        <TableCell className="text-green-500">Easy</TableCell>
                        <TableCell>
                            <a href="https://github.com/avantifellows/quiz-creator" target="_blank">LINK</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Avanti Fellows</TableCell>
                        <TableCell className="text-green-500">Easy</TableCell>
                        <TableCell>
                            <a href="https://github.com/avantifellows/college-predictor" target="_blank">LINK</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Avanti Fellows</TableCell>
                        <TableCell className="text-green-500">Easy</TableCell>
                        <TableCell>
                            <a href="https://github.com/avantifellows/portal-frontend" target="_blank">LINK</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Samagra-X</TableCell>
                        <TableCell className="text-yellow-500">Medium</TableCell>
                        <TableCell>
                            <a href="https://github.com/SamagraX-Stencil/stencil" target="_blank">LINK</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Avanti Fellows</TableCell>
                        <TableCell className="text-yellow-500">Medium</TableCell>
                        <TableCell>
                            <a href="https://github.com/avantifellows/reporting" target="_blank">LINK</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Avanti Fellows</TableCell>
                        <TableCell className="text-yellow-500">Medium</TableCell>
                        <TableCell>
                            <a href="https://github.com/avantifellows/portal-backend" target="_blank">LINK</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dhiway</TableCell>
                        <TableCell className="text-red-500">Hard</TableCell>
                        <TableCell>
                            <a href="https://github.com/dhiway/cord" target="_blank">LINK</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Juspay</TableCell>
                        <TableCell className="text-red-500">Hard</TableCell>
                        <TableCell>
                            <a href="https://github.com/juspay/hyperswitch" target="_blank">LINK</a>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default RepoTable