import React, { createContext, useContext, useState } from 'react';

const useFraction = () => {
    const [fraction, setFraction] = useState <string>("");

    return {
        fraction,
        setFraction,
    };
};

export type FractionContextType = ReturnType<typeof useFraction>;

// @ts-ignore
export const FractionContext = createContext<FractionContextType>('');

export const useFractionContext = () => {
    const context = useContext(FractionContext);
    if (!context) {
        throw new Error('useFractionContext must be used within a FractionContext');
    }
    return context;
};

interface IProps {
    children: React.ReactNode,
}

const FractionContextProvider = ({ children }: IProps) => (
    <FractionContext.Provider value={ useFraction() }>
        { children }
    </FractionContext.Provider>
);

export default FractionContextProvider;