import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import NextPage from '../pages/NextPage/index';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/next-page" element={<NextPage />} />
        </Routes>
    );
}
