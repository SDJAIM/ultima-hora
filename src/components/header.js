class Header extends HTMLElement {
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

            .header-top-bar{
                align-items: center;
                background-color: hsl(0, 0%, 90%);
                display: flex;
                justify-content: space-between;
                padding: 0 10%;
            }

            .header-main-bar{
                align-items: center;
                background-color: hsl(0, 100%, 40%);
                display: flex;
                justify-content: space-between;
                padding: 2rem 10%;
            }

            .header-bottom-bar{
                 background-color: hsl(0, 0%, 90%);
            }
        </style>
  
        <header>
            <div class="header-top-bar"> 
                <slot name="header-top-bar"></slot> 
            </div>
            <div class="header-main-bar">
                <slot name="header-main-bar"></slot> 
            </div>
            <div class="header-bottom-bar">
                <slot name="header-bottom-bar"></slot> 
            </div>
        </header>
        `
    }
  }
  
  customElements.define('header-component', Header)