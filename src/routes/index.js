import HeaderOnly from '~/components/Layout/HeaderOnly';

import Home from '~/Page/home';
import Following from '~/Page/following';
import Profile from '~/Page/profile';
import Upload from '~/Page/upload';

const publicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

export { publicRouter };
