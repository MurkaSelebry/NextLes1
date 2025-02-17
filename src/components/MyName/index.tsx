import {ReactNode} from 'react'

interface PropsName {
    name: string;
    className1?: string | undefined;
    children: ReactNode
}


export default function MyName({name, className1="card", children}: PropsName){
    return <div>
        <h1 className={className1} >Hello, {name}!</h1>
        {children}
    </div>
}

