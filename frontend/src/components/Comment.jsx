import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const Comment = () => {
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@danthiongo</h3>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-end justify-center space-x-2">
            <button><BiEdit /></button>
            <button><MdDelete /></button>
          </div>
        </div>
      </div>
      <p className="px-4 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit error aut eius asperiores. Rem quo sint nulla soluta autem molestiae iure fugiat quibusdam. Tempore ipsam earum dolor nisi magni!
      </p>
    </div>
  )
}

export default Comment