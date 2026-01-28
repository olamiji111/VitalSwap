import React from 'react';
import { PlusIcon, Info } from "lucide-react"

const Hero = () => {
    return (
        <div className='mt-hero padding-x'>
            <div className='flex-between gap-x-4'>
                <div className='col-start gap-y-0.5'>
                    <h2 className='text-primary-900'> Settlement Account </h2>
                    <p className='text-sm text-gray-500'> Manage the bank accounts where your settlements are paid out </p>
                </div>

                <a href="/" className='flex-center duration-300 transition-colors bg-[#172554] rounded-sm gap-x-4 px-3 py-2 '>
                    <PlusIcon strokeWidth={2} className='text-white h-4 w-4' />
                    <span className='text-white text-sm'> Add new Accounts </span>
                </a>
            </div>
            <div className="my-8 border rounded-lg  border-[#CFE2F8] bg-[#F1F7FD] flex px-4 py-3 gap-x-4">
                <div className="h-8 w-8 flex-center flex-shrink-0">
                    <Info strokeWidth={1.5} className="h-5 w-5 text-[#172554]" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-semibold text-primary-800 leading-snug">
                        About Settlement Accounts
                    </h1>
                    <p className="text-xs text-primary-700 mt-1 leading-relaxed">
                        Settlement accounts are external bank accounts where you receive payouts from your wallet.
                        Ensure the account name matches your registered business name to avoid delays.
                        Changes to settlement account may require additional verification.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Hero;
