import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let myStyle ={
        color : props.mode==='dark'?'white':'black',
        backgroundColor :props.mode==='dark'?'rgb(36 74 104)':'white'
    }
    return (
        <div className='container' style={{color : props.mode==='dark'?'white':'#042743',backgroundColor :props.mode==='dark'?'#162345':'white'}}>
        <h2 className='my-3'style={{color : props.mode==='dark'?'white':'black'}}>About</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>App</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtlity is a free to use word and character counter Utility which is browser compatible and is used 
                            to perform different manipulations on text like conversion to LowerCase to UpperCase and Vice-versa , 
                            Reverse the text ,Remove extra spaces etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Creater :</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Uday Kumar Lodhi 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Contact info</strong>:
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            udaykumarlodhi@gmail.com 
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
