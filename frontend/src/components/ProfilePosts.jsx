import React from 'react'

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="https://unsplash.com/photos/a-woman-sitting-at-a-desk-talking-on-a-cell-phone-0jIrTJxeNaw" alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
       10 uses of Artificial Intelligence
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@danthiongo</p>       
      </div>
      <p className="text-sm md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam quibusdam dolor. Voluptatibus recusandae eaque illum distinctio fuga expedita perferendis, provident non autem quaerat excepturi sequi quod iste, illo mollitia.
      </p>
    </div>

    </div>
  )
}

export default ProfilePosts