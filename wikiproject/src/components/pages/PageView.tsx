import { Grid } from '@material-ui/core';
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
    
    React.useEffect(() => {
        PageService.getPageAll().then(res => {
            console.log('page results', res);
        })
    });

    const [allPages, setAllPages] = React.useState<string[]>([]);

    return (<>
        <>
        <div className="page-view-container">
            <div>Page View Component</div>
            <div>
                <Grid container>
                    <Grid sm={8} item>
                        <h1>{props.currentPage && props.currentPage.name || props.slug}</h1>
                    </Grid>
                </Grid>
            </div>

        </div>
        </>
    </>)
}

export default PageView;