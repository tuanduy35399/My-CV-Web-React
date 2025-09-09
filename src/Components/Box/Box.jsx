import './Box.css'
export default function Box({title, desc}) {
    return(
            <div className="layout-box">
                <h2 className='layout_title_box'>{title}</h2>
                {
                    Array.isArray(desc) ? (
                            desc.map((item, index) =>(
                                <div className='layout_desc_box' key={index} class="list_layout">
                                    <p style={{fontWeight: "bold"}}>{item.nameLink}</p>
                                    <a href={item.link} target='blank' style={{color: 'white', textDecoration: "none"}} >{item.link}</a>
                                </div>
                            ))
                    ) : (<p className='layout_desc_box'>{desc}</p> )
                }
                
            </div>
    )
}