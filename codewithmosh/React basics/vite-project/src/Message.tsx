function Message (){
    const name = "Smit";
    const getName =>(name){
        if (name)
            return name;
        else return "Guest";
    };
    return <h1>Hello{getName()}</h1> // inside {} we can add js expressions
}

export default Message; //export the component 