let myGraph=document.getElementById('myGraph');
let Height = {};
Height.mode = "lines+markers+text";
Height.type = "scatters";
Height.x = [];
Height.y = [];
Height.name = "身高";
Height.text = [];
Height.marker = {
    size:20
};
Height.textposition = "bottom center";
Height.textfont={
    family:"Raleway, sans-serif",size:10
};

let Weight = {};
Weight.mode = "lines";
Weight.type = "scatters";
Weight.x = [];
Weight.y = [];
Weight.name = "體重";
Weight.line = {
    width:5
};


for(let i=0;i<height.length;i++)
{
    Height.x[i] =height[i][0];
    Height.y[i] =height[i][1];
}
for(let i=0;i<weight.length;i++)
{
    Weight.x[i] =weight[i][0];
    Weight.y[i] =weight[i][1];
}

let data =[];
data.push(Height);
data.push(Weight);

let layout ={
    margin:{
        t:20
    },
    title:"身高體重",
    updatemenus:[
        {
            y:1.2,
            x:0.3,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false]],
                    label:'身高'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, true]],
                    label: '體重'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true]],
                    label: '全部'}]
                }
            ]


};
Plotly.newPlot(myGraph, data, layout);
