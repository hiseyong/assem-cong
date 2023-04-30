export function Identify(props) {
    const onClick = (e) => {
        if (e.target.textContent == '비타500') {
            props.setPage(2)
        } else {
            alert('Identify Failed')
            props.setPage(0)
        }
    }
    return(
        <div id="identifydiv">
            <div id="identifybuttondiv">
                <h2>가장 최근 후배에게 준 선물:</h2>
            </div>
            <div id="identifybuttondiv">
                <button className="identifybutton" onClick={onClick}><span>초코송이</span></button>
            </div>
            <div id="identifybuttondiv">
                <button className="identifybutton" onClick={onClick}><span>비타500</span></button>
            </div>
            <div id="identifybuttondiv">
                <button className="identifybutton" onClick={onClick}><span>오레오</span></button>
            </div>
            <div id="identifybuttondiv">
                <button className="identifybutton" onClick={onClick}><span>얼라이브</span></button>
            </div>
            <div id="identifybuttondiv">
                <button className="identifybutton" onClick={onClick}><span>초코에몽</span></button>
            </div>
        </div>
        
    )
}