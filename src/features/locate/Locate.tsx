import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { selectLocateIP } from "./selectors";
import { getlocationIP } from './locateSlice';


export default function Locate(): JSX.Element {
    const dispatch = useAppDispatch();
    // const ip = useSelector(selectLocateIP);
    const value = useSelector(selectLocateIP);

    return (
        <>

        </>
    );
}