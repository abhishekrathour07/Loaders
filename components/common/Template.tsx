"use client"
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import CopyClipBoard from './CopyClipboard'

type Props = {
    Heading: string,
    solution?: React.ReactNode,
    nextQuestion?: string,
    code?: string
}

const Template: React.FC<Props> = ({ Heading, solution, nextQuestion, code }) => {
    const router = useRouter()
    return (
        <div className='bg-gradient-to-br from-slate-950 to-blue-950 flex justify-center items-center p-0 md:p-4'>
            <div className='bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl shadow-2xl flex flex-col w-full h-full md:h-auto p-2 md:p-4 lg:p-8'>
                {/* Top Navigation Buttons */}
                <div className='flex justify-between items-center mb-4'>
                    <CircleArrowLeft 
                        onClick={() => router.back()} 
                        className='w-8 h-8 md:w-10 md:h-10 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer' 
                    />
                    <CircleArrowRight 
                        onClick={() => router.push(`/${nextQuestion}`)} 
                        className='w-8 h-8 md:w-10 md:h-10 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer' 
                    />
                </div>

                {/* Main Content */}
                <div className='flex flex-col gap-6 md:gap-12 p-4 md:p-6 w-full'>
                   
                    <div className='flex flex-col md:flex-row gap-4 md:gap-6 h-auto md:h-[70vh] bg-slate-800 rounded-lg p-4 md:p-6'>
                        
                        <div className='md:flex-1 flex flex-col gap-4 items-center justify-center'>
                        <h1 className='text-xl md:text-3xl font-bold text-white tracking-wide text-center w-full'>{Heading}</h1>
                            {solution}
                        </div>
                        <div className='w-full md:w-[700px] flex flex-col gap-4 md:gap-8 bg-slate-700 rounded-lg p-4'>
                            <CopyClipBoard label='Terminal' CopiedCode={"npm i react-spinners"} />
                            <CopyClipBoard label='Copy code' CopiedCode={code as string} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template
