import { SyncLoaderText } from '@/components/common/Codes';
import Template from '@/components/common/Template';
import LoaderSync from '@/components/screens/SyncLoader';
import React from 'react';

const page = () => {
    return (
        <Template 
            Heading='SyncLoader' 
            solution={<LoaderSync />} 
            code={SyncLoaderText} 
            nextQuestion='squareLoader' 
        />
    );
};

export default page;