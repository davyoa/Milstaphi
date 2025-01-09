const productGrid = document.querySelector('.products-grid');

const productStorage = [
    {
        name: 'wheels',
        imgSrc: 'assets/images/wheels.png'
    },
    {
        name: 'Brake Disc',
        imgSrc: 'assets/images/brake pad.png'
    },
    {
        name: 'Shock Absorber',
        imgSrc: 'assets/images/dumper.png'
    },
    {
        name: 'Oil Filter',
        imgSrc: 'assets/images/cleaner yellow.png'
    },
    {
        name: 'Grille',
        imgSrc: 'assets/images/bumper mecedes.png'
    },
    {
        name: 'Headlight',
        imgSrc: 'assets/images/car light.png'
    }
]
const prodFragment = document.createDocumentFragment();
productStorage.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');

    //just trying somthing out with the code
    /*const details = document.createElement('div');
    details.classList.add('item-details');*/

    const productImg =  document.createElement('img');
    productImg.src = product.imgSrc;
    productImg.alt = product.name;

    productDiv.appendChild(productImg);
    prodFragment.appendChild(productDiv);
});

productGrid.appendChild(prodFragment);
