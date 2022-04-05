import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import styles from './message.module.css';

const showMessage = message => (dispatch, getState) => {
    dispatch({type:'message/set', payload: message});
    const tOut = setTimeout(() => {
        dispatch({type: 'message/unset'});
        clearTimeout(tOut);
    }, 1000)
}

const Message = props => {
    const currentMessage = useSelector(state => state.message);
    const dispatch = useDispatch();
    const ref = useRef();
    const showMessageHandler = () => {
        dispatch(showMessage(ref.current.value))
    }

    useEffect(() => {console.log(currentMessage)}, [currentMessage])
    return (
        <div className={styles.wrapper}>
            <input type="text" ref={ref} />
            <button onClick={showMessageHandler}>Show</button>
            <div className={styles.content}>
                {currentMessage === null ? currentMessage : currentMessage.message}
            </div>
        </div>
    )
}

export default Message;