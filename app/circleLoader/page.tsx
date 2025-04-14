import { CircleLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderCircle from '@/components/screens/CircleLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='CircleLoader' 
            solution={<LoaderCircle />} 
            code={CircleLoaderText} 
            nextQuestion='climbingBoxLoader' 
        />
    );
};

export default page;