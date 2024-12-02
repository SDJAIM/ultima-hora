class Row extends HTMLElement {
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
            .row{
                display: flex;
                gap: 1rem;
                margin-bottom: 1rem;
            }
        </style>
  
        <div class="row">
            <slot></slot> 
        </div>
        `
    }
  }
  
  customElements.define('row-component', Row)