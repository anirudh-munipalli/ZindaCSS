var colors = [
    {
        color: "black",
        number1: "rgb(25, 25, 25)",
        number2: "rgb(61, 51, 51)",
        number3: "rgb(77, 77, 77)",
        number4: "rgb(102, 102, 102)",
        number5: "rgb(128, 128, 128)",
        number6: "rgb(153, 153, 153)",
        number7: "rgb(179, 179, 179)",
        number8: "rgb(204, 204, 204)",
        number9: "rgb(230, 230, 230)",
        number10: "rgb(255, 255, 255)",
        main: "rgb(0, 0, 0)"
    },
    {
        color: "red",
        number1: "rgb(25, 0, 0)",
        number2: "rgb(51, 0, 0)",
        number3: "rgb(77, 0, 0)",
        number4: "rgb(102, 0, 0)",
        number5: "rgb(128, 0, 0)",
        number6: "rgb(153, 0, 0)",
        number7: "rgb(179, 0, 0)",
        number8: "rgb(204, 0, 0)",
        number9: "rgb(230, 0, 0)",
        number10: "rgb(255, 0, 0)",
        main: "rgb(255, 0, 0)"
    },
    {
        color: "blue",
        number2: "rgb(0, 0, 25)",
        number1: "rgb(0, 0, 51)",
        number3: "rgb(0, 0, 77)",
        number4: "rgb(0, 0, 102)",
        number5: "rgb(0, 0, 128)",
        number6: "rgb(0, 0, 153)",
        number7: "rgb(0, 0, 179)",
        number8: "rgb(0, 0, 204)",
        number9: "rgb(0, 0, 230)",
        number10: "rgb(0, 0, 255)",
        main: "rgb(0, 0, 255)"
    },
    {
        color: "green",
        number1: "rgb(0, 25, 0)",
        number2: "rgb(0, 51, 0)",
        number3: "rgb(0, 77, 0)",
        number4: "rgb(0, 102, 0)",
        number5: "rgb(0, 128, 0)",
        number6: "rgb(0, 153, 0)",
        number7: "rgb(0, 179, 0)",
        number8: "rgb(0, 204, 0)",
        number9: "rgb(0, 230, 0)",
        number10: "rgb(0, 255, 0)",
        main: "rgb(0, 255, 0)"
    },
    {
        color: "purple",
        number1: "rgb(15, 2, 23)",
        number2: "rgb(29, 4, 47)",
        number3: "rgb(58, 8, 94)",
        number4: "rgb(87, 12, 141)",
        number5: "rgb(116, 16, 188)",
        number6: "rgb(145, 20, 235)",
        number7: "rgb(167, 67, 239)",
        number8: "rgb(189, 114, 243)",
        number9: "rgb(211, 161, 247)",
        number10: "rgb(233, 208, 251)",
        main: "rgb(160, 32, 240)"
    },
    {
        color: "yellow",
        number1: "rgb(26, 26, 0)",
        number2: "rgb(51, 51, 0)",
        number3: "rgb(77, 77, 0)",
        number4: "rgb(102, 102, 0)",
        number5: "rgb(128, 128, 0)",
        number6: "rgb(153, 153, 0)",
        number7: "rgb(179, 179, 0)",
        number8: "rgb(204, 204, 0)",
        number9: "rgb(230, 230, 0)",
        number10: "rgb(255, 255, 0)",
        main: "rgb(255, 255, 0)"
    },
    {
        color: "pink",
        number1: "rgb(51, 0, 9)",
        number2: "rgb(102, 0, 19)",
        number3: "rgb(153, 0, 28)",
        number4: "rgb(204, 0, 37)",
        number5: "rgb(255, 0, 47)",
        number6: "rgb(255, 51, 88)",
        number7: "rgb(255, 102, 130)",
        number8: "rgb(255, 153, 172)",
        number9: "rgb(255, 204, 213)",
        number10: "rgb(255, 230, 234)",
        main: "rgb(255, 51, 88)"
    },
    {
        color: "brown",
        number1: "rgb(51, 25, 0)",
        number2: "rgb(102, 49, 0)",
        number3: "rgb(153, 74, 0)",
        number4: "rgb(204, 99, 0)",
        number5: "rgb(255, 123, 0)",
        number6: "rgb(255, 150, 51)",
        number7: "rgb(255, 176, 102)",
        number8: "rgb(255, 202, 153)",
        number9: "rgb(255, 229, 204)",
        number10: "rgb(255, 242, 230)",
        main: "rgb(153, 74, 0)"
    },
    {
        color: "sky",
        number1: "rgb(0, 39, 51)",
        number2: "rgb(0, 78, 102)",
        number3: "rgb(0, 117, 153)",
        number4: "rgb(0, 156, 204)",
        number5: "rgb(0, 195, 255)",
        number6: "rgb(51, 207, 255)",
        number7: "rgb(102, 219, 255)",
        number8: "rgb(153, 231, 255)",
        number9: "rgb(204, 243, 255)",
        number10: "rgb(230, 249, 255)",
        main: "rgb(51, 207, 255)"
    },
    {
        color: "orange",
        number1: "rgb(255, 246, 230)",
        number2: "#ffeccc",
        number3: "#ffda99",
        number4: "#ffc766",
        number5: "#ffb433",
        number6: "#ffa200",
        number7: "#cc8100",
        number8: "#996100",
        number9: "#664100",
        number10: "#332000",
        main: "rgb(255, 165, 0)"
    },
]
var extra = `
.text-white, .color-white{color: rgb(255, 255, 255)}
.bg-white{background-color: rgb(255, 255, 255)}
`
function Implement(){
    var stylesheet = "";
    for(let i = 0; i < colors.length; i++){
        var obj = colors[i];
        var color = obj.color;
        for(let j = 1; j <= 10; j++){
            var addToCSSColor = `.color-${color}-${j}{color: ${obj["number" + j]};} `;
            stylesheet += addToCSSColor;

            var addToCSSBG = `.bg-${color}-${j}{background-color: ${obj["number" + j]};} `;
            stylesheet += addToCSSBG;

            var addToCSSBorder = `.border-${color}-${j}{border-color: ${obj["number" + j]};} `;
            stylesheet += addToCSSBorder;
        }
        var addToCSSAlternate = `.text-${color}{color:${obj.main};}.color-${color}{color: ${obj.main};}.bg-${color}{background-color: ${obj.main};}.border-${color}{border-color: ${obj.main}}`;
        stylesheet += addToCSSAlternate;
    }
    stylesheet += extra;
    return stylesheet;
}
module.exports = {Implement}
