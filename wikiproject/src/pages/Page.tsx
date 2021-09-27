import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import PageView from '../components/pages/PageView';
import Loader from '../components/shared/Loader';
import { IPage } from '../models/IPage';
import PageService from '../services/PageService';
type Mode = "edit" | "view";

interface IParam {
    slug: string;
    mode: Mode;
}

interface IPageProps {
    currentState: {mode?: Mode, slug?: string; currentPage?: IPage, isLoading: boolean, isNew: boolean }
}

type IProps = RouteComponentProps<{}> & IPageProps;
const Page: React.FC<IProps> = (props) => {
    const [currentState, setCurrentState] = React.useState<{mode?: Mode, slug?: string; currentPage?: IPage, isLoading: boolean, isNew: boolean }>({mode: "view", isLoading: true, currentPage: null, isNew:false});
    React.useEffect(() => {
        loadData();
    },[]);

    const loadData = () => {
        const params = props.match.params as IParam;
        if (params && (params.mode || params.slug)) {
            if (params.mode) setCurrentState({...currentState, mode: params.mode});
            if (params.slug) {
                const slug = params.slug;
                PageService.getPageBySlug(slug).then((result) => {
                    console.log(result);
                    if (result) {
                        setCurrentState({...currentState, slug: slug, currentPage: result, isLoading: false});
                    } else {
                        const currentPage = {name: slug.replace(/-/g,' '), urlFriendlyName: slug, content: ''};
                        setCurrentState({...currentState, mode: "view", currentPage: currentPage, isLoading: false, isNew: true});
                    }
                }).catch((error) => console.log(error));
            }
        } else {
            PageService.getPage(1).then((result) => {
                setCurrentState({...currentState, slug: result.urlFridnelyName, currentPage: result, isLoading: false});
            });
        }
    }

    const handleEdit = () => {
        let currentPage = currentState.currentPage;
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
                    onEdit={handleEdit}/>
            )
        }
    }

    return (<>
        <React.Fragment>
            <Loader show={currentState.isLoading} />
            {!currentState.isLoading && renderDetail(currentState.mode)}
        </React.Fragment>
    </>)
}

export default Page;