import { Button, Grid, Link } from '@material-ui/core';
import * as React from 'react';
import { IPage } from '../../models/IPage';

interface IProps {
    slug: string;
    currentPage: IPage;
    isNew: boolean;
}

const PageEdit: React.FC<IProps> = (props) => {
    return (<>
        <form noValidate autoComplete="off" onSubmit={() => {}}>
            <div className="page-view-container">
                <Grid container>
                    <Grid sm={8} item>
                        <h1>{props.currentPage.name}</h1>
                    </Grid>
                    <Grid sm={4} item className="align-right">
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                    <Link onClick={() => {}}>Cancel</Link>
                    </Grid>
                </Grid>
                <div className="page-view-content">
                    
                </div>
            </div>
        </form>
    </>)
}

export default PageEdit;