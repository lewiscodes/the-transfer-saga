import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Header from '../atoms/header';
import Player from '../pages/player';
import Club from '../pages/club';

export enum ERoutes {
    HOME = '/',
    THE_TRANSFER_SAGA = '/the-transfer-saga',
    PLAYER = '/player',
    CLUB = '/club',
    SOURCE = '/source'
}

// https://thetransfersaga.sanity.studio/

const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path={`${ERoutes.SOURCE}/sourceId`} />
                <Route path={`${ERoutes.CLUB}/:clubId`} component={Club} />
                <Route path={`${ERoutes.PLAYER}/:playerId`} component={Player} />
                <Route path={ERoutes.THE_TRANSFER_SAGA} component={Home} />
                <Route exact path={ERoutes.HOME} component={Home} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
