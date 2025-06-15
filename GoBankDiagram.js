myDiagram =
    new go.Diagram("myDiagramDiv", {
        "undoManager.isEnabled": true,
    })

myDiagram.nodeTemplate =
    new go.Node("Auto")
        .bind("location")
        .add(
            new go.Shape("RoundedRectangle", {fill: "#FFE781", stroke: "black", strokeWidth: 2, width: 150}),
            new go.Panel("Vertical")
                .add(
                    new go.Panel("Auto", {background: "#FFE781", width: 150})
                        .add(
                            new go.TextBlock({font: "12pt Sans-Serif", alignment: go.Spot.Center, textAlign: "center"})
                                .bind("text", "key"),
                    ),
                    new go.Panel("Vertical", {margin: 4})
                        .add(
                            new go.Panel("Auto", {width: 150})
                                .add(
                                    new go.Shape("Rectangle", {fill: "white", stroke: "black", strokeWidth: 2}),
                                    new go.Panel("Vertical", {margin: 2, width: 150, alignment: go.Spot.Left, textAlign: "left"})
                                        .bind(
                                            "itemArray",
                                            "attributes", a => a.map(attr => ({ text: `${attr.name}: ${attr.type}` }))
                                        ),
                                ),
                                            
                            new go.Panel("Auto", {width: 150, margin: 2, background: "white"})
                                .add(
                                    // new go.Shape("Rectangle", {fill: "white", stroke: "black", strokeWidth: 2}),
                                    new go.Panel("Vertical", {margin: 2})
                                    .bind(
                                        "itemArray",
                                        "methods", 
                                    )
                                )
                            

                        )
                )
        )

const nodeDataArray = [
    { key: 'Bank', location: new go.Point(250, 150),
        attributes: [
            { name: "BankID", type: "int"},
            { name: "Name", type: "string"},
            { name: "Location", type: "string"},
        ],
        methods: null
    },
    {
        key: "Teller", location: new go.Point(500, 250),
        attributes: [
            { name: "ID", type: "int"},
            { name: "Name", type: "string"},
        ],
        methods: [
            { name: "collectMoney()", type: "int" },
            { name: "openAccount()", type: "boolean" },
            { name: "closeAccount()", type: "boolean" },
            { name: "loanRequest()", type: "boolean" },
            { name: "provideInfo()", type: "string" },
            { name: "issueCard()", type: "boolean" }
        ]
    },
    { key: "Customer", location: new go.Point(250, 300),
        attributes: [
            { name: "ID", type: "int"},
            { name: "Name", type: "string"},
            { name: "Address", type: "string"},
            { name: "Phone Number", type: "string"},
            { name: "Account Number", type: "int"},
        ],
        methods: [
            { name: "generalInquiry()", type: "string" },
            { name: "deposit()", type: "boolean" },
            { name: "withdraw()", type: "boolean" },
            { name: "transfer()", type: "boolean" },
            { name: "openAccount()", type: "boolean" },
            { name: "closeAccount()", type: "boolean" },
            { name: "checkBalance()", type: "double" },
            { name: "requestLoan()", type: "boolean" },
            { name: "requestCard()", type: "boolean" }
        ]
    },
    {
        key: "Account", location: new go.Point(500, 450),
        attributes: [
            { name: "ID", type: "int"},
            { name: "CustomerID", type: "string"},
        ],
        methods: null
    },
    {
        key: "Loan", location: new go.Point(500, 550),
        attributes: [
            { name: "ID", type: "int"},
            { name: "Type", type: "string"},
            { name: "AccountID", type: "double"},
            { name: "CustomerID", type: "double"},
        ],
        methods: null
    },
    {
        key: "Checking", location: new go.Point(750, 390),
        attributes: [
            { name: "ID", type: "int"},
            { name: "CustomerID", type: "int"},
            { name: "Balance", type: "double"},
        ],
    },
    {
        key: "Savings", location: new go.Point(750, 500),
        attributes: [
            { name: "ID", type: "int"},
            { name: "CustomerID", type: "int"},
            { name: "Balance", type: "double"},
        ],
    },
]

const linkDataArray = [
    { from: "Bank", to: "Teller", fromLabel: "1", toLabel: "1..*" },
    { from: "Bank", to: "Customer", fromLabel: "1", toLabel: "1..*" },
    { from: "Teller", to: "Customer", fromLabel: "1..*", toLabel: "1..*" },
    { from: "Customer", to: "Account", fromLabel: "1..*", toLabel: "1..*" },
    { from: "Customer", to: "Loan", fromLabel: "1..*", toLabel: "1..*" },
    { from: "Account", to: "Checking", fromLabel: "1..*", toLabel: "1..*" },
    { from: "Account", to: "Savings", fromLabel: "1..*", toLabel: "1..*" },
]

myDiagram.linkTemplate =
    new go.Link({ routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver, corner: 5 })
        .add(
            new go.Shape({ strokeWidth: 3, stroke: "black" }),
            new go.TextBlock({
                segmentIndex: 0,
                segmentOffset: new go.Point(NaN, NaN), // position above the link
                font: "bold 10pt sans-serif",
                stroke: "black"
            })
                .bind("text", "fromLabel"),
            new go.TextBlock({
                segmentIndex: -1,
                segmentOffset: new go.Point(NaN, NaN),
                font: "bold 10pt sans-serif",
                stroke: "black"
            })
                .bind("text", "toLabel")
        );

myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);        

