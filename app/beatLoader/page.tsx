import { BeatLoaderText } from '@/components/common/Codes'
import Template from '@/components/common/Template'
import LoaderBeat from '@/components/screens/BeatLoader'
import React from 'react'

const page = () => {
    return (
        <Template 
            Heading='BeatLoader' 
            solution={<LoaderBeat/>} 
            code={BeatLoaderText} 
            nextQuestion='bounceLoader' 
        />
    )
}

export default page