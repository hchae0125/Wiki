import { Button, Grid } from '@material-ui/core';
import * as React from 'react';
import { IPage } from '../../models/IPage';
import PageService from '../../services/PageService';

interface IPageView {
    slug: string;
    currentPage: IPage;
    isNew: boolean;
    onEdit: () => void;
}
type IProps = IPageView;
const PageView: React.FC<IProps> = (props) => {
    const [allPages, setAllPages] = React.useState<IPage[]>([]);

    React.useEffect(() => {
        PageService.getPageAll().then(res => {
            setAllPages([...res]);
        });
    },[]);

    const handleEditPage = (e: React.MouseEvent) => {
        if(props.onEdit) props.onEdit();
    }

    return (<>
        <>
        <div className="page-view-container">
            <div>
                <Grid container>
                    <Grid sm={8} item>
                        <h1>{props.currentPage && props.currentPage.name || props.slug}</h1>
                    </Grid>
                    <Grid sm={4} item className="align-right">
                        <Button onClick={handleEditPage}>Edit Page</Button>
                        
                    </Grid>
                </Grid>
                <div className="page-view-content">
                    {props.currentPage && <>{props.currentPage.content}</>}
                    {props.isNew && (
                        <div className="page-view-notfound">
                            This page does not exist.
                        </div>
                    )}
                </div>
            </div>

        </div>
        </>
    </>)
}

export default PageView;