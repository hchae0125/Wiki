import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import Loader from '../components/shared/Loader';
import { IPage } from '../models/IPage';
import PageService from '../services/PageService';

interface ISearchProps {
    keyword?: string;
    searchedPages?: IPage[];
    isLoading: boolean;
}

interface IParam {
    keyword: string;
}

type IProps = RouteComponentProps<{}> & ISearchProps;

const Search: React.FC<IProps> = (props) => {
    const params = props.match.params as IParam;
    const [currentState, setCurrentState] = React.useState({keyword: params, searchedPages: props.searchedPages, isLoading: true});

    React.useEffect(() => {
        console.log('params',params);
        if (params) {
            if (params.keyword) {
                PageService.searchPage(params.keyword).then((res) => {
                    console.log(res);
                    setCurrentState({...currentState, searchedPages: res, isLoading: false});
                }).catch((error) => console.log(error));
            } //setCurrentState({...currentState, keyword: params.keyword, isLoading: false});
            
        }
    },[params]);
    
    return (
        <React.Fragment>
            {!currentState.keyword && <Redirect to="/"></Redirect>}
            <Loader show={currentState.isLoading} />
            {currentState.keyword && !currentState.isLoading && currentState.searchedPages &&
                <>
                {currentState.searchedPages[0].content}
                </>
            }
        </React.Fragment>
    )
}

export default Search;