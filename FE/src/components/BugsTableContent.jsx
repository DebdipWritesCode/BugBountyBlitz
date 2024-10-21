import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { TableCell, TableRow } from '@/components/ui/table';
import axios from '@/services/axiosInstance';
import React from 'react';
import toast from 'react-hot-toast';

const BugsTableContent = ({ bugId, bugTitle, repositoryName, prLink, issueID, description, isAdmin = false }) => {

    const deleteBug = async () => {
        try {
            const response = await axios.delete(`/bugs/deleteBug/${bugId}`);
            if (response.status === 200) {
                toast.success("Bug deleted successfully");
                window.location.reload(true);
            }
        } catch (err) {
            console.error(err);
            const message = err.response?.data?.message || 'Server Error';
            toast.error(message);
        }
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <TableRow>
                        <TableCell className="max-w-[150px] truncate">{bugTitle}</TableCell>
                        <TableCell className="max-w-[150px] truncate">{repositoryName}</TableCell>
                        <TableCell className="max-w-[150px] truncate">
                            <a className="text-blue-600 hover:underline" href={prLink} target="_blank" rel="noopener noreferrer">
                                {prLink}
                            </a>
                        </TableCell>
                        <TableCell className="max-w-[150px] truncate">{issueID}</TableCell>
                        <TableCell className="max-w-[150px] truncate">{description}</TableCell>
                        {!isAdmin && (
                            <TableCell className="text-center">
                                <Button variant="destructive" onClick={deleteBug}>Delete</Button>
                            </TableCell>
                        )}
                    </TableRow>
                </DialogTrigger>

                <DialogContent className="max-h-screen overflow-y-auto no-scroll-bar">
                    <DialogHeader>
                        <DialogTitle>{bugTitle}</DialogTitle>
                    </DialogHeader>
                    <div>
                        <div className="grid items-center">
                            <Label htmlFor="repositoryName">Repository Name</Label>
                            <p className="leading-5 mb-5" id="repositoryName">{repositoryName}</p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="prLink">PR Link</Label>
                            <p className="leading-5 mb-5 text-blue-600 hover:underline" id="prLink">
                                <a href={prLink} target="_blank" rel="noopener noreferrer">
                                    {prLink}
                                </a>
                            </p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="issueId">Issue ID</Label>
                            <p className="leading-5 mb-5" id="issueId">{issueID}</p>
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="description">Description</Label>
                            <p className="leading-5 mb-5" id="description">{description}</p>
                        </div>
                    </div>
                    {!isAdmin && (
                        <DialogFooter>
                            <Button variant="destructive" onClick={deleteBug}>Delete Bug</Button>
                        </DialogFooter>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default BugsTableContent;
