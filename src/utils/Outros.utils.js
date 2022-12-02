import { useContext, useEffect } from "react";
import Context from "../context/Context";

export default function OutrosUpadate(dataUpdate) {
    const { setData } = useContext(Context);
    useEffect(() => setData(dataUpdate));
}