import { BarLoaderText } from '@/components/common/Codes'
import Template from '@/components/common/Template'
import LoaderBar from '@/components/screens/BarLoader'
import React from 'react'

const page = () => {
    return (
        <Template 
            Heading='BarLoader' 
            solution={<LoaderBar/>} 
            code={BarLoaderText} 
            nextQuestion='beatLoader' 
        />
    )
}

export default page