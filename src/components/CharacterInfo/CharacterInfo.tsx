import React, { useEffect, useState } from 'react';
import _ from 'underscore';
import './CharacterInfo.scss';
import Loading from '../loading/Loading';
import { People } from '../../models/People';

interface Props{
    data : People
}

const CharacterInfo : React.FC<Props> = ({data}) => {

    const [loading, setLoading] = useState<boolean>(false);
    
    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 300);


    }, [data])

    const features = [
        {field : "gender", title : "Gender"},
        {field : "birth_year", title : "Birth Year"},
        {field : "height", title : "Height"},
        {field : "mass", title : "Mass"},
        {field : "hair_color", title : "Hair Color"},
        {field : "xxxx", title : "Hair Color"}
    ];

    if(_.isEmpty(data))
        return (<div></div>);

    let rows = features.map(item => {
        if(data[item.field as keyof People]){
            return (
                <tr key={item.field}>
                    <td>{item.title}</td>
                    <td>{data[item.field as keyof People]}</td>
                </tr> 
            );
        }
        return null;
    });

    if(loading)
        return <Loading />;

    return (

        <div className="ml-3 mr-3 mb-3">
            <table className="table character-info-table">
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