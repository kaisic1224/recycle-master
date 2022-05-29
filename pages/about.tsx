import React from 'react'
import Navbar from '../components/NavBar'

const recycleBin = "https://cdn.pixabay.com/photo/2012/04/02/13/48/recycle-24543_960_720.png"

const about = () => {
  return (
    <div className="bg-lime-100 h-screen">
        <Navbar />
        <div className="grid grid-cols-2 px-8">
            <img src={recycleBin} className="-translate-y-[50px]" />
            <div className="py-8">
                <h1 className="font-bold text-4xl text-center">
                    About Us
                </h1>
                <p className="pt-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, 
                    exercitationem nostrum. Corporis in unde consectetur nobis architecto earum, iure culpa, 
                    id nihil numquam sapiente assumenda sequi doloribus asperiores, maxime aspernatur!
                </p>
            </div>
        </div>

    </div>
  )
}

export default about