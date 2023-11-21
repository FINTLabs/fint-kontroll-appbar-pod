import React, {createContext, ReactNode, useEffect, useState,} from "react";
import {AppbarContextState, contextDefaultValues, IMeInfo,} from "./types";
import AppbarRepository from "../../repositories/AppbarRepository";

export const AppbarContext = createContext<AppbarContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
};

const AppbarProvider = ({children}: Props) => {
    const [me, setMe] = useState<IMeInfo | null>(contextDefaultValues.me);

    const getMeInfo = () => {
        AppbarRepository.getMeInfo()
            .then(response => {
                    console.log("Me info: ", response.data);
                    setMe(response.data)
                }
            )
            .catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        getMeInfo()
    }, []);

    return (
        <AppbarContext.Provider
            value={{
                me,
                getMeInfo,
            }}
        >
            {children}
        </AppbarContext.Provider>
    );
};
export default AppbarProvider;