class Main extends HTMLElement {
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
          main{
            display: flex;
            flex-wrap: wrap;
            gap: 5%;
            padding: 0 10%;
            width: 80%;
          }
        </style>
  
        <main>
            <slot></slot> 
        </main>
        `
    }
  }
  
  customElements.define('main-component', Main)