import { Button } from '@/components/ui/button'
import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

const BugsTableContent = ({ isAdmin = false }) => {
    return (
        <>
            <DialogTrigger asChild>
                <TableRow>
                    <TableCell className="max-w-5 truncate">Easy</TableCell>
                    <TableCell className="max-w-5 truncate">C4GT</TableCell>
                    <TableCell className="max-w-5 truncate">PR Link</TableCell>
                    <TableCell className="max-w-5 truncate">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quo quia sunt quas nemo debitis recusandae! Vero temporibus corrupti mollitia? Ipsam, illum! Voluptas cumque impedit officiis deserunt vero, officia qui.
                    </TableCell>
                    <TableCell className="max-w-5 truncate">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quo quia sunt quas nemo debitis recusandae! Vero temporibus corrupti mollitia? Ipsam, illum! Voluptas cumque impedit officiis deserunt vero, officia qui.
                    </TableCell>
                    <TableCell className="max-w-5 truncate">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quo quia sunt quas nemo debitis recusandae! Vero temporibus corrupti mollitia? Ipsam, illum! Voluptas cumque impedit officiis deserunt vero, officia qui.
                    </TableCell>
                    <TableCell className="max-w-5 truncate">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quo quia sunt quas nemo debitis recusandae! Vero temporibus corrupti mollitia? Ipsam, illum! Voluptas cumque impedit officiis deserunt vero, officia qui.
                    </TableCell>
                    <TableCell className="max-w-5 truncate">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quo quia sunt quas nemo debitis recusandae! Vero temporibus corrupti mollitia? Ipsam, illum! Voluptas cumque impedit officiis deserunt vero, officia qui.
                    </TableCell>
                    {!isAdmin && <TableCell className="text-center">
                        <Button className="my-5 mr-2">Edit</Button>
                        <Button variant="destructive">Delete</Button>
                    </TableCell>}
                </TableRow>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto no-scroll-bar">
                <DialogHeader>
                    <DialogTitle>Bug Title</DialogTitle>
                </DialogHeader>
                <div>
                    <div className="grid items-center">
                        <Label htmlFor="repositoryName">Repository Name</Label>
                        <p className="leading-5 mb-5" id="repositoryName">Repository Name</p>
                    </div>
                    <div className="grid items-center">
                        <Label htmlFor="prLink">PR Link</Label>
                        <p className="leading-5 mb-5" id="prLink">PR Link</p>
                    </div>
                    <div className="grid items-center">
                        <Label htmlFor="stepsToReproduce">Steps to reproduce</Label>
                        <p className="leading-5 mb-5" id="stepsToReproduce">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ab aut sed? Consequatur doloribus, vero, saepe dolore earum atque, commodi sint non ipsam est rem recusandae quis nulla beatae fugiat.
                        </p>
                    </div>
                    <div className="grid items-center">
                        <Label htmlFor="expectedBehaviour">Expected Behaviour</Label>
                        <p className="leading-5 mb-5" id="expectedBehaviour">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, explicabo tenetur culpa quasi ut dolores, possimus, magni dignissimos ab fugit veritatis perspiciatis iusto? Possimus consequatur magnam sapiente sunt asperiores. Perferendis.
                        </p>
                    </div>
                    <div className="grid items-center">
                        <Label htmlFor="actualBehaviour">Actual Behaviour</Label>
                        <p className="leading-5 mb-5" id="actualBehaviour">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim quod debitis voluptates iste expedita nobis aperiam veniam consequatur atque iusto hic repudiandae quae cum explicabo, at quas commodi nihil.
                        </p>
                    </div>
                    <div className="grid items-center">
                        <Label htmlFor="additionalComments">Additinal Comments</Label>
                        <p className="leading-5 mb-5" id="additionalComments">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi error veritatis aliquam quasi nobis optio reprehenderit repudiandae laboriosam impedit ex natus veniam praesentium doloremque quas, dolores eligendi magnam, atque ea!
                        </p>
                    </div>
                    <div className="grid items-center">
                        <Label htmlFor="screenshots">Screenshots / Logs</Label>
                        <p className="leading-5 mb-5" id="screenshots">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nobis quam omnis architecto amet, veritatis impedit nisi porro adipisci culpa accusamus alias facilis, pariatur quo! Illum, sapiente. Fuga, tempore.
                        </p>
                    </div>
                </div>
                {!isAdmin && <DialogFooter>
                    <Button variant="destructive">Delete Bug</Button>
                </DialogFooter>}
            </DialogContent>
        </>
    )
}

export default BugsTableContent