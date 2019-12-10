import React from "react";
import "./App.css";

import { Grid, Header, Icon, Statistic, Embed } from "semantic-ui-react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  LineSeries
} from "react-vis";

function App() {
  return (
    <div className="App">
      <Header
        color="white"
        as="h1"
        size="huge"
        inverted
        className="dashboard-header"
      >
        SourceClear
      </Header>

      <Grid
        container
        columns="equal"
        relaxed="very"
        textAlign="center"
        stackable
        celled
      >
        <Grid.Row stretched size="300px">
          <Grid.Column stretched textAlign="center">
            <Icon
              name="download"
              color="orange"
              size="massive"
              fitted
              inverted
            />
            <Statistic color="orange" inverted>
              <Statistic.Value>5,550</Statistic.Value>
              <Statistic.Label>Downloads</Statistic.Label>
            </Statistic>
          </Grid.Column>

          <Grid.Column stretched textAlign="center">
            <Icon name="dollar" color="violet" size="massive" fitted inverted />
            <Statistic color="violet" inverted>
              <Statistic.Value>213</Statistic.Value>
              <Statistic.Label>Enterprise Accounts</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column stretched textAlign="center">
            <Icon
              name="exclamation"
              color="red"
              size="massive"
              fitted
              inverted
            />
            <Statistic color="red" inverted>
              <Statistic.Value>562</Statistic.Value>
              <Statistic.Label>Errors</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column stretched textAlign="center">
            <Icon name="code" color="teal" size="massive" fitted inverted />

            <Statistic color="teal" inverted>
              <Statistic.Value>12</Statistic.Value>
              <Statistic.Label>Open Pull Requests</Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched>
          <Grid.Column>
            <Embed
              id="yWhD0dhMd9U"
              placeholder="http://placekitten.com/300/300"
              source="youtube"
              autoplay={true}
            />
          </Grid.Column>
          <Grid.Column>
            <XYPlot width={250} height={250}>
              <HorizontalGridLines />
              <LineSeries
                data={[
                  { x: 1, y: 10 },
                  { x: 2, y: 4 },
                  { x: 3, y: 0 },
                  { x: 4, y: 12 },
                  { x: 5, y: 5 },
                  { x: 6, y: 8 },
                  { x: 7, y: 15 }
                ]}
              />
              <XAxis />
              <YAxis />
            </XYPlot>
          </Grid.Column>
          <Grid.Column>
            <XYPlot width={250} height={250}>
              <HorizontalGridLines />
              <VerticalBarSeries
                data={[
                  { x: 1, y: 10 },
                  { x: 2, y: 5 },
                  { x: 3, y: 15 }
                ]}
              />
              <XAxis />
              <YAxis />
            </XYPlot>
          </Grid.Column>
          <Grid.Column>
            <XYPlot width={250} height={250}>
              <HorizontalGridLines />
              <LineSeries
                data={[
                  { x: 1, y: 10 },
                  { x: 2, y: 5 },
                  { x: 3, y: 15 }
                ]}
              />
              <XAxis />
              <YAxis />
            </XYPlot>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
