import React from 'react';

const KeyPadComponent = ({onClick}) => {

    const buttonChars = ["(","CE",")","C","1","2","3","+",
        "1","2","3","+","4","5","6","-",
        "7","8","9","*",".","0","=","/"];
        return (
             <div className='button'>
                 {buttonChars.map(k => (<button name={k} onClick={e => onClick(e.target.name)}>{k}</button>))}
            </div>
        )
}



export default KeyPadComponent;