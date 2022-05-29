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
                <p className="pt-8">
                    Recycle Master is a tool created for ToHacks22 where you are able to ask our friendly robot the Recycle Master
                    whether your object belongs in the Blue Bin, Green Bin, Garbage Bin, Household Hazardous Waste, 
                    Drop Off Depot, Electronics, Metals, Oversized Item, Yard Waste, or is Not accepted.
                </p>
                <p className="pt-8">
                    This project was built using next.js, and NLP from co:here to creatively respond to various disposable items. 
                    We utilized data from the City of Toronto to train the classifier model from co:here to generate responses and
                    display the data through an interactive chat window. We implemented authentication to create a more
                    personal experience with the user. Our friendly robot Recycle Master was created using Photoshop and animated using TailwindCSS.
                </p>
                <p className="pt-8">
                    Amidst the Covid-19 pandemic, the world has centralized to live a hybrid focused lifestyle. It is more important now than ever for 
                    humans to understand where to dispose their waste. Improper waste disposal contaminates the water, harms the local ecosystem, and 
                    increases greenhouse gas emissions. Disposing your waste correctly is an important factor in helping the world reach net zero 
                    emissions and ultimately saving the planet.
                    
    
                </p>
            </div>
        </div>

    </div>
  )
}

export default about