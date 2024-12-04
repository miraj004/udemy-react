import './TabContent.css'
export default function TabContent({concept}) {
    return(
        <div id="tab-content">
             <h3>{concept.title}</h3>
             <code>{concept.description}</code>
        </div>
    )
}