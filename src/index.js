import React from 'react'
import ReactDOM from 'react-dom'
import CreateReactClass from 'create-react-class'


var Comment=CreateReactClass({

getInitialState:function()
{
    return { editing:false }
},

edit:function()
{
this.setState({editing:true})
},

remove:function()
{
alert("It would be removed are you sure:")
this.props.deletefromBoard(this.props.index)
},

save: function(){
    this.props.updateBoard(this.refs.newtext.value,this.props.index)
    this.setState({editing:false})
},

renderNormal:function()
{
return(
<div className="cC">
<div className="cT">{this.props.children}</div>
<button className="bP" onClick={this.edit}>Edit</button>
<button className="bD" onClick={this.remove}>Remove</button> </div>
)
},

renderForm :function(){
return(
<div className="cC">
<textarea ref="newtext" defaultValue={this.props.children}></textarea>
<button className="bS" onClick={this.save}>Save</button></div>
) 
},


render: function() {
if(this.state.editing)
return this.renderForm()
else
return this.renderNormal()
}

})

var Board=CreateReactClass({

getInitialState: function()
{
    return{comm:['Amit','Akshay','Abhi']};
},


removeComment: function(i){
var arr=this.state.comm;
arr.splice(i,1);
this.setState({comm:arr})
},

updateComment: function(newtext,i){
    var arr=this.state.comm;
    arr[i]=newtext;
    this.setState({comm:arr})
},

eachComment: function(text,i)
{
return(
        <Comment key={i} index={i} updateBoard={this.updateComment} deletefromBoard={this.removeComment}>
        {text}</Comment> )
},

render:function(){
    return (<div className="Board"> {this.state.comm.map(this.eachComment)}</div>)
}

})

//3
ReactDOM.render(<Board/>, document.getElementById('root'));