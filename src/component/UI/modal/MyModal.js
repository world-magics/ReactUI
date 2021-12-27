import React from 'react'
import classes from './MyModal.module.css'
const MyModal = ({children,modal,setModal}) => {

    const modalClasses=[classes.MyModal]
    if(modal){
        modalClasses.push(classes.active)
    }

    return (
        <div className={[modalClasses].join(' ')}>
            <div className={classes.myModalContent}>
        {props.children}
            </div>
        </div>
    )
}

export default MyModal
