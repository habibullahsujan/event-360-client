import { getServices } from "@/api/admin/service.api"
import { useQuery } from "@tanstack/react-query"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { useState } from "react"
import Modal from "../Dialog"
import DeleteModal from "../DeleteModal"
import { TServices } from "@/types/serviceTypes"


const ServiceDashboard = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false)
  const [services, setServices] = useState({});
  const [deleteService, setDeleteService] = useState({});
  const { isLoading, isError, data } = useQuery({
    queryKey: ['service'],
    queryFn: getServices
  })



  const updateHandler = (event: Partial<TServices>) => {

    setServices(event)
    setIsOpen(!isOpen)
  }

  const deleteHandler = (event: Partial<TServices>) => {
    setDeleteService(event)
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
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data?.data?.map((service:TServices) =>
              <TableRow key={service._id}>
                <TableCell className="font-medium">{service.name}</TableCell>
                <TableCell>{service.price}</TableCell>
                <TableCell className="text-right"><Button onClick={() => updateHandler(service)} variant={'outline'}>Update</Button>
                  </TableCell>
                  <TableCell className="text-right" ><Button onClick={() => deleteHandler(service)} variant={'destructive'}>Delete</Button></TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
    {isOpen && <Modal actionType="services" setPopUp={setIsOpen} data={services} />}

    {deleteModal && <DeleteModal actionType="services" setPopUp={setDeleteModal} event={deleteService} />}
    </>
  )
}

export default ServiceDashboard