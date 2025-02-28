// useSingleDeployment.ts
import { useContext } from 'react';
import { SingleCFuningContractContext } from '../context/SingleCFuningContractContext';

const useSingleDeployment = () => {
    const context = useContext(SingleCFuningContractContext);
    
    if (context === undefined) {
        throw new Error('useSingleDeployment must be used within a SingleCFuningContractContextProvider');
    }
    
    return context;
};

export default useSingleDeployment;