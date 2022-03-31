import styles from './shoppingChart.module.css';
import { useEffect, useState } from 'react';
import { oldStore } from '../../app/oldStore';

const ShoppingChart = (props) => {
    const store = oldStore;
    const [ownState, setOwnState] = useState([]);
    // Subscribed component seems to must have an own state !!!

    const salesItems = ['chair', 'lamp', 'desk', 'bed', 'container']

    const setSalesItem = (e) => store.dispatch({type:'shopping/add', payload: e.target.innerText});
    const removeSalesItem = (e) => store.dispatch({type: 'shopping/remove', payload: parseInt(e.target.getAttribute('data-index'))})

    const getSalesItems = () => salesItems.map((item) => (
        <span key={item} className={styles.salesItem} onClick = {setSalesItem}>{item}</span>
    ))

    const getChosenItems = () => ownState.map((item, index) => (
        <span key={index} className={styles.salesItem} data-index = {index} onClick={removeSalesItem}>{item}</span>
    )) 

    const updateOwnState = (newState) => {
        console.log('update')
        if (ownState.length != newState.length) setOwnState(newState);
    }

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            console.log('Shopping chart subscribed'); 
            updateOwnState(store.getState().shopping);
        });
        return () => {
            console.log('Unsubscribed shopping chart');
            return unsubscribe();
        }
        // returns unsubscribe function, that will be called when component is unmounted
    }, [])

    return (
        <div className="shopping-chart" style={{maxWidth: '300px'}}>
            <h3 className={styles.h3}>Shopping-chart</h3>
            <p>Uses <code>store.subscribe()</code> Click an item to add to a 'shopping chart'. Click on an item in the shopping chart to remove it.</p>
            <div className={styles.wrapper}>
                <div className={styles.saleItems}>
                    {getSalesItems()}
                </div>
                <div className={styles.selectedSaleItems}>
                    {getChosenItems()}
                </div>
            </div>
        </div>
    )
}

export default ShoppingChart;