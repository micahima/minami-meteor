import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class Tours extends React.Component {
  render() {
    const formatPadding = { marginTop: '20px', marginBottom: '10px' };
    return (
      <Grid centered container columns={3} className={'tourRow'}>
        <Grid.Row><Header as={'h3'} style={formatPadding}>HOME</Header></Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>2020.12.22 17:00</Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column>美波「DROP TOUR 2020」及び「Freiheit ONEMAN LIVE」全公演払い戻しのお知らせ</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>2020.08.03 17:00</Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column>美波「DROP TOUR 2020」及び「Freiheit ONEMAN LIVE」全公演払い戻しのお知らせ</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>2020.06.30 05:00</Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column>美波「アメヲマツ、」の配信を開始しました</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>2020.06.30 00:00</Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column>美波「アメヲマツ、」MVを公開しました</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>2020.06.13 17:00</Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column>美波「DROP TOUR 2020」及び「Freiheit ONEMAN LIVE」及び「伊江島ライブ」全公演延期のお知らせ</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>2020.03.31 00:00</Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column>美波 2020年7月 東京「NHKホール」、9月大阪「大阪城野外音楽堂」詳細決定</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>2020.03.24 00:30</Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column>美波「DROP TOUR 2020」オリジナルグッズのデザインを公開致しました。</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>2020.01.18 02:00</Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column>美波 2020年8月22日 沖縄 伊江島ライブ決定</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
