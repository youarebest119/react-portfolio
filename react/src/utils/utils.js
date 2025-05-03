
export function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

export const text = [
    {
        letter: "c",
        color: "#d73a49",
    },
    {
        letter: "o",
        color: "#d73a49",
    },
    {
        letter: "n",
        color: "#d73a49",
    },
    {
        letter: "s",
        color: "#d73a49",
    },
    {
        letter: "t",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "p",
        color: "#005cc5",
    },
    {
        letter: "r",
        color: "#005cc5",
    },
    {
        letter: "o",
        color: "#005cc5",
    },
    {
        letter: "v",
        color: "#005cc5",
    },
    {
        letter: "i",
        color: "#005cc5",
    },
    {
        letter: "d",
        color: "#005cc5",
    },
    {
        letter: "e",
        color: "#005cc5",
    },
    {
        letter: "r",
        color: "#005cc5",
    },
    {
        letter: " ",
        color: "#005cc5",
    },
    {
        letter: "=",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "n",
        color: "#d73a49",
    },
    {
        letter: "e",
        color: "#d73a49",
    },
    {
        letter: "w",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "A",
        color: "#6f42c1",
    },
    {
        letter: "l",
        color: "#6f42c1",
    },
    {
        letter: "c",
        color: "#6f42c1",
    },
    {
        letter: "h",
        color: "#6f42c1",
    },
    {
        letter: "e",
        color: "#6f42c1",
    },
    {
        letter: "m",
        color: "#6f42c1",
    },
    {
        letter: "y",
        color: "#6f42c1",
    },
    {
        letter: "P",
        color: "#6f42c1",
    },
    {
        letter: "r",
        color: "#6f42c1",
    },
    {
        letter: "o",
        color: "#6f42c1",
    },
    {
        letter: "v",
        color: "#6f42c1",
    },
    {
        letter: "i",
        color: "#6f42c1",
    },
    {
        letter: "d",
        color: "#6f42c1",
    },
    {
        letter: "e",
        color: "#6f42c1",
    },
    {
        letter: "r",
        color: "#6f42c1",
    },
    {
        letter: "(",
        color: "#24292e",
    },
    {
        letter: "p",
        color: "#24292e",
    },
    {
        letter: "r",
        color: "#24292e",
    },
    {
        letter: "o",
        color: "#24292e",
    },
    {
        letter: "v",
        color: "#24292e",
    },
    {
        letter: "i",
        color: "#24292e",
    },
    {
        letter: "d",
        color: "#24292e",
    },
    {
        letter: "e",
        color: "#24292e",
    },
    {
        letter: "r",
        color: "#24292e",
    },
    {
        letter: "C",
        color: "#24292e",
    },
    {
        letter: "o",
        color: "#24292e",
    },
    {
        letter: "n",
        color: "#24292e",
    },
    {
        letter: "f",
        color: "#24292e",
    },
    {
        letter: "i",
        color: "#24292e",
    },
    {
        letter: "g",
        color: "#24292e",
    },
    {
        letter: ")",
        color: "#24292e",
    },
    {
        letter: ".",
        color: "#24292e",
    },
    {
        letter: "c",
        color: "#6f42c1",
    },
    {
        letter: "o",
        color: "#6f42c1",
    },
    {
        letter: "n",
        color: "#6f42c1",
    },
    {
        letter: "n",
        color: "#6f42c1",
    },
    {
        letter: "e",
        color: "#6f42c1",
    },
    {
        letter: "c",
        color: "#6f42c1",
    },
    {
        letter: "t",
        color: "#6f42c1",
    },
    {
        letter: "(",
        color: "#24292e",
    },
    {
        letter: "\n",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: "(",
        color: "#24292e",
    },
    {
        letter: "r",
        color: "#e36209",
    },
    {
        letter: "p",
        color: "#e36209",
    },
    {
        letter: "c",
        color: "#e36209",
    },
    {
        letter: "C",
        color: "#e36209",
    },
    {
        letter: "l",
        color: "#e36209",
    },
    {
        letter: "i",
        color: "#e36209",
    },
    {
        letter: "e",
        color: "#e36209",
    },
    {
        letter: "n",
        color: "#e36209",
    },
    {
        letter: "t",
        color: "#e36209",
    },
    {
        letter: ")",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "=",
        color: "#d73a49",
    },
    {
        letter: ">",
        color: "#d73a49",
    },
    {
        letter: "\n",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "n",
        color: "#d73a49",
    },
    {
        letter: "e",
        color: "#d73a49",
    },
    {
        letter: "w",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "L",
        color: "#6f42c1",
    },
    {
        letter: "i",
        color: "#6f42c1",
    },
    {
        letter: "g",
        color: "#6f42c1",
    },
    {
        letter: "h",
        color: "#6f42c1",
    },
    {
        letter: "t",
        color: "#6f42c1",
    },
    {
        letter: "S",
        color: "#6f42c1",
    },
    {
        letter: "m",
        color: "#6f42c1",
    },
    {
        letter: "a",
        color: "#6f42c1",
    },
    {
        letter: "r",
        color: "#6f42c1",
    },
    {
        letter: "t",
        color: "#6f42c1",
    },
    {
        letter: "C",
        color: "#6f42c1",
    },
    {
        letter: "o",
        color: "#6f42c1",
    },
    {
        letter: "n",
        color: "#6f42c1",
    },
    {
        letter: "t",
        color: "#6f42c1",
    },
    {
        letter: "r",
        color: "#6f42c1",
    },
    {
        letter: "a",
        color: "#6f42c1",
    },
    {
        letter: "c",
        color: "#6f42c1",
    },
    {
        letter: "t",
        color: "#6f42c1",
    },
    {
        letter: "A",
        color: "#6f42c1",
    },
    {
        letter: "c",
        color: "#6f42c1",
    },
    {
        letter: "c",
        color: "#6f42c1",
    },
    {
        letter: "o",
        color: "#6f42c1",
    },
    {
        letter: "u",
        color: "#6f42c1",
    },
    {
        letter: "n",
        color: "#6f42c1",
    },
    {
        letter: "t",
        color: "#6f42c1",
    },
    {
        letter: "(",
        color: "#24292e",
    },
    {
        letter: "{",
        color: "#24292e",
    },
    {
        letter: "\n",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: ".",
        color: "#d73a49",
    },
    {
        letter: ".",
        color: "#d73a49",
    },
    {
        letter: ".",
        color: "#d73a49",
    },
    {
        letter: "a",
        color: "#24292e",
    },
    {
        letter: "c",
        color: "#24292e",
    },
    {
        letter: "c",
        color: "#24292e",
    },
    {
        letter: "o",
        color: "#24292e",
    },
    {
        letter: "u",
        color: "#24292e",
    },
    {
        letter: "n",
        color: "#24292e",
    },
    {
        letter: "t",
        color: "#24292e",
    },
    {
        letter: "C",
        color: "#24292e",
    },
    {
        letter: "o",
        color: "#24292e",
    },
    {
        letter: "n",
        color: "#24292e",
    },
    {
        letter: "f",
        color: "#24292e",
    },
    {
        letter: "i",
        color: "#24292e",
    },
    {
        letter: "g",
        color: "#24292e",
    },
    {
        letter: ",",
        color: "#24292e",
    },
    {
        letter: "\n",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: "r",
        color: "#24292e",
    },
    {
        letter: "p",
        color: "#24292e",
    },
    {
        letter: "c",
        color: "#24292e",
    },
    {
        letter: "C",
        color: "#24292e",
    },
    {
        letter: "l",
        color: "#24292e",
    },
    {
        letter: "i",
        color: "#24292e",
    },
    {
        letter: "e",
        color: "#24292e",
    },
    {
        letter: "n",
        color: "#24292e",
    },
    {
        letter: "t",
        color: "#24292e",
    },
    {
        letter: ",",
        color: "#24292e",
    },
    {
        letter: "\n",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: "}",
        color: "#24292e",
    },
    {
        letter: ")",
        color: "#24292e",
    },
    {
        letter: "\n",
        color: "#24292e",
    },
    {
        letter: ")",
        color: "#24292e",
    },
    {
        letter: ";",
        color: "#24292e",
    },
    {
        letter: "\n",
        color: "#24292e",
    },
    {
        letter: "\n",
        color: "#24292e",
    },
    {
        letter: "c",
        color: "#d73a49",
    },
    {
        letter: "o",
        color: "#d73a49",
    },
    {
        letter: "n",
        color: "#d73a49",
    },
    {
        letter: "s",
        color: "#d73a49",
    },
    {
        letter: "t",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "{",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#24292e",
    },
    {
        letter: "h",
        color: "#005cc5",
    },
    {
        letter: "a",
        color: "#005cc5",
    },
    {
        letter: "s",
        color: "#005cc5",
    },
    {
        letter: "h",
        color: "#005cc5",
    },
    {
        letter: " ",
        color: "#005cc5",
    },
    {
        letter: "}",
        color: "#24292e",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "=",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "a",
        color: "#d73a49",
    },
    {
        letter: "w",
        color: "#d73a49",
    },
    {
        letter: "a",
        color: "#d73a49",
    },
    {
        letter: "i",
        color: "#d73a49",
    },
    {
        letter: "t",
        color: "#d73a49",
    },
    {
        letter: " ",
        color: "#d73a49",
    },
    {
        letter: "p",
        color: "#24292e",
    },
    {
        letter: "r",
        color: "#24292e",
    },
    {
        letter: "o",
        color: "#24292e",
    },
    {
        letter: "v",
        color: "#24292e",
    },
    {
        letter: "i",
        color: "#24292e",
    },
    {
        letter: "d",
        color: "#24292e",
    },
    {
        letter: "e",
        color: "#24292e",
    },
    {
        letter: "r",
        color: "#24292e",
    },
    {
        letter: ".",
        color: "#24292e",
    },
    {
        letter: "s",
        color: "#6f42c1",
    },
    {
        letter: "e",
        color: "#6f42c1",
    },
    {
        letter: "n",
        color: "#6f42c1",
    },
    {
        letter: "d",
        color: "#6f42c1",
    },
    {
        letter: "U",
        color: "#6f42c1",
    },
    {
        letter: "s",
        color: "#6f42c1",
    },
    {
        letter: "e",
        color: "#6f42c1",
    },
    {
        letter: "r",
        color: "#6f42c1",
    },
    {
        letter: "O",
        color: "#6f42c1",
    },
    {
        letter: "p",
        color: "#6f42c1",
    },
    {
        letter: "e",
        color: "#6f42c1",
    },
    {
        letter: "r",
        color: "#6f42c1",
    },
    {
        letter: "a",
        color: "#6f42c1",
    },
    {
        letter: "t",
        color: "#6f42c1",
    },
    {
        letter: "i",
        color: "#6f42c1",
    },
    {
        letter: "o",
        color: "#6f42c1",
    },
    {
        letter: "n",
        color: "#6f42c1",
    },
    {
        letter: "(",
        color: "#24292e",
    },
    {
        letter: "u",
        color: "#24292e",
    },
    {
        letter: "o",
        color: "#24292e",
    },
    {
        letter: ")",
        color: "#24292e",
    },
    {
        letter: ";",
        color: "#24292e",
    },
];