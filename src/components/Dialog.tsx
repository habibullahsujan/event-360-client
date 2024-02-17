import { useMutation } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'
import { useForm, SubmitHandler, } from "react-hook-form";
import axios from 'axios'





type TModalProps = {
  setPopUp: Dispatch<SetStateAction<boolean>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  actionType: string;
}



function Modal({ setPopUp, data, actionType }: TModalProps) {
  const {
    register,
    handleSubmit,
  } = useForm()

  const { isError, isSuccess, mutate } = useMutation({
    mutationKey: ['updateEvent'],
    mutationFn: (event) => {
      return axios.put(`https://event-360-backend-kappa.vercel.app/api/v1/${actionType}/${data._id}`, event)

    }
  })


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = (updateData:any) => {
    mutate(updateData)
  }

  if (isSuccess) {
    setPopUp(false)
  }
  return (
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
      <div className='bg-white p-10 rounded-md shadow-md'>
        <h1 className='font-bold text-center text-lg my-5'>{data.name}</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {
            data?.id && <div className="flex flex-col">
              <label htmlFor="name">ID</label>
              <input {...register("id")} type="text" name="id" id="id" defaultValue={data.id} className="border border-gray-500 px-2 py-1 rounded-lg" />
            </div>
          }
          {
            data.name && <div className="flex flex-col">
              <label htmlFor="name">Name:</label>
              <input {...register("name")} type="text" name="name" id="name" defaultValue={data.name} className="border border-gray-500 px-2 py-1 rounded-lg" />
            </div>
          }
          {
            data?.image && <div className="flex flex-col">
              <label htmlFor="name">ImageUrl</label>
              <input {...register("image")} type="text" name="image" id="image" defaultValue={data.image} className="border border-gray-500 px-2 py-1 rounded-lg" />
            </div>
          }

          {
            data.creator && <div className="flex flex-col">
              <label htmlFor="creator">Creator:</label>
              <input {...register("creator")} type="text" name="creator" id="creator" defaultValue={data.creator} className="border border-gray-500 px-2 py-1 rounded-lg" />
            </div>
          }
          {
            data.location && <div className="flex flex-col">
              <label htmlFor="name">Location:</label>
              <input {...register("location")} type="text" name="location" id="location" defaultValue={data.location} className="border border-gray-500 px-2 py-1 rounded-lg" />
            </div>
          }
          {
            data.price && <div className="flex flex-col">
              <label htmlFor="price">Price:</label>
              <input {...register("price")} type="text" name="price" id="price" defaultValue={data.price} className="border border-gray-500 px-2 py-1 rounded-lg" />
            </div>
          }
          {isError && <span className="text-red-400">Something went wrong!</span>}
          <div className='flex justify-between mt-5'>
            <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
              onClick={() => setPopUp(false)}
            >No, Cancel</button>
            <button type='submit' className='outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black'
            >Yes, Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
