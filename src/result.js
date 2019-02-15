import React from 'react'




function Result(props){
    var x=props.val;
    let n=Math.floor(x/1000)
    let s=n%60;
    let m=Math.floor((n%3600)/60);
    let h=Math.floor(n/3600);
    return (
        <div className="result">
            <div>{h.toString().padStart(2,'0')}</div>
            <div>:</div>
            <div>{m.toString().padStart(2,'0')}</div>
            <div>:</div>
            <div>{s.toString().padStart(2, '0')}</div>


        </div>
        

    )

}

export default Result

