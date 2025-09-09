import "./TabButton.css"
export default function TabButton({children, clicked, isActive}) {
    return (
        <button className={`Button ${isActive?'active':undefined}`} onClick={()=>{clicked(children)}}>{children}</button>
    )
};
