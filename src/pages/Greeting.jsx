import { useState } from "react"

export function Greeting(props) {
    const [name, setName] = useState('')
    const onChange = (e) => {
        setName(e.target.value)
    }
    const onClick = () => {
        if (name == '김재현') {
            props.setPage(1)
        } else {
            alert('You are not the owner of this website')
        }
    }
    return(
        <div id="namediv">
        <div id="nameinputdiv">
            <input id="nameinput" type="text" required onChange={onChange}/>
            <label id="namelabel">Name</label>
            <span id="namespan"></span>
        </div>
        <br/>
        <div id="namebuttondiv">
            <button id="namebutton" onClick={onClick}><span>ENTER</span></button>
        </div>
        </div>
    )
}