import cms from '../../sanityCms';
import { useEffect, useState } from "react";
import styles from './styles.module.scss'
import { ISource, ITransfer } from '../../types';
import TopTransferTargets from '../../components/topTransferTargets';
import TopRatedSources from '../../components/topRatedSources';

const Home = (): JSX.Element => {
    const [transferData, setTransferData] = useState<ITransfer[]>([]);
    const [sourcesData, setSourcesData] = useState<ISource[]>([]);

    useEffect(() => {
        const getTransferData = async () => {
            try {
                const data = await cms.fetch(`*[_type == 'transfer']{
                    _id,
                    _createdAt,
                    player->{
                        name,
                        club->
                    },
                    toClub->,
                    source->,
                    price
                }`);
                
                setTransferData(data);
                setSourcesData([]);
            } catch (error) {
                console.log(error); //eslint-disable-line        
            }
        }
    
        getTransferData();
    }, []);

    return (
        <div className={styles.home}>
            <TopTransferTargets transfers={transferData} />
            <TopRatedSources sources={sourcesData} />
        </div>
    );
};

export default Home;
