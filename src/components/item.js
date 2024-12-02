class Item extends HTMLElement {
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
                width: 100%;
            }
            
            a {
                text-decoration: none;
                color: inherit;
            }

            
            h1, h2, h3, h4, h5, h6{
                margin: 0;
            }

            img{
                object-fit: cover;
                width: 100%;
            }

            .item{
                display: flex;
                flex-direction: column;
                gap: 0.2rem;
                width: 100%;
            }

            .item-category{
                align-items: center;
                color: hsl(0, 100%, 40%);
                display: flex;
                font-family: "Roboto", sans-serif;
                justify-content: space-between;
                font-weight: 700;
                text-transform: uppercase;
                font-size: .85rem;
            }

            .item-title{
                align-items: center;
                display: flex;
                font-family: "Roboto", sans-serif;
                justify-content: space-between;
                margin: 0;
            }

            .item-title.medium{
                font-size: 0.8rem;
            }

            .item-title.small{
                font-size: 0.7rem;
            }


            .item-author{
                color: hsl(0, 0%, 27%);
                font-family: "Roboto", sans-serif;
                font-size: 0.8rem;
                font-weight: 700;
            }

            .item-author:hover{
                color: hsl(0, 100%, 40%);
            }
        </style>
  
      
        <div class="item"></div>
        `

        const item = this.shadow.querySelector('.item')
        
        if(this.getAttribute('image')){
            const imageElement = document.createElement('div')
            imageElement.classList.add('item-image')
            item.appendChild(imageElement)
    
            const image = document.createElement('img')
            image.src = this.getAttribute('image')
            imageElement.appendChild(image)
        }
       
        if(this.getAttribute('category')){
            const categoryElement = document.createElement('div')
            categoryElement.classList.add('item-category')
            item.appendChild(categoryElement)

            const category = document.createElement('span')
            category.textContent = this.getAttribute('category')
            categoryElement.appendChild(category)
        }
        if (this.getAttribute('title')) {
            const titleElement = document.createElement('div');
            titleElement.classList.add('item-title');
            item.appendChild(titleElement);
        
            const title = document.createElement('h2');
            title.textContent = this.getAttribute('title');
            titleElement.appendChild(title);
        }
        
        if (this.getAttribute('description')) {
            const descriptionElement = document.createElement('div');
            descriptionElement.classList.add('item-description');
            item.appendChild(descriptionElement);
        
            const description = document.createElement('p');
            description.textContent = this.getAttribute('description');
            descriptionElement.appendChild(description);
        }
        
        if (this.getAttribute('author')) {
            const authorElement = document.createElement('div');
            authorElement.classList.add('item-author');
            item.appendChild(authorElement);
        
            const author = document.createElement('span');
            author.textContent = this.getAttribute('author');
            authorElement.appendChild(author);
        }
        
    }
  }
  
  customElements.define('item-component', Item) 