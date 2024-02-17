import { getRecentEvents } from "@/api/admin/recentEvent.api"
import { useQuery } from "@tanstack/react-query"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { useState } from "react"
import Modal from "../Dialog"
import DeleteModal from "../DeleteModal"
import { TRecentEvent } from "@/types/recentEventTypes"


const RecentEventDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false)
  const [recentEvent, setRecentEvent] = useState({});
  const [deleteEvent, setDeleteEvent] = useState({});

  const { isLoading, isError, data } = useQuery({
    queryKey: ['recentEvent'],
    queryFn: getRecentEvents
  })

  const updateHandler = (event: Partial<TRecentEvent>) => {

    setRecentEvent(event)
    setIsOpen(!isOpen)
  }

  const deleteHandler = (event: Partial<TRecentEvent>) => {
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
              <TableHead>Date</TableHead>
              <TableHead>Creator</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              data.data.map((event:TRecentEvent) =>
                <TableRow key={event._id}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.creator}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.price}</TableCell>
                  <TableCell className="text-right"><Button onClick={() => updateHandler(event)} variant={'outline'}>Update</Button>
                  </TableCell>
                  <TableCell className="text-right" ><Button onClick={() => deleteHandler(event)} variant={'destructive'}>Delete</Button></TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
      {isOpen && <Modal actionType="recent-events" setPopUp={setIsOpen} data={recentEvent} />}

      {deleteModal && <DeleteModal actionType="recent-events" setPopUp={setDeleteModal} event={deleteEvent} />}
    </>
  )
}

export default RecentEventDashboard