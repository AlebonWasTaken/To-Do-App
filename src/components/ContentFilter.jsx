import React from 'react';

function ContentFilter(props) {
    const Filter = ({list}) => (
        <div className="Menu-item">
            {list}
        </div>
    );

    return(
        <div className="Sidebar">
            <div className="Vertical-menu">
                <Filter list="Today" />
                <Filter list="Upcoming" />
            </div>
        </div>
    )
}

export default ContentFilter;