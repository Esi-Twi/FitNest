import React from 'react'

function ActionCard() {
    return (
        <div className='w-100 flex items-center justify-center' >
            <div className='w-[75%] bg-gradient-to-b from-emerald to-yellow-200 flex items-center px-14 justify-between h-[30vh] rounded-md'>
                <div>
                    <h2 className='font-cinzel text-3xl font-bold mb-4 text-charcoal'>Ready to take a step towards a healthier you?</h2>
                    <p>Join FitNest today and experience the difference.</p>
                </div>

                <div>
                    <a href='/' className='bg-primary px-6 py-3 rounded-md font-bold'>Sign up Today</a>
                </div>
            </div>
        </div>

    )
}

export default ActionCard
