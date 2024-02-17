
import { useMutation } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'
import { IoWarning } from 'react-icons/io5';
import axios from 'axios'
import { TEvent } from '@/types/eventTypes';
import { TRecentEvent } from '@/types/recentEventTypes';
import { TServices } from '@/types/serviceTypes';


type TDeleteModalProps = {
    setPopUp: Dispatch<SetStateAction<boolean>>,
    event: Partial<TEvent | TRecentEvent | TServices>,
    actionType: string;
}
function DeleteModal({ setPopUp, event, actionType }: TDeleteModalProps) {

    const { isError, isSuccess, mutate } = useMutation({
        mutationKey: ['deleteEvent'],
        mutationFn: () => {
            return axios.delete(`https://event-360-backend-kappa.vercel.app/api/v1/${actionType}/${event._id}`)
        }
    })

    const handleDelete = () => {
        mutate()

    }

    if (isSuccess) {
        setPopUp(false)
    }
    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-lg my-5'>Delete User</h1>
                <p>
                    Are you sure you want to delete <b>{event.name}</b>
                    <p className='bg-[#ffe9d9] p-2 border-l-2 border-[#fa703f] text-[#bc4c2e] flex flex-col text-sm my-1'>
                        <span className='text-[#771505] font-bold flex items-center gap-1'>
                            <IoWarning />
                            Warning
                        </span>
                        By Deleting this event, you won't be able to see it in dashboard.
                    </p>
                </p>
                {isError && <span className="text-red-400">Something went wrong!</span>}
                <div className='flex justify-between mt-5'>
                    <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                        onClick={() => setPopUp(false)}
                    >No, Cancel</button>
                    <button className='outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black'
                        onClick={handleDelete}
                    >Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
