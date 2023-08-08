// eslint-disable-next-line no-unused-vars
import React from 'react';
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = ({cards}) => {
    return Array(cards).fill(0).map((item, i) => (
        <div className="skeleton__card" key={i}>
            <div className="skeleton__card-img">
                <Skeleton width={285} height={180}/>
            </div>
            <div className="skeleton__card-text">
                <p><Skeleton /></p>
                <p> <Skeleton /></p>
            </div>
        </div>
    ));


};

export default CardSkeleton;