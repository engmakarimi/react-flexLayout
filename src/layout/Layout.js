import React, { useEffect, useState } from "react";
import "./layout.css";
import * as FlexLayout from "flexlayout-react";
import TabOne from "../components/TabOne";
import TabTwo from "../components/TabTwo";
import Layout_Model from "./model";
import SideBar from "../components/SideBar";
import { Actions, DockLocation } from "flexlayout-react";

function Layout() {
    const [model,updateModel]=useState(FlexLayout.Model.fromJson(Layout_Model))

//  useEffect(() => {
//   console.log("model in use effect",model.toJson())
   
//  }, )
 

  const factory = (node) => {
    var component = node.getComponent();
    if (component === "tab1") {
      return <TabOne></TabOne>;
    } else if (component === "tab2") {
      return <TabTwo></TabTwo>;
    }
    else if(component === "sidebar"){
        return <SideBar></SideBar>;
    }
    return null;
  };





const onAction = (action)=> {
console.log("onAction",action);
if(action.type ==='FlexLayout_DeleteTab'){
    let borders=[...model.toJson()?.borders];
    borders[0]?.children.push(model.getNodeById(action.data.node)?.toJson());
    console.log(model.getNodeById(action.data.node)?.toJson())
    model.doAction(Actions.deleteTab(action.data.node));
    var newmodel={...model.toJson(),borders};
    console.log("model",newmodel);
    updateModel(FlexLayout.Model?.fromJson(newmodel));
}else{

    return action;
}
}
////// 

const onActionTest = (action)=> {

    console.log("onAction",action);
    if(action.type ==='FlexLayout_DeleteTab'){

        // model.doAction(FlexLayout.Actions.updateModelAttributes({
        //     splitterSize:40,
        //     tabSetHeaderHeight:40,
        //     tabSetTabStripHeight:40,
        // }));
     console.log("model",model.toJson());
//    let borders=[...model.toJson()?.borders];
//    borders[0]?.children.push(model.getNodeById(action.data.node)?.toJson());
//    console.log('borders', borders[0])


   //model.getNodeById(action.data.node)?.toJson()

 //updateModel()
// console.log('add',borders);

    // const result1=model.doAction(Actions.moveNode('147', '2', DockLocation.CENTER, 0))
    // model.doAction(Actions.deleteTab(action.data.node));
    //  const result= model.doAction(Actions.addNode(
    //                 {json:model.getNodeById(action.data.node)?.toJson()}, '2', DockLocation.LEFT, -1))
    // console.log('result',result);
    // console.log('result',result1)


}
  return action;
    
}
//////

  return (
      <>
    <FlexLayout.Layout model={model} factory={factory.bind(this)}  onAction={onAction.bind(this)} />
      </>
  );
}

export default Layout;
