import React from 'react'

const MessageLayout = ({isSend, message}) => {
  return (
    <div className={`flex ${isSend? "justify-end": "justify-normal"}`}>
        <div className="rounded-lg bg-gray-900 py-2 px-6 max-w-[50%]">
            <p>{message}</p>
            <div className='flex justify-end gap-2 text-[11px] mt-2'>
                <p>9:20</p>
            </div>
        </div>
    </div>
  )
}

export default MessageLayout