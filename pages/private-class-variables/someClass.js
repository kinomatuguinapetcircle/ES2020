export default class Developers {
    #born
    #developers
    constructor() {
        // this.#developers = ['Mariusz', 'Mariusz', 'Mariusz', 'Mariusz', 'Mariusz','Mariusz', 'Mariusz', 'Mariusz', 'Mariusz', 'Mariusz'];
        this.#developers = ['Eric', 'Josh', 'Bibek', 'Maddy', 'Cynthia', 'Milton', 'Stef', 'Alfred', 'Germain', 'Jericho', 'Jervine', 'Mariusz', 'Gordon']
        this.#born = 1995
        this.name = "Kino"
    }
    getNextPresentor() {
        return this.#developers[Math.floor(Math.random() * this.#developers.length)]
    }
    getAge() { return 2020 - this.#born }
}