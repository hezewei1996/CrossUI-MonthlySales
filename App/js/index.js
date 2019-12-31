xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Stacks")
                .setHost(host,"xui_ui_stacks1")
                .setItems([
                    {
                        "id":"a",
                        "caption":"page1",
                        "imageClass":"xui-icon-xui"
                    },
                    {
                        "id":"b",
                        "caption":"page2"
                    },
                    {
                        "id":"c",
                        "caption":"page3"
                    },
                    {
                        "id":"d",
                        "caption":"page4",
                        "closeBtn":true,
                        "optBtn":"xui-uicmd-opt",
                        "popBtn":true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        _ctl_fusionchartsxt1_ondataclick:function (prf, value){
            var ns=this;
            ns.ctl_l.setDisabled(false).setValue(value.categoryLabel);
            ns.ctl_v.setDisabled(false).setValue(value.value);
           
            
            ns._curIndex=value.index;
            
            ns.ctl_sbutton6.setDisabled(false);
        },
        _ctl_sbutton6_onclick:function (profile, e, src, value){
            var ns = this,
                l=ns.ctl_l.getValue(),
                v=ns.ctl_v.getValue(),
                data = ns.ctl_fusionchartsxt1.getJSONData();
            
            xui.set(data,["chart","animation"],"0");
            xui.set(data,["data",ns._curIndex], {label:l,value:v});
            
             ns.ctl_fusionchartsxt1.setJSONData(data,true);
        },
        events:{
            "onReady":[
                {
                    "desc":"Action 1",
                    "type":"control",
                    "target":"xui_ui_treegrid24",
                    "args":[
                        "{page.xui_ui_treegrid24.setRawData()}",
                        undefined,
                        undefined,
                        "{page.ctl_fusionchartsxt1.getJSONData().data}"
                    ],
                    "method":"setRawData",
                    "redirection":"other:callback:call"
                }
            ]
        }
    }
});