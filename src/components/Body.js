import React from "react";

const Body = () =>{
    return(
        <>
        <div className="space-y-4 lg:flex ">
        <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img src="./assets/Blue-Shape.svg" alt="1st" className="absolute -rotate-[45deg] h-64 md:h-72  lg:h-[400px]"/>
        <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-72  lg:h-[400px]"/>
        <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-72  lg:h-[400px]" />
        <img src="./assets/Hero-Model.png" alt="hero" className="absolute h-64 md:h-72  lg:h-[400px]" />
        </div>
        <div className="lg:flex-1 lg:order-1">
            <h1 className="text-5xl font-bold font-playfair mb-5 leading-tight lg:text-[4rem]">Host your website in less then 5 minutes</h1>
            <p className="text-2sm font-lato mb-5 lg:text-[2rem]">with Hoster , get your website up and running in no less then 5 minutes wiith the most competitive pricing packages avaliable online.</p>
            <form action="" className="flex flex-col gap-4 md:flex-row">
                <input type="email" placeholder="Enter email address" className="rounded-md px-5 py-3 placeholder:text-gray-400"/>
                <button className="rounded-full px-4 py-3 text-white bg-blue-400 hover:bg-blue-300">Join Waitlist</button>
            </form>

            <div className="flex gap-4 lg:my-3">
                <img src="./assets/Checkmark.svg" alt="checkmark" />
                <p>No spam ,ever . Unsubscribe anytime</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Body;