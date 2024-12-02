class AdBanner extends HTMLElement {
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

          :host{
            width: ${this.getAttribute('width')};
          }

          img{
            object-fit: cover;
            width: 100%;
          }

          .ad-banner{
            margin: 1rem 0;
            width: 100%;
          }

        </style>
  
        <div class="ad-banner">
            <img alt="" src="${this.getAttribute('image')}">
        </div>
        `
    }
  }
  
  customElements.define('ad-banner-component', AdBanner)