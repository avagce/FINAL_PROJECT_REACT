import React, { Component } from 'react';
import ReactBoardService from '../service/ReactBoardService'

class BoardList extends Component {
    constructor(props){
        super(props)
        this.state = {
            rt_board:[]
        }
        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount(){
        ReactBoardService.getReactBoard().then((res) => {
            this.setState({rt_board:res.data});
        });
    }

    createBoard(){
        this.props.history.push('/create-board/_create')
    }

    readBoard(bno){
            this.props.history.push(`/read-board/${bno}`);
    }

    render() {
        return (
            <div>
                <h2 className='test-center'>Board List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.createBoard}>글작성</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>제목</th>
                                <th>내용</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>수정일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rt_board.map(
                                    rt_board =>
                                    <tr key={rt_board.bno}>
                                        <td>{rt_board.bno}</td>
                                        <td><a onClick={() => this.readBoard(rt_board.bno)}>{rt_board.title}</a></td>
                                        <td>{rt_board.content}</td>
                                        <td>{rt_board.writer}</td>
                                        <td>{rt_board.regDate}</td>
                                        <td>{rt_board.updateDate}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BoardList;