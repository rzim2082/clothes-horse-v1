


//this is the our story overlay

var $aboutPicture = 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xfl1/v/t1.0-9/12003865_1482961092011365_3069894113942315866_n.jpg?oh=71804bfa0251246edfa75430387ecfaa&oe=574E32E8'

var $aboutStory = "<h2>Our Story</h2><p>After an intense, but rewarding 37-year college football coaching career, my wife Charleen and I are enjoying our second-half of life. We always tossed around the idea of opening a high quality, warm and inviting apparel destination, and here we are!</p><p>The Clothes Horse represents classic, comfortable apparel, (emphasis on comfortable)  with a touch of new fresh lines.</p><p>Customer interaction and relationship building is one of our favorite aspects of being in our store. We strive to serve and meet the needs of their clients, and always welcome a challenge.</p><p>The Clothes Horse Men's Apparel & Gifts store is located at 28 Milton Ave. in the heart of downtown Alpharetta, GA. Stop by when you're in the area!</p>"

var $aboutOverlay = $('<div id="aboutOverlay" class="container"><div class="row"><div class="col-md-6"><img class="img-responsive" src="' + $aboutPicture + '"></div><div class="col-md-6">' + $aboutStory + '</div></div></div>');


$('body').append($aboutOverlay);

$('#about').click(function(){
  $('#aboutOverlay').toggle()

});

$('#aboutOverlay').click(function(){
  $('#aboutOverlay').hide();
});

//This area has to do with the BrandOverlay

var $brandOverlay;

function BrandsList(){
  this.brands = [];
  this.add = add;
  this.string = function(){
      this.brands.unshift('<div class="container" id="brandOverlay"><div class="row">');
      this.brands.push('</div></div>');
      $brandOverlay = this.brands.toString().replace(/,/g, '');
    
  };
}

function add(input){
  this.brands.push('<div class="col-sm-2"><img class="img-responsive" src="' + input + '"/></div>');
}

var ClothesHorseBrands = new BrandsList();

ClothesHorseBrands.add('http://seeklogo.com/images/T/Tommy_Bahama-logo-9DE0CA5C5F-seeklogo.com.gif');
ClothesHorseBrands.add('https://upload.wikimedia.org/wikipedia/en/9/95/7_for_all_mankind.jpg');
ClothesHorseBrands.add('http://cdn.shopify.com/s/files/1/0359/8357/t/22/assets/logo.png?1393380059256099212');
ClothesHorseBrands.add('http://www.johnnie-o.com/skin/frontend/default/johnnie-o-2014/images/logo.png');
ClothesHorseBrands.add('http://www.redclaysoul.com/wp-content/uploads/2015/06/screenshot_1463.jpg');
ClothesHorseBrands.add('https://asset1.danielwellington.com/skin/frontend/rwd/dw/css/images/logo.png');
ClothesHorseBrands.add('http://onepercentfortheplanet.org/wp-content/uploads/2013/06/collaredgreenslogo.jpg');
ClothesHorseBrands.add('https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/s320x320/e15/11191154_955415824503502_913023308_n.jpg');
ClothesHorseBrands.add('http://cdn.shopify.com/s/files/1/0649/3159/products/slblue_large.jpg?v=1411487959');
ClothesHorseBrands.add('https://cdn.shopify.com/s/files/1/1103/7846/files/logo_large.png?17948198905243804731');
ClothesHorseBrands.add('https://2undr.com/us/media/images/default/2undr-logo_5.png');
ClothesHorseBrands.add('http://ww1.prweb.com/prfiles/2011/03/01/4709394/gI_0_bedstu.jpg');
ClothesHorseBrands.add('http://www.knoxvillefilms.com/wp-content/uploads/2013/05/Marc-Nelson-Denim.png');
ClothesHorseBrands.add('http://cdn.shopify.com/s/files/1/0897/7672/t/13/assets/logo.png?11377009926610843934');
ClothesHorseBrands.add('http://www.korchmar.com/media/images/btns/logo-korchmar.png');
ClothesHorseBrands.add('https://www.enro.com/skin/frontend/enro/enrov1/images/enro_logo_black.png');
ClothesHorseBrands.add('http://www.redixstore.com/static/images/header/redix_0036_highcotton.png');
ClothesHorseBrands.add('https://s-media-cache-ak0.pinimg.com/236x/25/56/29/255629c45bd38575ce8d403d79995389.jpg');

ClothesHorseBrands.string();

$('body').append($brandOverlay);



$('#brands').click(function(){
    console.log('test');  
    $('#brandOverlay').show();
    
});

$('#brandOverlay').click(function(){
  $('#brandOverlay').hide();
});



//this is the visit section

$visitOverlay = $('<div id="visitOverlay" class="container"><div class="row"><div class="col-md-4"><img class="img-responsive" src="https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpl1/v/t1.0-9/12508850_1495441304096677_8490322610903187850_n.jpg?oh=07be9d09ec0a2ba8b0d064fb739acc6c&oe=579614C2"></div><div class="col-md-4"><h1>Hours</h1><h2>Mon-Wed: 10am-6pm</h2><h2>Thu: 10am-8pm</h2><h2>Fri-Sat: 10am-6pm</h2><h2>Sun: 12pm-5pm</h2></div><div class="col-md-4"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7605660832!2d-84.2977320849139!3d34.07565158059958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575a3448082d3%3A0x16a9857d8eaf31b3!2s28+Milton+Ave%2C+Alpharetta%2C+GA+30009!5e0!3m2!1sen!2sus!4v1458921999723" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe></div></div></div>');

$('body').append($visitOverlay);

$('#visit').click(function(){
  $('#visitOverlay').toggle();
});

$('#visitOverlay').click(function(){
  $(this).toggle();
});