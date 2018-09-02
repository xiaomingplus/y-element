let element = createElement('div',{
    class:'test'
},[
    createElement('p',{
        class:'p-class'
    },[
        createElement('span',null,'Hello '),
        createElement('span',null,'world')

    ]),
    'hello 2'
]);

render(element,document.getElementById("root"));