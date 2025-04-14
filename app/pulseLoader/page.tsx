import { pulseLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderPulse from '@/components/screens/PulseLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='PulseLoader' 
            solution={<LoaderPulse />} 
            code={pulseLoaderText} 
            nextQuestion='ringLoader' 
        />
    );
};

export default page;