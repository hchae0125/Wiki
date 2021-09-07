import { Grid } from '@material-ui/core';
import * as React from 'react';
import { IPage } from '../../models/IPage';

interface IPageView {
    slug: string;
    currentPage: IPage;
    isNew: boolean;
    onEdit: () => void;
}
type IProps = IPageView;
const PageView: React.FC<IProps> = (props) => {
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