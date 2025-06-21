import React from "react"
import { GridRow, GridColumn, Grid, Image, Message } from 'semantic-ui-react'

/* TODO адаптивный переход/блок на мобилках*/

export class AskMePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className="main-content">
            <Grid columns={6}>
                <GridRow>
                    <GridColumn>
                        <Message color='yellow'>Как зовут</Message>
                    </GridColumn>
                    <GridColumn>
                        <Image size="small" src='/images/users/simple.png' />
                    </GridColumn>
                </GridRow>

                <GridRow>
                    <GridColumn>
                        <Image size="small" src='/images/users/gray.jpg' />
                    </GridColumn>
                    <GridColumn>
                        <Message color='blue'>Грий</Message>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    }
}