myDiagram = 
    new go.Diagram("myDiagramThing", {
        "undoManager.isEnabled": true,
        layout: new go.TreeLayout({ angle: 0 })
    });

myDiagram.nodeDataArray = [
    {key: 2, name: "Garage.java", isGroup: true},
    {key: 3, name: "Garage Attributes", display: "Attributes", group: 2, isGroup: true},
    {key: 4, name: "floors", type: "List<Floor>", group: 3},
    {key: 5, name: "totalSpots", type: "int", group: 3},
    {key: 6, name: "totalAvailableSpots", type: "int", group: 3},
    {key: 7, name: "maxHeight", type: "int", group: 3},
    {key: 8, name: "Garage Methods", display: "Methods", group: 2, isGroup: true},
    {key: 9, name: "getAvailableSpots()", type: "int", group: 8},
    {key: 10, name: "getMaxHeight()", type: "int", group: 8},
    {key: 11, name: "Floor.java", isGroup: true},
    {key: 12, name: "Floor Attributes", display: "Attributes", group: 11, isGroup: true},
    {key: 13, name: "spots", type: "List<Spot>", group: 12},
    {key: 14, name: "floorNumber", type: "int", group: 12},
    {key: 15, name: "availableSpots", type: "int", group: 12},
    {key: 16, name: "Floor Methods", display: "Methods", group: 11, isGroup: true},
    {key: 17, name: "setAvailableSpots()", type: "void", group: 16},
    {key: 18, name: "getAvailableSpots()", type: "int", group: 16},
    {key: 19, name: "Spot.java", isGroup: true},
    {key: 20, name: "Spot Attributes", display: "Attributes", group: 19, isGroup: true},
    {key: 21, name: "isAvailable", type: "bool", group: 20},
    {key: 22, name: "Spot Methods", display: "Methods", group: 19, isGroup: true},
    {key: 23, name: "setAvailable()", type: "void", group: 22},
    {key: 24, name: "Sensors", isGroup: true},
    {key: 25, name: "UI", isGroup: true}
];

myDiagram.linkDataArray = [
    { from: 2, to: 11, fromLabel: "1", toLabel: "1..*" },
    { from: 2, to: 25, fromLabel: "1", toLabel: "1..*" },
    { from: 11, to: 25, fromLabel: "1", toLabel: "1..*" },
    { from: 11, to: 19, fromLabel: "1", toLabel: "1..*" },
    { from: 19, to: 24, fromLabel: "1", toLabel: "1..*" }
]

myDiagram.model = new go.GraphLinksModel(myDiagram.nodeDataArray, myDiagram.linkDataArray);

myDiagram.groupTemplate = 
    new go.Group("Auto", {background: "lightgray",
                        layout: new go.TreeLayout(),
                        margin: 20,
    })
        .add(
            new go.Shape("RoundedRectangle", {fill: "lightblue", avoidable: true}),
            new go.Panel("Vertical")  // Use a vertical panel to stack TextBlock and Placeholder
                .add(
                    new go.TextBlock({ alignment: go.Spot.Top, font: "Bold 12pt Sans-Serif", margin: 4 })
                        .bind("text", "name"),
                    new go.Placeholder({ padding: 5 })
                )
            
        );
        
myDiagram.nodeTemplate =
    new go.Node("Auto")
        .add(
            new go.Panel("Auto")
                .add(
                    new go.Panel("Vertical")
                        .add(
                            new go.TextBlock()
                                .bind("text", "name"),
                        )
                )
        )

myDiagram.linkTemplate =
    new go.Link({ routing: go.Link.AvoidsNodes, curve: go.Link.None, corner: 5,})
        .add(
            new go.Shape({strokeWidth: 3, stroke: "black"}),
            new go.TextBlock({
                segmentIndex: 0,
                segmentOffset: new go.Point(15, -10), // position above the link
                font: "bold 10pt sans-serif",
                stroke: "black"
            })
                .bind("text", "fromLabel"),
            new go.TextBlock({
                segmentIndex: -1,
                segmentOffset: new go.Point(-15, -10),
                font: "bold 10pt sans-serif",
                stroke: "black"
            })
                .bind("text", "toLabel")
        );




// Parking Garage Plans
// Garage.java
// - attributes: List floors, int totalSpots, int totalAvailableSpots, int maxHeight, 
// - methods: getAvailableSpots(), getMaxHeight() 
// Floor.java
// - attributes: List spots, int floorNumber, int availableSpots, 
// - methods: setAvailableSpots(), getAvailableSpots()
// Spot.java
// - attributes: bool isAvailable
// - methods: setAvailable()
// Sensors
// UI

// plan, we gotta group the classes, then group their attributes and group their methods
// links: garage 1->1..* floor, floor 1..*->1..* spot, spot 1..*->1..* sensor,  