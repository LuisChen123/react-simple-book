import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionsCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props

        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem>
                                    <img
                                        src={item.get('imgUrl')}
                                        alt=""
                                        className="pic"
                                    />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">
                                            {item.get('desc')}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDisPatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionsCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDisPatch)(List);
