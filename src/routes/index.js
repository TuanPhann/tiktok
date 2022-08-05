import routes from '~/config/routes';

import HeaderOnly from '~/Layout/HeaderOnly';

import Home from '~/Page/home';
import Following from '~/Page/following';
import Profile from '~/Page/profile';
import Upload from '~/Page/upload';

const publicRouter = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
    // { path: '/search', component: Search, layout: null },
];

export { publicRouter };
