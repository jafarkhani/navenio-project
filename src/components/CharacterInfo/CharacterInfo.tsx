import React, { useEffect, useState } from 'react';
import _ from 'underscore';

import './CharacterInfo.scss';
import Loading from '../loading/Loading';
import displayFeatures , { People } from '../../models/People';

interface Props{
    data : People
}

const CharacterInfo : React.FC<Props> = ({data}) => {

    const [loading, setLoading] = useState<boolean>(false);
    
    useEffect(() => {
        setLoading(true);

        // show loading for new data
        setTimeout(() => {
            setLoading(false);
        }, 300);


    }, [data])

    if(_.isEmpty(data))
        return (null);

    // create table rows of display features
    let rows = displayFeatures.map(item => {
        if(data[item.field as keyof People]){
            return (
                <tr key={item.field}>
                    <td>{item.title}</td>
                    <td data-testid={`info-${item.field}`}>{data[item.field as keyof People]}</td>
                </tr> 
            );
        }
        return null;
    });

    if(loading)
        return <Loading />;

    return (

        <div className="ml-3 mr-3 mb-3">
            <table data-testid="table-character-info" className="table character-info-table">
                <thead className="bg-light">
                    <tr>
                        <td colSpan={2} ><b>{data.name}</b></td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default CharacterInfo;