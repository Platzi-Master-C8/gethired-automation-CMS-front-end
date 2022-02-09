/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Card from '../Card/Card';
import NewPageCard from '../NewPageCard/NewPageCard';
import UserTemplates from '../UserTemplates/UserTemplates';

import './UserPages.scss';

const testArr = [
    {
        id: 1,
        title: 'Page1',
        img: 'https://cdn.dribbble.com/users/3547568/screenshots/11655713/media/1b6cf34aa90b0a45773a7f8594802a29.jpg?compress=1&resize=400x300',
        description: 'This is page1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 2,
        title: 'Page2',
        img: 'https://cdn.freebiesbug.com/wp-content/uploads/2015/09/personal-website-template-psd-580x435.jpg',
        description: 'This is page2 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 3,
        title: 'Page3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZM7E0aOEXuKNhMCyNInM4hLRahVNladEbg&usqp=CAU',
        description: 'This is page3 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 4,
        title: 'Page4',
        img: 'https://themeforest.img.customer.envatousercontent.com/files/303352037/01_preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=69eebcf44686183176c2b331e63f1a64',
        description: 'This is page4 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 5,
        title: 'Page5',
        img: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/37331/image-upload/Devfolio%20Free%20HTML%20Website%20Template.jpg',
        description: 'This is page5 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 6,
        title: 'Page6',
        img: 'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/60b6b54cca1a1af1b2a9acea_gallery01.jpeg',
        description: 'This is page6 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 7,
        title: 'Page7',
        img: 'https://designshack.net/wp-content/uploads/sketch-website-templates.jpg',
        description: 'This is page7 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
];

const UserPages = (pagesArr) => {
    pagesArr = testArr;

    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow(true);
    };

    return (
        <Container fixed sx={{ mt: 2 }}>
            <div className="pages-container">
                <h3 className="pages-title">Paginas:</h3>
                {pagesArr.length === 0 ? (
                    <span>Loading</span>
                ) : (
                    <div className="card-container">
                        {pagesArr.map((page) => (
                            <Card key={page.id} title={page.title} description={page.description} cover={page.img} />
                        ))}
                        <div onClick={onClick}>
                            <NewPageCard />
                        </div>
                        {show ? <UserTemplates /> : null}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default UserPages;
