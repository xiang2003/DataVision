letmyGraph=document.getElementById('myGraph');
let trace1 = {};
trace1.mode = "lines+markers+text";
trace1.type = "scatters";
trace1.x = [];
trace1.y = [];
trace1.name = "Team A";
trace1.text = [];
trace1.marker = {
    size:20
};
trace1.textposition = "bottom center";
trace1.textfont={
    family:"Raleway, sans-serif",size:10
};

let trace2 = {};
trace2.mode = "lines";
trace2.type = "scatters";
trace2.x = [];
trace2.y = [];
trace2.name = "Team 2";
trace2.line = {
    width:5
};

let trace3 = {};
trace3.mode = "markers";
trace3.type = "scatters";
trace3.x = [];
trace3.y = [];
trace3.name = "Team 3";


for(let i=0;i<set1.length;i++)
{
    trace1.x[i] =set1[i][0];
    trace1.y[i] =set1[i][1];
    trace1.text[i] = set1[i][2]
}
for(let i=0;i<set1.length;i++)
{
    trace2.x[i] =set2[i][0];
    trace2.y[i] =set2[i][1];
}
for(let i=0;i<set1.length;i++)
{
    trace3.x[i] =set3[i][0];
    trace3.y[i] =set3[i][1];
}
let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout ={
    margin:{
        t:20
    },
    xaxis:{
        range:[0,8]
    },
    yaxis:{
        range:[0,25]
    },
    title:"123"

};
Plotly.newPlot(myGraph, data, layout);
