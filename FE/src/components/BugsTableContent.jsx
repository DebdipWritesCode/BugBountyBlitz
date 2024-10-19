import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { TableCell, TableRow } from '@/components/ui/table'
import axios from '@/services/axiosInstance'
import React from 'react'
import toast from 'react-hot-toast'

const BugsTableContent = ({ bugId,bugTitle, repositoryName, prLink, stepsToReproduce, expectedBehaviour, actualBehaviour, additionalComments, screenshots, isAdmin = false }) => {

    const deleteBug = async() => {
        try {
            const response = await axios.delete(`/bugs/deleteBug/${bugId}`)
        } catch (err) {
            console.error(err);
            const message = err.response?.data?.message || 'Server Error';
            toast.error(message);
        }
        window.location.reload(true)        
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <TableRow>
                        <TableCell className="max-w-5 truncate">{bugTitle}</TableCell>
                        <TableCell className="max-w-5 truncate">{repositoryName}</TableCell>
                        <TableCell className="max-w-5 truncate">
                            <a className="text-blue-600 hover:underline" href={prLink} target="_blank">
                                {prLink}
                            </a>
                        </TableCell>
                        <TableCell className="max-w-5 truncate">{stepsToReproduce}</TableCell>
                        <TableCell className="max-w-5 truncate">{expectedBehaviour}</TableCell>
                        <TableCell className="max-w-5 truncate">{actualBehaviour}</TableCell>
                        <TableCell className="max-w-5 truncate">{additionalComments}</TableCell>
                        <TableCell className="max-w-5 truncate">{screenshots}</TableCell>
                        {!isAdmin && <TableCell className="text-center">
                            <Button className="my-5 mr-2">Edit</Button>
                            <Button className="z-50" variant="destructive" onClick={deleteBug}>Delete</Button>
                        </TableCell>}
                    </TableRow>
                </DialogTrigger>
                <DialogContent className="max-h-screen overflow-y-auto no-scroll-bar">
                    <DialogHeader>
                        <DialogTitle>{bugTitle}</DialogTitle>
                    </DialogHeader>
                    <div>
                        <div className="grid items-center">
                            <Label htmlFor="repositoryName">Repository Name</Label>
                            <p
                                className="leading-5 mb-5"
                                style={{ whiteSpace: "pre-line" }}
                                id="repositoryName"
                            >{repositoryName}</p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="prLink">PR Link</Label>
                            <p
                                className="leading-5 mb-5 text-blue-600 hover:underline"
                                style={{ whiteSpace: "pre-line" }}
                                id="prLink"
                            >
                                <a href={prLink} target="_blank">
                                    {prLink}
                                </a>
                            </p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="stepsToReproduce">Steps to reproduce</Label>
                            <p
                                className="leading-5 mb-5"
                                style={{ whiteSpace: "pre-line" }}
                                id="stepsToReproduce"
                            >{stepsToReproduce}</p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="expectedBehaviour">Expected Behaviour</Label>
                            <p
                                className="leading-5 mb-5"
                                style={{ whiteSpace: "pre-line" }}
                                id="expectedBehaviour"
                            >{expectedBehaviour}</p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="actualBehaviour">Actual Behaviour</Label>
                            <p
                                className="leading-5 mb-5"
                                style={{ whiteSpace: "pre-line" }}
                                id="actualBehaviour"
                            >{actualBehaviour}</p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="additionalComments">Additinal Comments</Label>
                            <p
                                className="leading-5 mb-5"
                                style={{ whiteSpace: "pre-line" }}
                                id="additionalComments"
                            >{additionalComments}</p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="screenshots">Screenshots / Logs</Label>
                            <p
                                className="leading-5 mb-5"
                                style={{ whiteSpace: "pre-line" }}
                                id="screenshots"
                            >{screenshots}</p>
                        </div>
                    </div>
                    {!isAdmin && <DialogFooter>
                        <Button variant="destructive" onClick={deleteBug}>Delete Bug</Button>
                    </DialogFooter>}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BugsTableContent