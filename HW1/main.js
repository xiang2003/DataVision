d3.csv('import_and_export.csv').then(
    res=>{
        console.log(res)
        solve(res)
    }
);
function solve(res)
{
    let myGraph=document.getElementById('myGraph');
    let Import = {};
    Import.mode = "lines";
    Import.type = "scatters";
    Import.x = [];
    Import.y = [];
    Import.name = "進口";
    Import.text = [];
    Import.marker = {
        size:20
    };
    Import.textposition = "bottom center";
    Import.textfont={
        family:"Raleway, sans-serif",size:10
    };

    let Export = {};
    Export.mode = "lines";
    Export.type = "scatters";
    Export.x = [];
    Export.y = [];
    Export.name = "出口";
    Export.line = {
        width:5
    };

    for(let x=0;x<52;x++){
        Import.x[x]=res[x]["year"];
        Export.x[x]=res[x]["year"];
        Import.y[x]=res[x]["import"];
        Export.y[x]=res[x]["export"];
    }


    let data =[];
    data.push(Import);
    data.push(Export);

    let layout ={
        margin:{
            t:20
        },
        title:"歷年進出口",
        updatemenus:[
            {
                y:1.2,
                x:0.3,
                yanchor:'top',
                buttons:[   
                    {
                        method:'restyle',
                        args:['visible',[true, false]],
                        label:'進口'
                    },
                    {
                        method: 'restyle',
                        args: ['visible', [false, true]],
                        label: '出口'
                    },
                    {
                        method: 'restyle',
                        args: ['visible', [true, true]],
                        label: '全部'}]
                    }
                ]


    };
    Plotly.newPlot(myGraph, data, layout);
}