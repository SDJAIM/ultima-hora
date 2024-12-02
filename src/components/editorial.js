class Editorial extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    static get observedAttributes () {}
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
        /*html*/`
        <style>
            a {
                text-decoration: none;
                color: inherit;
            }
            
            ul{
            list-style: none;
            padding: 0;
          }

            .editorial ul{
                align-items: center;
                display: flex;
                gap: 0.5rem;
                justify-content: space-between;
                font-family: "Roboto", sans-serif;
                font-size: .75rem;
                font-weight: 400;
            }

            .editorial ul li:not(:last-child) a::after {
                padding-left: .25rem;
                content: "|";
            }
        </style>
        
        <div class="editorial">
            <ul>
                <li><a href="">MALLORCA</a></li>
                <li><a href="">MENORCA</a></li>
                <li><a href="">IBIZA Y FORMENTERA</a></li>
            </ul>
        </div>`
    }
}
        
customElements.define('editorial-component', Editorial)