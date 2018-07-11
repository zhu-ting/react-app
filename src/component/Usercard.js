import React from 'react';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

@withRouter
class UserCard extends React.Component {

    render() {
        const Header = Card.Header
        const Body = Card.Body
        return (
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.props.userlist.map(v => (
                    v.avatar ? (
                        <Card
                            key={v._id}
                            onClick={() => this.handleClick(v)}
                        >
                            <Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            >
                            </Header>
                            <Body>
                                {v.title === 'boss' ? <div>Company:{v.company}</div> : null}
                                {v.desc.split('\n').map(d => (
                                    <div key={d}>{d}</div>
                                ))}
                                {v.title === 'boss' ? <div>Money:{v.money}</div> : null}
                            </Body>
                        </Card>
                    ) : null
                ))}
            </WingBlank>
        )
    }
}

export default UserCard;