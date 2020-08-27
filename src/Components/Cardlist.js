import React from 'react';
import Card from './Card';

const Cardlist = ({
    Robot
}) => {
    // if (true){
    //     throw new Error('Nooooo!');
    // }
    const CardArray = Robot.map((user, i) => {
        return <Card key = {i} id = {Robot[i].id} name = {Robot[i].name} email = {Robot[i].email}/>
    })
    return ( 
        <div>
            {CardArray}
        </div>
    );
}

export default Cardlist;