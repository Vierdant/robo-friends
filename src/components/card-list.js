import React from 'react';
import Card from './card';
import '../styles/card-list.css'

const CardList = ({list, isLoading}) => {
    if (isLoading) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='card-list'>
                {
                    list.map((item) => (
                        <Card 
                            key={item.id} 
                            id={item.id} 
                            name={item.name} 
                            username={item.username} 
                            email={item.email}
                        />
                    ))
                }
            </div>
        );
    }
}

export default CardList;