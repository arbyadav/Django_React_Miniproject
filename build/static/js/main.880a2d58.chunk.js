(this.webpackJsonpminireact=this.webpackJsonpminireact||[]).push([[0],{4:function(e,t,n){e.exports=n(5)},5:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),s=n.n(i),o=n(2),m=n.n(o),c=m()({getInitialState:function(){return{editing:!1}},edit:function(){this.setState({editing:!0})},remove:function(){alert("It would be removed are you sure:"),this.props.deletefromBoard(this.props.index)},save:function(){this.props.updateBoard(this.refs.newtext.value,this.props.index),this.setState({editing:!1})},renderNormal:function(){return r.a.createElement("div",{className:"cC"},r.a.createElement("div",{className:"cT"},this.props.children),r.a.createElement("button",{className:"bP",onClick:this.edit},"Edit"),r.a.createElement("button",{className:"bD",onClick:this.remove},"Remove")," ")},renderForm:function(){return r.a.createElement("div",{className:"cC"},r.a.createElement("textarea",{ref:"newtext",defaultValue:this.props.children}),r.a.createElement("button",{className:"bS",onClick:this.save},"Save"))},render:function(){return this.state.editing?this.renderForm():this.renderNormal()}}),d=m()({getInitialState:function(){return{comm:["Amit","Akshay","Abhi"]}},removeComment:function(e){var t=this.state.comm;t.splice(e,1),this.setState({comm:t})},updateComment:function(e,t){var n=this.state.comm;n[t]=e,this.setState({comm:n})},eachComment:function(e,t){return r.a.createElement(c,{key:t,index:t,updateBoard:this.updateComment,deletefromBoard:this.removeComment},e)},render:function(){return r.a.createElement("div",{className:"Board"}," ",this.state.comm.map(this.eachComment))}});s.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.880a2d58.chunk.js.map