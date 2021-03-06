import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersreducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://cors-anywhere.herokuapp.com/http://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
        then( response => { this.props.toggleIsFetching(false);
                            this.props.setUsers(response.data.items);
                            this.props.setTotalUsersCount(response.data.totalCount);
                        });
    }

    clickNamberPage = (pageNamber) => {
        this.props.setCurrentPage(pageNamber);
        this.props.toggleIsFetching(true);
        axios.get(`https://cors-anywhere.herokuapp.com/http://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`).
        then( response => { 
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);});

    }
   
    render() {
        return <>  
                        { this.props.isFetching ? <Preloader /> : null }
                        <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        clickNamberPage={this.clickNamberPage}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow} /> 
                      </>  
}
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))    
        }
    }
} */

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, 
     setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);