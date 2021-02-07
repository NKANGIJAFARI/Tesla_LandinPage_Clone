import React from 'react'
import Button from './Button'

const Item = (props) => {
const {
    title, 
    desc, 
    descLink,
    background,
    leftBtnText,
    leftBtnLink,
    rightBtnText,
    rightBtnLink,
    twoButton
} = props

    return (
        <div className="item__container">
           <img src={background} alt=""/> 
            <div className="item__text">
                <p>{title}</p>
                <div className="item__textDesc">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="item__lowerThird">
                <div className="item__buttons">
                    <Button imp="prmary" text={leftBtnText} Link={leftBtnLink} />
                    {twoButton && (
                            <Button imp="secondary" text={rightBtnText} Link ={rightBtnLink} />
                        )
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default Item
