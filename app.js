

const products = $.ajax({url:'https://fakestoreapi.com/products/category/jewelery'})

products.then(
    (data) => {
        console.log(data)
        
        // let productNameZ = $('<h4 id="prodName" class="flow-text responsive-text">').text(data[0].title)
        let productPicZ = $('<img id="productPic" class="responsive-img center" style="max-width: 38%">').attr('src', data[0].image)
        let productDescZ = $('<h5 id="prodDesc" class="flow-text responsive-text">').text(data[0].description)
        // let productPriceZ = $('<h4 id="prodPrice" class="flow-text">').text("Price: $" + data[0].price)
        $('#textDiv-0').append(data[0].title, productDescZ)
        $('#picDiv-0').append(productPicZ)
        $('#btn-0').append(data[0].price)
        
        // let productNameOne = $('<h4 id="prodName" class="flow-text responsive-text">').text(data[1].title)
        let productPicOne = $('<img id="productPic" class="responsive-img" style="max-width: 75%">').attr('src', data[1].image)
        let productDescOne = $('<h5 id="prodDesc" class="flow-text responsive-text">').text(data[1].description)
        // let productPriceOne = $('<h4 id="prodPrice" class="flow-text">').text("Price: $" + data[1].price)
        $('#textDiv-1').append(data[1].title, productDescOne)
        $('#picDiv-1').append(productPicOne)
        $('#btn-1').append(data[1].price)

        // let productNameTwo = $('<h4 id="prodName"  class="flow-text responsive-text">').text(data[2].title)
        let productPicTwo = $('<img id="productPic" class="responsive-img" style="max-width: 50%">').attr('src', data[2].image)
        let productDescTwo = $('<h5 id="prodDesc" class="flow-text responsive-text">').text(data[2].description)
        // let productPriceTwo = $('<h4 id="prodPrice" class="flow-text">').text("Price: $" + data[2].price)
        $('#textDiv-2').append(data[2].title, productDescTwo)
        $('#picDiv-2').append(productPicTwo)
        $('#btn-2').append(data[2].price)
        
        // let productNameThree = $('<h4 id="prodName" class="flow-text responsive-text">').text(data[3].title)
        let productPicThree = $('<img id="productPic" class="responsive-img" style="max-width: 75%">').attr('src', data[3].image)
        let productDescThree = $('<h5 id="prodDesc" class="flow-text responsive-text">').text(data[3].description)
        // let productPriceThree = $('<h4 id="prodPrice" class="flow-text">').text("Price: $" + data[3].price)
        $('#textDiv-3').append(data[3].title, productDescThree)
        $('#picDiv-3').append(productPicThree)
        $('#btn-3').append(data[3].price)
    
   
})

$(document).ready(() =>{
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
})