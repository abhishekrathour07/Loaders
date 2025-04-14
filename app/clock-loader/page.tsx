import { ClockLoaderText } from '@/components/common/Codes'
import Template from '@/components/common/Template'
import LoaderClock from '@/components/screens/ClockLoader'
import React from 'react'

const page = () => {
  return (
    <div>
            <Template Heading='Clock Loader' solution ={<LoaderClock/>} code={ClockLoaderText} nextQuestion='barLoader' />
      
    </div>
  )
}

export default page
