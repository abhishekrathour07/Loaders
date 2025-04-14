import { ClimbingBoxLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderClimbingBox from '@/components/screens/ClimbingBoxLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='ClimbingBoxLoader' 
            solution={<LoaderClimbingBox />} 
            code={ClimbingBoxLoaderText} 
            nextQuestion='clipLoader' 
        />
    );
};

export default page;