import './TabButton.css'

export default function TabButton({active, handleClick, children}) {
    return (
        <li><button onClick={handleClick} className={active ? 'active':''}>{children}</button></li>
    )
}