document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    class DomElement{
        constructor(selector, height, width, bg, absolute){
            this.selector = selector;
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.absolute = absolute;
            this.top = 0;
            this.left = 0;
            this.down = 0;
            this.right = 0;
            console.log(this.left);
        }

        createElement() {
            if (this.selector.slice(0, 1) === '.') {
                let newElem = document.createElement('div');
                newElem.classList.add(`${this.selector.slice(1)}`);
                document.body.append(newElem);
                newElem.style.top = `${this.top}px;`
            }
        }

        move(){
            document.addEventListener('keydown', (e) =>{
                const elem = document.querySelector('.test');
                elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; position: ${this.absolute};
                left: ${this.left}px; bottom: ${this.down}px; `;

                const key = e.key
                console.log(key);
                if(key === 'ArrowRight'){
                    this.left += 10;
                    elem.style.left = `${this.left}px;`
                }
                if(key === 'ArrowLeft'){
                    this.left -= 10;
                    elem.style.left = `${this.left}px;`
                }
                if(key === 'ArrowDown'){
                    this.down -= 10;
                    elem.style.bottom = `${this.down}px;`
                }
                if(key === 'ArrowUp'){
                    this.down += 10;
                    elem.style.bottom = `${this.down}px;`
                }
            });
        }
    }
    
    const someText = new DomElement('.test', '100px', '100px', '#5a18c4', 'absolute');
    someText.createElement();
    someText.move();

    const start = document.querySelector('.start');
    start.style.cssText = `
    font-size: 40px;
    color: #0f4787;
    font-style: italic;
    font-family: fantasy;
    text-align: center;
    `;

});

