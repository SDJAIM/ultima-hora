class ItemGallery extends HTMLElement {
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
              width: 70%;
            }

            .item-gallery{
              margin: 1rem 0;
              align-items: center;
            }
        </style>
  
        <div class="item-gallery">
            <slot></slot> 
        </div>
        `
    }
  }
  
  customElements.define('item-gallery-component', ItemGallery)