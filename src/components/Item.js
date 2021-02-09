import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    twoButtons,
    first
} = props

    return (
        <div className="item" style={{backgroundImage : `url(${background})`}}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                        <Button imp="primary" text={leftBtnText} Link={leftBtnLink} />
                        {twoButtons && (
                                <Button imp="secondary" text={rightBtnText} Link ={rightBtnLink} />
                            )
                        }
                    </div>
                    <div>
                        {first && (
                            <div className = "item__expand">
                                <ExpandMoreIcon />
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Item
