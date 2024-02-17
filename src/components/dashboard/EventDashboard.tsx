import { getEvents } from "@/api/admin/event.api"
import { useQuery } from "@tanstack/react-query"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"

import { useState } from "react"
import Modal from "../Dialog"
import DeleteModal from "../DeleteModal"
import { TEvent } from "@/types/eventTypes"


const EventDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [event, setEvent] = useState({});
    const [deleteEvent, setDeleteEvent] = useState({});
    const [deleteModal, setDeleteModal] = useState(false)

    const { isLoading, data, isError } = useQuery({
        queryKey: ['events'],
        queryFn: getEvents
    })



    const updateHandler = (event: Partial<TEvent>) => {

        setEvent(event)
        setIsOpen(!isOpen)
    }

    const deleteHandler = (event: Partial<TEvent>) => {
        setDeleteEvent(event)
        setDeleteModal(!deleteModal)

    }
    if (isLoading) {
        return (
            <div className="flex items-center justify-center">
                <p>Loading....</p>
            </div>
        )
    }
    if (isError) {
        return (
            <div className="flex items-center justify-center">
                <p>Something went wrong!</p>
            </div>
        )
    }
    return (

        <>
            <div className="flex items-center justify-center">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>ImgUrl</TableHead>
                            <TableHead>Action</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data.data.map((event: TEvent) =>
                                <TableRow key={event._id}>
                                    <TableCell className="font-medium">{event.name}</TableCell>
                                    <TableCell>{event.id}</TableCell>
                                    <TableCell>{event.image}</TableCell>
                                    <TableCell className="text-right"><Button onClick={() => updateHandler(event)} variant={'outline'}>Update</Button>
                                    </TableCell>
                                    <TableCell className="text-right" ><Button onClick={() => deleteHandler(event)} variant={'destructive'}>Delete</Button></TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div>
            {isOpen && <Modal setPopUp={setIsOpen} actionType="events" data={event} />}

            {deleteModal && <DeleteModal setPopUp={setDeleteModal} actionType="events" event={deleteEvent} />}
        </>


    )
}

export default EventDashboard