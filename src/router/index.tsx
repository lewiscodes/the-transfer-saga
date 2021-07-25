import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import { useEffect } from 'react';
import cms from '../sanityCms';
import Header from '../components/header';

export enum ERoutes {
    HOME = '/'
}

// https://thetransfersaga.sanity.studio/

const AppRouter = (): JSX.Element => {
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await cms.fetch(`*[_type == 'transfer']{
                    _id,
                    player->,
                    toClub,
                    price
                }`);
                
                console.log(data); //eslint-disable-line
            } catch (error) {
                console.log(error); //eslint-disable-line        
            }
        }
    
        getData();
    }, []);

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={ERoutes.HOME} component={Home} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
