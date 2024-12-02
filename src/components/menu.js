class Menu extends HTMLElement {
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

                button{
                    background-color: transparent;
                    border: none;
                    padding: 0;
                }

                .menu ul{
                    align-items: center;
                    display: flex;
                    gap: 0.5rem;
                    justify-content: space-between;
                    margin: 0;
                    padding: 0.2rem 10%;
                }

                .menu ul li{
                    font-family: Roboto, "Helvetica Neue", Arial;
                    font-size: .75rem;
                    font-weight: 700;
                }

                .menu ul li:first-child{
                    fill: hsl(0, 0%, 0%);
                    width: 1.7rem;
                }

                .menu ul li:last-child{
                    fill: hsl(0, 0%, 0%);
                    width: 1.2rem;
                }
            </style>

             <div class="menu">
                <ul>
                    <li>
                        <a class="menu-link home-icon" aria-label="home" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 4l8 7.77-1.5 1.46-6.5-6.3-6.49 6.3L4 11.77 12 4zM6.29 19v-4.98L12 8.61l5.71 5.4V19h-4.08v-4.53h-3.26V19H6.29z" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </li>
                    <li><a href="">NOTICIAS</a></li>
                    <li><a href="">SUCESOS</a></li>
                    <li><a href="">DEPORTES</a></li>
                    <li><a href="">OPINION</a></li>
                    <li><a href="">XALOC</a></li>
                    <li><a href="">PARTICIPA</a></li>
                    <li><a href="">OCIO</a></li>
                    <li><a href="">VIPS</a></li>
                    <li><a href="">GUIA UTIL</a></li>
                    <li><a href="">SIURELLS CLUB VALORES</a></li>
                    <li><a href="">MONOGRAFICOS</a></li>
                    <li>
                        <a aria-label="search" class="icon search" href="/search.html">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <path d="M195.55 173.79l-41.22-41.22c9.94-14.34 14.9-30.32 14.9-47.95 0-11.47-2.22-22.42-6.67-32.88-4.45-10.45-10.46-19.47-18.03-27.04s-16.58-13.59-27.04-18.03C107.03 2.22 96.08 0 84.62 0 73.16 0 62.2 2.22 51.74 6.67 41.28 11.11 32.27 17.13 24.7 24.7c-7.58 7.57-13.58 16.59-18.03 27.04C2.22 62.2 0 73.15 0 84.62c0 11.46 2.22 22.42 6.67 32.88 4.45 10.45 10.46 19.47 18.03 27.04 7.57 7.56 16.59 13.58 27.04 18.03 10.46 4.44 21.42 6.67 32.87 6.67 17.63 0 33.62-4.98 47.96-14.91l41.22 41.1c2.89 3.05 6.49 4.58 10.82 4.58 4.25 0 7.87-1.51 10.87-4.51 3.01-3 4.51-6.63 4.51-10.88s-1.47-7.86-4.44-10.83zm-72.89-51.13c-10.54 10.53-23.22 15.8-38.04 15.8s-27.5-5.26-38.04-15.8c-10.54-10.54-15.81-23.22-15.81-38.04s5.27-27.51 15.81-38.04c10.54-10.53 23.21-15.81 38.04-15.81s27.5 5.28 38.04 15.81c10.54 10.53 15.81 23.22 15.81 38.04s-5.28 27.5-15.81 38.04z"></path>
                            </svg>            
                        </a>
                    </li>
                </ul>
            </div>
        </div> `
    }
}    
  
customElements.define('menu-component', Menu)
