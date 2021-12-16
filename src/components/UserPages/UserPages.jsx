/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React from 'react';
import Card from '../Card/Card';
import NewPageCard from '../NewPageCard/NewPageCard';

import './UserPages.scss';

const testArr = [
    {
        id: 1,
        title: 'Page1',
        description:
            'This is page1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        title: 'Page2',
        description:
            'This is page2 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        title: 'Page3',
        description:
            'This is page3 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        title: 'Page4',
        description:
            'This is page4 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 5,
        title: 'Page5',
        description:
            'This is page5 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 6,
        title: 'Page6',
        description:
            'This is page6 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 7,
        title: 'Page7',
        description:
            'This is page7 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];
const UserPages = (pagesArr) => {
    pagesArr = testArr;
    return (
        <div className="pages-container">
            <h3 className="pages-title">Paginas:</h3>
            {pagesArr.length === 0 ? (
                <span>Loading</span>
            ) : (
                <div className="card-container">
                    {pagesArr.map((page) => (
                        <Card key={page.id} title={page.title} description={page.description} />
                    ))}
                    <NewPageCard />
                </div>
            )}
        </div>
    );
};

export default UserPages;
