// SingleCFuningContractContext.tsx
import { CFundingAPI } from '@cfunding/cfunding-api';
import { ContractAddress } from '@midnight-ntwrk/ledger';
import React, { useCallback, useState } from 'react';
import * as pino from "pino";
import { SingleDeploymentManager } from './SingleBrowserDeployedManager';

export interface CFundingContextType {
    status: 'idle' | 'in-progress' | 'deployed' | 'failed';
    api: CFundingAPI | null;
    error: Error | null;
    deploy: () => Promise<void>;
    join: (contractAddress: ContractAddress) => Promise<void>;
    contractAddress: string | null;
}

// Create context with a default value matching the type
export const SingleCFuningContractContext = React.createContext<CFundingContextType>({
    status: 'idle',
    api: null,
    error: null,
    deploy: async () => {},
    join: async () => {},
    contractAddress: null,
});

export interface SingleDeploymentManagerProps {
    logger: pino.Logger;
    children: React.ReactNode;
}

const SingleCFuningContractContextProvider = ({ children, logger }: SingleDeploymentManagerProps) => {
    const [status, setStatus] = useState<'idle' | 'in-progress' | 'deployed' | 'failed'>("idle");
    const [api, setApi] = useState<CFundingAPI | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [contractAddress, setContractAddress] = useState<string | null>(null);
    const [deploymentManager] = useState(() => new SingleDeploymentManager(logger));

    const updateStatus = useCallback(async () => {
        const currentStatus = await deploymentManager.getStatus();
        setStatus(currentStatus.status);
        setApi(currentStatus.api || null);
        if (currentStatus.api) {
            setContractAddress(currentStatus.api.deployedContractAddress);
        }
        setError(currentStatus.error || null);
    }, [deploymentManager]);

    const deploy = useCallback(async () => {
        try {
            await deploymentManager.deploy();
            await api?.initializeOwner();
            await updateStatus();
        } catch (error) {
            await updateStatus();
            throw error;
        }
    }, [deploymentManager, updateStatus]);

    const join = useCallback(async (contractAddrs: string) => {
        try {
            await deploymentManager.join(contractAddrs);
            await updateStatus();
        } catch (error) {
            await updateStatus();
            throw error;
        }
    }, [deploymentManager, updateStatus]);

    const contextValue: CFundingContextType = {
        deploy,
        join,
        api,
        error,
        contractAddress,
        status
    };

    return (
        <SingleCFuningContractContext.Provider value={contextValue}>
            {children}
        </SingleCFuningContractContext.Provider>
    );
};

export default SingleCFuningContractContextProvider;