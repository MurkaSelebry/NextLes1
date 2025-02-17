import styles from "../StateIndex/stateindex.module.css"

interface Props{
    name: string
    isPacked: boolean
}

export default function ElementList({name, isPacked}:Props){
    // if(isPacked){
    //     return <li>{name} ✅</li>
    //     }
    // return <li className="item">{name} </li>
    
    return <li className={isPacked ? styles.StateIndex : styles.StateIndexFalse}>{isPacked ? name + '✅': name}</li>

}