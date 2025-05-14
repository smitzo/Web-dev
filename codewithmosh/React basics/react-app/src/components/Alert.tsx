import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}

const Alert = ({children}:Props)=>{
    return(
        <div className="">{children}</div>
    )
}

export default Alert;