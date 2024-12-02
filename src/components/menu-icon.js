class MenuIcon extends HTMLElement {
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
            
            img, picture{
                object-fit: cover;
                width: 100%;
            }

            a {
                text-decoration: none;
                color: inherit;
            }

            ul{
                list-style: none;
                padding: 0;
             }

             
            .menu-icon svg{
                fill: hsl(0, 0%, 100%);
                width: 2rem;
            }   

            
        </style>
        <div class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
        </div>`
    }
}
        
customElements.define('menu-icon-component', MenuIcon)