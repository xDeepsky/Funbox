'use strict';

export default class Card {
        constructor(name, filler, size, disable) {
            this.name = name;
            this.filler = filler;
            this.size = size;
            this.disable = disable;
        }
        getBonus() {
            switch (this.size) {
                case 0.5 :
                    return `<span><strong>10</strong> порций<br>мышь в подарок</span>`;
                case 2:
                    return `<span><strong>40</strong> порций<br> <strong>2</strong> мыши в подарок</span>`;
                case 5:
                    return `<span><strong>100</strong> порций<br> <strong>5</strong> мышей в подарок<br>заказчик доволен</span>`;
            }
        }
        getDisable() {
            if (this.disable) {
                return `disabled`;
            } else {
                return '';
            }
        }

        render() {
            if (!this.elem) {
                this.elem = document.createElement("div");
                this.elem.className = "tamplate";
                let catalog = document.querySelector(".wrapper");
                catalog.appendChild(this.elem);
            }
            
            this.elem.innerHTML = `
                <label>
                    <input class="visually-hidden" type="checkbox" ${this.getDisable()}>
                    <div class="card">
                        <h3>${this.name}</h3>
                        <p>${this.filler}</p>
                        ${this.getBonus()}
                        <div class="food-size">
                            <p><span>${this.size}</span><br>кг</p>
                        </div>
                    </div>
                    ${this.disable?`<p class="not-available">Печалька, ${this.filler} закончился.</p>`:`<p class="offer">Чего сидишь? Порадуй котэ, <span>купи.</span></p>`}
                </label>
            `;

            this.elem.querySelector('input').addEventListener('change', (e) => {
                this.elem.querySelector('.card').classList.add('block');
                if (e.target.checked) {
                    switch (this.filler) {
                        case 'c фуа-гра':
                            return this.elem.querySelector('.offer').innerHTML = `Печень утки разварная с артишоками.`;
                        case 'c рыбой':
                            return this.elem.querySelector('.offer').innerHTML = `Головы щучьи с чесноком да свежайшая сёмгушка.`;
                        case 'c курой': 
                            return this.elem.querySelector('.offer').innerHTML = `Филе из цыплят с трюфелями в бульоне.`;
                    }
                } else {
                    this.elem.querySelector('.offer').innerHTML = `Чего сидишь? Порадуй котэ, <span>купи.</span>`;
                }
            });
            this.elem.addEventListener('mouseleave', () => {
                this.elem.querySelector('.card').classList.remove('block');
            });
        }
    }




