const myDiagram = 
    new go.Diagram("myDiagramThing", {
        "undoManager.isEnabled":true
    });

myDiagram.model = new go.GraphLinksModel(
    [
        {key: 1, name: "Reg Zazu", favcolor: "pink", source: "./imgs/reg_zazu.jpg", isGroup: true},
        {key: 2, name: "Nerd Zazu", favcolor: "hotpink", source: "./imgs/nerd_zazu.jpg", isGroup: true, group: 2},
        {key: 3, name: "French Zazu", favcolor: "purple", source: "./imgs/french_zazu.jpg", group: 2},
    ],
    [
        {from: 1, to: 2},
        {from: 1, to: 3},
    ]
)

myDiagram.nodeTemplate = 
    new go.Node("Horizontal", {background: "lightgray"})
        .add(
            new go.Picture({margin: 10, width: 100, height: 100})
                .bind("source"),
            
            
            new go.Panel("Auto", {margin: 10, background: "lightgray"})
            .add(
                new go.Shape("Rectangle", { stroke: "black", strokeWidth: 1, fill: null }),

                new go.Panel("Table", { defaultRowSeparatorStroke: "gray",
                                        defaultColumnSeparatorStroke: "gray" })
                                    .addRowDefinition(1, { separatorStrokeWidth: 1.5, separatorStroke: "black" })
                                    .addColumnDefinition(1, { separatorStrokeWidth: 1.5, separatorStroke: "black" })
                    .add(
                        new go.Panel("TableRow", {row: 0})
                            .add(
                                new go.TextBlock({column: 0, border: "1px solid black", margin: 5, stroke: "white", font: "bold 14px sans-serif"})
                                    .bind("text", "name"),
                            ),
                        new go.Panel("TableRow", {row: 1})
                            .add(
                                new go.TextBlock({column: 0, margin: 5, stroke: "black", font: "bold 12px sans-serif"})
                                    .bind("text", "favcolor", c => "Favorite Color: " + c)
                            ),
                    )   
            
            ),
        );
                

// myDiagram.layout = new go.TreeLayout({
//     angle: 90,
//     layerSpacing: 35,
// });

myDiagram.linkTemplate =
    new go.Link(
        {routing: go.Routing.Orthogonal, corner: 5}
    )
    .add(
        new go.Shape({ strokeWidth: 3, stroke: "hotpink" }),
    );