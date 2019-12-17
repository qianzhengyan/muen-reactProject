import React, { Component } from 'react'
import Header from "../../components/Header"
import {allVote} from "../../api/api"
import BScroll from "better-scroll"
export default class Vote extends Component {
    state={
        ind:0,
        arr:["全部","已结束","正在进行"],
        list:[],
        newList:[]
    }
    changeIndex(index){//点击导航
        this.setState({ind:index})
        let {ind,newList,list} = this.state;
        let time = new Date().getTime();
        // console.log(time,"time")
        if(ind==1){
            newList=list.filter((item)=>{
                return new Date(item.endTime) > time
            })
        }else if(ind==2){
            newList=list.filter((item)=>{
                return new Date(item.endTime) < time
            })
        }else{
            newList=list;
        }
        this.setState({newList})
    }
    async componentDidMount(){
        let res = await allVote();
        console.log(res,"res**************")
        this.setState({list:res.data,newList:res.data})

        new BScroll(".list",{
            probeType:3
        })
    }
    render() {
        let {list,newList} = this.state;
        console.log(list,"list")
        return (
            <div className="vote">
                {/* 顶部 */}
                <Header title="投票" back={true} opt={<span onClick={()=>{this.props.history.push('/initiate')}}>发起投票</span>}></Header>
            
            {/* tab切换导航 */}
            <div className="nav">
                {
                    this.state.arr.map((item,index)=>{
                    return <span key={index} className={this.state.ind===index?"active":""} onClick={this.changeIndex.bind(this,index)}>{item}</span>
                    })
                }
            </div>
            
            {/* 内容 */}
            <div className="list">
                <div className="votelist">
                    {
                        newList && newList.map((item,index)=>{
                            return (
                                <dl key={index}>
                                    <dt>
                                        <img src="" alt=""/>
                                    </dt>
                                    <dd>
                                        <p>{item.title}</p>
                                        <p>{item.endTime}</p>
                                        <p>{item.isSingle==0?"单选":"多选"}</p>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </div>
            </div>
            </div>
        )
    }
}
