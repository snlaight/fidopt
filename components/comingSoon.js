import React from 'react'

const ComingSoon = ()=>{
return (
    <div>
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className>
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Looks like you've your way here... we're just not ready yet ! 
                                </h1>
                                <p className="my-2 text-gray-800">Sorry about that! Fidopt client will be up and running soon.</p>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div>
                <img src="/coming-soon.png" />
                    {/* <img src="https://i.ibb.co/ck1SGFJ/Group.png" /> */}
                </div>
            </div>
        </div>

)

}

export default ComingSoon;

