import React, { Component } from 'react'
import Header from "../../components/Header"
import {newVote} from "@/api/api"
// import { DatePicker, List } from 'antd-mobile';
import DatePicker from "antd-mobile/lib/date-picker"
import List from "antd-mobile/lib/list"
import "antd-mobile/lib/date-picker/style/css"
import "antd-mobile/lib/list/style/css"
export default class Initiate extends Component {
    state={
        title:"",
        info:"",
        add:"",
        chooseList:[],
        anonymity:"",//是否匿名
        isSingle:"",//是否单选多选
        startTime:"",
        endTime:"",
        data:new Date(Date.now())
    }
    changeCom(e){
        let key = e.target.name;
        this.setState({[key]:e.target.value})
    }
    addCom(e){//获取添加的input框里面的内容
        this.setState({add:e.target.value})
    }
    addToChooseList(){//把input框里面的值添加到chooseList列表中
        let {chooseList,add} = this.state;
        chooseList.push(add);
        this.setState({chooseList,add:""})
    }
    
    delElement(index){//删除chooseList列表中的元素
        let {chooseList} = this.state;
        chooseList.splice(index,1);
        this.setState({chooseList})
    }
    //点击发布传送数据 跳转页面
    async submit(){
        let {title,chooseList,anonymity,isSingle,startTime,endTime,data} = this.state;
        let res = await newVote({
            title,
            chooseList,
            anonymity:anonymity*1,
            isSingle:isSingle*1,
            userId:window.localStorage.userId*1,
            startTime:new Date(),
            endTime:data
        })
        console.log(res,"res")
        this.props.history.go(-1)
    }
    render() {
        let {title,info,chooseList,anonymity,isSingle,add} = this.state;
        return (
            <div className="initiate">
                <Header title="发起投票" back={true}></Header>

                <div className="main">
                    <p>标题：<input type="text" value={title} name="title" onChange={this.changeCom.bind(this)}/></p>
                    <p>描述：<textarea value={info} name="info" onChange={this.changeCom.bind(this)}></textarea></p>

                    <ul>
                        {
                            chooseList && chooseList.map((item,index)=>{
                            return <li key={index}>选项{index}：{item} <b onClick={this.delElement.bind(this,index)}>-</b></li>
                            })
                        }
                    </ul>

                    <p>
                        <input type="text" name="add" value={add} onChange={this.addCom.bind(this)}/>
                        <button onClick={this.addToChooseList.bind(this)}>添加</button>
                    </p>

                    <p>请选择单选多选：
                        <select name="isSingle" id="" value={isSingle} onChange={this.changeCom.bind(this)}>
                            <option value="请选择">请选择</option>
                            <option value="0">单选</option>
                            <option value="1">多选</option>
                        </select>
                    </p>
                    <p>是否匿名：
                        <select value={anonymity} name="anonymity" onChange={this.changeCom.bind(this)}>
                            <option value="请选择">请选择</option>
                            <option value="0">是</option>
                            <option value="1">否</option>
                        </select>
                    </p>
                    {/* 日历 */}
                    <DatePicker
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                        >
                        <List.Item arrow="horizontal">Datetime</List.Item>
                        </DatePicker>
                </div>

                <footer onClick={this.submit.bind(this)}>发布</footer>
            </div>
        )
    }
}
