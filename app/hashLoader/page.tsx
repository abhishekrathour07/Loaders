import { HashLoaderText } from '@/components/common/Codes'
import Template from '@/components/common/Template'
import LoaderHash from '@/components/screens/HashLoader'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='HashLoader' solution ={<LoaderHash/>} code={HashLoaderText} nextQuestion='clock-loader' />
    </div>
    )
}

export default page
 