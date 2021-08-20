import React from 'react';
import { useLocation } from 'react-router-dom';

export function AddTimeSheet(props: any) {
    let location = useLocation();
    return (
        <div>
            We are in Add TimeSheet Component
        </div>
    )
}