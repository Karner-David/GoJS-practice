// const myDiagram = 
//     new go.Diagram("myDiagramDiv", {
//         "undoManager.isEnabled": true
//     });

// const nodeDataArray = [
//     {key: 1, text: "Alpha"},
//     {key: 2, text: "Beta", group: 4},
//     {key: 3, text: "Gamma", group: 4},  
//     {key: 4, text: "Delta", isGroup: true},
//     {key: 5, text: "Omega", isGroup: true},
// ]

// const linkDataArray = [
//     { from: 1, to: 2 },
//     { from: 2, to: 3 },
//     { from: 4, to: 5 },
// ]

// myDiagram.nodeTemplate =
//     new go.Node("Auto")
//         .add(
//             new go.Shape("Ellipse", {fill: "white"}),
//             new go.TextBlock()
//                 .bind("text")
//         );

// myDiagram.groupTemplate =
//     new go.Group("Vertical")
//         .add(
//             new go.Panel("Auto")
//                 .add(
//                     new go.Shape("RoundedRectangle", {
//                         parameter1: 14,
//                         fill: "lightblue",
//                     }),
//                     new go.Placeholder({padding: 5})
//                 ),
//             new go.TextBlock({alignment: go.Spot.Right, font: "Bold 12pt Sans-Serif"})
//                 .bind("text")
//         );

// myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

myDiagram = 
        new go.Diagram("myDiagramThing", {
            "undoManager.isEnabled": true
        });

nodeDataArray = [
    { key: 12, text: "Cats", isGroup: true},
    { key: 11, text: "Old Gen", isGroup: true, group: 12 },
    { key: 10, text: "New Gen", isGroup: true, group: 12 },
    { key: 9, text: "Group Zazu", isGroup: true, group: 10},
    { key: 1, name: "Reg Zazu", favcolor: "pink", source: "./imgs/reg_zazu.jpg", group: 9},
    { key: 2, name: "Nerd Zazu", favcolor: "hotpink", source: "./imgs/nerd_zazu.jpg", group: 9 },
    { key: 3, name: "French Zazu", favcolor: "purple", source: "./imgs/french_zazu.jpg", group: 9},
    { key: 4, name: "Baby Cat", favcolor: "red", source: "./imgs/baby_cat.jpg", group: 10},
    { key: 5, name: "Goofy Cat", favcolor: "orange", source: "./imgs/goofi_cat.jpg", group: 11 },
    { key: 6, name: "Happy Cat", favcolor: "yellow", source: "./imgs/hapi_cat.jpg", group: 11 },
    { key: 7, name: "Sad Cat", favcolor: "green", source: "./imgs/sad_cat.jpg", group: 11 },
    { key: 8, name: "Tired Cat", favcolor: "blue", source: "./imgs/tired_cat.jpg", group: 10 },
];

linkDataArray = {} 

myDiagram.groupTemplate = 
    new go.Group("Auto", {background: "lightgray"})
        .add(
            new go.Shape("RoundedRectangle", {fill: "lightblue"}),
            new go.Panel("Vertical", {margin: 5})
                .add(
                    go.GraphObject.build("SubGraphExpanderButton", {margin: new go.Margin(5, 5, 0, 0), alignment: go.Spot.Right}),
                    new go.TextBlock({alignment: go.Spot.Right, font: "Bold 12pt Sans-Serif"})
                        .bind("text"),
                    new go.Placeholder({padding: 5})
                )
            
        )
        .bind("isSubGraphExpanded", "expanded")

myDiagram.nodeTemplate =
    new go.Node("Auto", {background: "lightgray"})
        .add(
            new go.Shape("RoundedRectangle", {fill: "white"}),
            new go.Panel("Vertical", {margin: 5})
                .add(
                    new go.Picture({margin: 10, width: 100, height: 100})
                        .bind("source"),
                    new go.Panel("Auto")
                        .add(
                            new go.Shape("Rectangle", {fill: "transparent", stroke: "black"}),
                            new go.Panel("Table", {defaultRowSeparatorStroke: "gray", defaultColumnSeparatorStroke: "gray"})
                                .addRowDefinition(1, {separatorStrokeWidth: 1.5, separatorStroke: "black"})
                                .addColumnDefinition(1, {separatorStrokeWidth: 1.5, separatorStroke: "black"})
                                .add(
                                    new go.Panel("TableRow", {row: 0})
                                        .add(
                                            new go.TextBlock({column: 0, margin: 5, stroke: "black", font: "bold 14px sans-serif"})
                                                .bind("text", "name", name => "Name: " + name),
                                        ),
                                    new go.Panel("TableRow", {row: 1})
                                        .add(
                                            new go.TextBlock({column: 0, margin: 5, stroke: "black", font: "bold 12px sans-serif"})
                                                .bind("text", "favcolor", c => "Favorite Color: " + c)
                                                .bind("background", "favcolor")
                                        ),
                                    
                                )
                        )
                )
        );

myDiagram.model = new go.GraphLinksModel(nodeDataArray);