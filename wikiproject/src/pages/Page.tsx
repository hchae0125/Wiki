import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import PageView from '../components/pages/PageView';
import Loader from '../components/shared/Loader';
import { IPage } from '../models/IPage';
type Mode = "edit" | "view";
interface IPageProps {
    currentState: {mode?: Mode, slug?: string; currentPage?: IPage, isLoading: boolean, isNew: boolean }
}

type IProps = RouteComponentProps<{}> & IPageProps;
const Page: React.FC<IProps> = (props) => {
    const [currentState, setCurrentState] = React.useState<{mode?: Mode, slug?: string; currentPage?: IPage, isLoading: boolean, isNew: boolean }>({mode: "view", isLoading: true, currentPage: null, isNew:false});
    React.useEffect(() => {
        
    },[]);

    const handleEdit = () => {
        let currentPage = props.currentState.currentPage;
        console.log(currentPage);
    }

    const renderDetail = (mode: Mode) => {
        if (mode == "edit") {
            return (
                <>Page Edit Component</>
            )
        } else {
            return (
                <PageView slug={currentState.slug} isNew={currentState.isNew} currentPage={currentState.currentPage}
                    onEdit={handleEdit}
                />
            )
        }
    }

    return (<>
        <React.Fragment>
            {/* <Loader show={currentState.isLoading} /> */}
            {currentState.isLoading && renderDetail(currentState.mode)}
        </React.Fragment>
    </>)
}

export default Page;