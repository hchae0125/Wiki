import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import Loader from '../components/shared/Loader';
import { IPage } from '../models/IPage';
import PageService from '../services/PageService';
import { Link } from 'react-router-dom';

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
    const [currentState, setCurrentState] = React.useState({keyword: params.keyword, searchedPages: props.searchedPages, isLoading: true});

    React.useEffect(() => {
        console.log('params',params);
        if (params) {
            if(params.keyword) setCurrentState({...currentState, keyword: params.keyword, isLoading:false});
            PageService.searchPage(params.keyword).then((res) => {
                setCurrentState({...currentState, searchedPages: res, isLoading: false});
            }).catch((error) => console.log(error));
        }
    },[params]);
    
    return (
       <>
       {!currentState.keyword && <Redirect to="/"></Redirect>}
       <Loader show={currentState.isLoading} />
       {!currentState.isLoading && currentState.searchedPages && (
           <>
            <Grid container>
                <Grid sm={8} item>
                <h1> Search Results: {currentState.searchedPages.length}</h1>
                </Grid>
                <Grid sm={4} item className="align-right">

                </Grid>
            </Grid>
            <Grid container>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Page Name</TableCell>
                                <TableCell align="left">Content</TableCell>
                                <TableCell align="left">Link</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentState.searchedPages.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="left">{row.content}</TableCell>
                                    <TableCell align="left"><Link to={`/pages/${row.urlFriendlyName}/view`}>Link</Link></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
           </>
       )}
       </>
    )
}

export default Search;