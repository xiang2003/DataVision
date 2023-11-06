let myGraph2=document.getElementById('myGraph2');
let kmtTrace = {};
kmtTrace.type ="bar";
kmtTrace.name = "中國國民黨";
kmtTrace.x =[];
kmtTrace.y =[];
for(let i=0;i<kmt.length;i++){
    kmtTrace.x[i] =kmt[i]['term'];
    kmtTrace.y[i] =kmt[i]['vote'];
}
kmtTrace.marker = {
    color:"blue"
}
let ddpTrace = {};
ddpTrace.type ="bar";
ddpTrace.name = "民主進步黨";
ddpTrace.x =[];
ddpTrace.y =[];
for(let i=0;i<ddp.length;i++){
    ddpTrace.x[i] =ddp[i]['term'];
    ddpTrace.y[i] =ddp[i]['vote'];
}
ddpTrace.marker = {
    color:"green"
}

let pfpTrace = {};
pfpTrace.type ="bar";
pfpTrace.name = "親民黨";
pfpTrace.x =[];
pfpTrace.y =[];
for(let i=0;i<pfp.length;i++){
    pfpTrace.x[i] =pfp[i]['term'];
    pfpTrace.y[i] =pfp[i]['vote'];
}
pfpTrace.marker = {
    color:"orange"
}

let data2 =[];
data2.push(kmtTrace);
data2.push(ddpTrace);
data2.push(pfpTrace);
let layout2 =
{
    title:"各屆總統大選",
    margin:{t:50},
    barmode:"stack",

};
Plotly.newPlot(myGraph2, data2, layout2);
