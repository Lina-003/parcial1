export class Character extends HTMLElement {
    alternativeName = "Otro nombre";

    static get observedAttributes() {
        return ["name", "species", "gender", "house", "dateOfBirth"];
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.mount();
    }

    attributesChangedCallback(propName, _, newValue) {
        switch (propName) {
            case "name":
                this.characterName = newValue;
                break;
            
            case "species":
                this.characterSpecies = newValue;
                break;
        
            case "gender":
                this.characterGender = newValue;
                break;

            case "house":
                this.characterHouse = newValue;
                break;

            case "yearOfBirth":
                this.characterYearOfBirth = newValue;
                break;
            default:
                break;
        }
    }

    mount() {
        this.render();
        const bttn = this.shadowRoot.querySelector("button");
        bttn.addEventListener("click", () => {
            if (this.alternativeName === "Mismo nombre") {
                this.alternativeName = "Otro nombre"                
            } else {
                this.alternativeName = "Mismo nombre"                
            }
            this.mount();
        } ) 

    }

    render() {
        this.shadowRoot.innerHTML = `
        <section>
            <p>name:${this.characterName}</p>
            <h3>species:${this.characterSpecies}</h3>
            <h3>gender:${this.characterGender}</h3>
            <h3>house:${this.characterHouse}</h3>
            <h3>yearOfBirth:${this.characterYearOfBirth}</h3>
        </section>`
        


    }
}
customElements.define("my-character", Character);