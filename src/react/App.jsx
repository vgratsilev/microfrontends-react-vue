import React, { useEffect, useState } from 'react';

const App = () => {
    const [count, setCount] = useState(window.store.count);

    useEffect(() => {
        window.store.subscribe(() => {
            setCount(window.store.count);
        });
    }, []);

    return (
        <div className={'card react-mini-app'}>
            <div>
                <h1>React Micro App</h1>
                <h3>React clicks count: {count}</h3>
                <button className={'btn increment'} type={'button'} onClick={window.store.increment}>
                    INCREMENT COUNT
                </button>
                <button className={'btn decrement'} type={'button'} onClick={window.store.decrement}>
                    DECREMENT COUNT
                </button>
            </div>
        </div>
    );
};

export default App;
