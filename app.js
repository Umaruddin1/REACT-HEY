

const parent = React.createElement("div", {id:"parent" }, React.createElement("div", {id:"child"},[React.createElement("h1",{id:"heading"}, "this is child class h1"),React.createElement("h2", {}, "iam small")]));



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);





