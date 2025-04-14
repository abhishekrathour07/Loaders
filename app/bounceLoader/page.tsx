import { BounceLoaderText } from '@/components/common/Codes'
import Template from '@/components/common/Template'
import LoaderBounce from '@/components/screens/BounceLoader'
import React from 'react'

const page = () => {
    return (
        <Template 
            Heading='BounceLoader' 
            solution={<LoaderBounce/>} 
            code={BounceLoaderText} 
            nextQuestion='circleLoader' 
        />
    )
}

export default page