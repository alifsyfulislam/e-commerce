let alfflag = false;
let selectedItem;
let selectedProduct;
//page 2
$('.btn_1').bind('touchstart click', function(){
    if (!alfflag) {
        alfflag = true;
        setTimeout(function(){ alfflag = false; }, 100);
        $('.patch_box_1').addClass('fadeOut');
        $('.patch_box_1').css({zIndex : -4});
    }
    return false
});

//select category page 3
$("[class^='cate_']").click (function (){
    $('.patch_box_2').addClass('fadeOut');
    $('.patch_box_2').css({zIndex : -3});
    selectedItem = $("[class^='cate_']").index(this);
    productList(selectedItem);
});

function productList(val) {
    //category here
    switch (val) {
        case 0:
            $('.product_item').eq(0).attr('src','assets/four/product/17.png');
            $('.product_item').eq(1).attr('src','assets/four/product/18.png');
            $('.product_item').eq(2).attr('src','assets/four/product/19.png');
            $('.product_item').eq(3).attr('src','assets/four/product/20.png');
            $('.product_item').eq(4).attr('src','assets/four/product/21.png');
            $('.product_item').eq(5).attr('src','assets/four/product/22.png');
            $('.product_item').eq(6).attr('src','assets/four/product/23.png');
            $('.product_item').eq(7).attr('src','assets/four/product/24.png');
            break;
        case 1:
            $('.product_item').eq(0).attr('src','assets/four/product/41.png');
            $('.product_item').eq(1).attr('src','assets/four/product/42.png');
            $('.product_item').eq(2).attr('src','assets/four/product/43.png');
            $('.product_item').eq(3).attr('src','assets/four/product/44.png');
            $('.product_item').eq(4).attr('src','assets/four/product/45.png');
            $('.product_item').eq(5).attr('src','assets/four/product/46.png');
            $('.product_item').eq(6).attr('src','assets/four/product/47.png');
            $('.product_item').eq(7).attr('src','assets/four/product/48.png');
            break;
        case 2:
            $('.product_item').eq(0).attr('src','assets/four/product/9.png');
            $('.product_item').eq(1).attr('src','assets/four/product/10.png');
            $('.product_item').eq(2).attr('src','assets/four/product/11.png');
            $('.product_item').eq(3).attr('src','assets/four/product/12.png');
            $('.product_item').eq(4).attr('src','assets/four/product/13.png');
            $('.product_item').eq(5).attr('src','assets/four/product/14.png');
            $('.product_item').eq(6).attr('src','assets/four/product/15.png');
            $('.product_item').eq(7).attr('src','assets/four/product/16.png');
            break;
        case 3:
            $('.product_item').eq(0).attr('src','assets/four/product/33.png');
            $('.product_item').eq(1).attr('src','assets/four/product/34.png');
            $('.product_item').eq(2).attr('src','assets/four/product/35.png');
            $('.product_item').eq(3).attr('src','assets/four/product/36.png');
            $('.product_item').eq(4).attr('src','assets/four/product/37.png');
            $('.product_item').eq(5).attr('src','assets/four/product/38.png');
            $('.product_item').eq(6).attr('src','assets/four/product/39.png');
            $('.product_item').eq(7).attr('src','assets/four/product/40.png');
            break;
        case 4:
            $('.product_item').eq(0).attr('src','assets/four/product/1.png');
            $('.product_item').eq(1).attr('src','assets/four/product/2.png');
            $('.product_item').eq(2).attr('src','assets/four/product/3.png');
            $('.product_item').eq(3).attr('src','assets/four/product/4.png');
            $('.product_item').eq(4).attr('src','assets/four/product/5.png');
            $('.product_item').eq(5).attr('src','assets/four/product/6.png');
            $('.product_item').eq(6).attr('src','assets/four/product/7.png');
            $('.product_item').eq(7).attr('src','assets/four/product/8.png');
            break;
        case 5:
            $('.product_item').eq(0).attr('src','assets/four/product/25.png');
            $('.product_item').eq(1).attr('src','assets/four/product/26.png');
            $('.product_item').eq(2).attr('src','assets/four/product/27.png');
            $('.product_item').eq(3).attr('src','assets/four/product/28.png');
            $('.product_item').eq(4).attr('src','assets/four/product/29.png');
            $('.product_item').eq(5).attr('src','assets/four/product/30.png');
            $('.product_item').eq(6).attr('src','assets/four/product/31.png');
            $('.product_item').eq(7).attr('src','assets/four/product/32.png');
            break;
        default:
            $('.product_item').eq(0).attr('src','assets/four/product/17.png');
            $('.product_item').eq(1).attr('src','assets/four/product/18.png');
            $('.product_item').eq(2).attr('src','assets/four/product/19.png');
            $('.product_item').eq(3).attr('src','assets/four/product/20.png');
            $('.product_item').eq(4).attr('src','assets/four/product/21.png');
            $('.product_item').eq(5).attr('src','assets/four/product/22.png');
            $('.product_item').eq(6).attr('src','assets/four/product/23.png');
            $('.product_item').eq(7).attr('src','assets/four/product/24.png');
            break;
    }
}


var addCart = 0;
var totalSum = 0;
//product selection animation
$(".product_item").click(function () {
    addCart++;
    $('.cart_sum').html(addCart);
    //product here
    selectedProduct = $(".product_item").index(this);
    //money summation
    $('.price_sum').html(moneySum(selectedItem,selectedProduct));

    console.log('Category: '+selectedItem+ ' Product: '+selectedProduct);

    $('.product_item').eq(selectedProduct).addClass('fadeIn');
    setTimeout(()=>{
        $('.product_item').eq(selectedProduct).removeClass('fadeIn');
        $('.cart_order_btn').addClass('fadeIn_mul');
    },200);
});
//return menu
$('.go_menu').click(function () {
    $('.patch_box_2').removeClass('fadeOut');
    $('.patch_box_2').addClass('fadeIn');
    $('.patch_box_2').css({zIndex : 3});
});

//store all data page 4
$('.cart_order_btn').click(function () {
    if (addCart!=0){
        $('.patch_box_3').addClass('fadeOut');
        $('.patch_box_3').css({zIndex : -3});
    }
});

//page 5
$('.btn_2').bind('click', function(){
    if (mobileOk && nameOk){
        // $('.patch_box_2').addClass('fadeOut');
        // $('.patch_box_2').css({zIndex : -3});
    }
});







//moneySum
function moneySum(val1,val2){
    switch (val1+''+val2) {
        case '00':
            totalSum+=195;
            return totalSum;
            break;
        case '01':
            totalSum+=12;
            return totalSum;
            break;
        case '02':
            totalSum+=250;
            return totalSum;
            break;
        case '03':
            totalSum+=650;
            return totalSum;
            break;
        case '04':
            totalSum+=190;
            return totalSum;
            break;
        case '05':
            totalSum+=215;
            return totalSum;
            break;
        case '06':
            totalSum+=110;
            return totalSum;
            break;
        case '07':
            totalSum+=5;
            return totalSum;
            break;




        case '10':
            totalSum+=50;
            return totalSum;
            break;
        case '11':
            totalSum+=45;
            return totalSum;
            break;
        case '12':
            totalSum+=45;
            return totalSum;
            break;
        case '13':
            totalSum+=35;
            return totalSum;
            break;
        case '14':
            totalSum+=35;
            return totalSum;
            break;
        case '15':
            totalSum+=10;
            return totalSum;
            break;
        case '16':
            totalSum+=40;
            return totalSum;
            break;
        case '17':
            totalSum+=17;
            return totalSum;
            break;




        case '20':
            totalSum+=670;
            return totalSum;
            break;
        case '21':
            totalSum+=350;
            return totalSum;
            break;
        case '22':
            totalSum+=690;
            return totalSum;
            break;
        case '23':
            totalSum+=650;
            return totalSum;
            break;
        case '24':
            totalSum+=500;
            return totalSum;
            break;
        case '25':
            totalSum+=660;
            return totalSum;
            break;
        case '26':
            totalSum+=310;
            return totalSum;
            break;
        case '27':
            totalSum+=650;
            return totalSum;
            break;


        case '30':
            totalSum+=990;
            return totalSum;
            break;
        case '31':
            totalSum+=250;
            return totalSum;
            break;
        case '32':
            totalSum+=460;
            return totalSum;
            break;
        case '33':
            totalSum+=350;
            return totalSum;
            break;
        case '34':
            totalSum+=350;
            return totalSum;
            break;
        case '35':
            totalSum+=160;
            return totalSum;
            break;
        case '36':
            totalSum+=860;
            return totalSum;
            break;
        case '37':
            totalSum+=208;
            return totalSum;
            break;


        case '40':
            totalSum+=140;
            return totalSum;
            break;
        case '41':
            totalSum+=250;
            return totalSum;
            break;
        case '42':
            totalSum+=180;
            return totalSum;
            break;
        case '43':
            totalSum+=320;
            return totalSum;
            break;
        case '44':
            totalSum+=75;
            return totalSum;
            break;
        case '45':
            totalSum+=115;
            return totalSum;
            break;
        case '46':
            totalSum+=180;
            return totalSum;
            break;
        case '47':
            totalSum+=100;
            return totalSum;
            break;


        case '50':
            totalSum+=139;
            return totalSum;
            break;
        case '51':
            totalSum+=168;
            return totalSum;
            break;
        case '52':
            totalSum+=63;
            return totalSum;
            break;
        case '53':
            totalSum+=126;
            return totalSum;
            break;
        case '54':
            totalSum+=136;
            return totalSum;
            break;
        case '55':
            totalSum+=262;
            return totalSum;
            break;
        case '56':
            totalSum+=158;
            return totalSum;
            break;
        case '57':
            totalSum+=305;
            return totalSum;
            break;



        default:
            totalSum = 0;
            return totalSum;
            break;
    }
}





//location validation
let nameValue,nameOk;
$('.user_loc').bind('keyup touchstart',function () {
    nameValue= this.value.replace(/^[^\d.,]+}$/);
    var nameRegex= /^[^\d.,]+$/.test(nameValue);
    if (nameRegex){
        $('.user_loc').css({border: '2px solid #008000',color: '#05509e'});
        nameOk=nameRegex;
    }
    else{
        $('.user_loc').css({border: '2px solid #f00',color: '#f00'});
        nameOk=null;
    }
    setTimeout(()=>$('.user_loc').css({borderWidth: '1px'}),3e3);
});

//number validation
let mobValue,mobileOk;
$('.user_tel').keyup(function () {
    console.log(11111);
    mobValue= this.value.replace(/([^0-9\+]+)?(\+88)?([^0-9\+]+)?/ig, '');
    var res= /^(\+88)?(01[3-9]{1})([0-9]{8})+$/.test(mobValue);
    if(res){
        $('.user_tel').css({border: '2px solid #008000',color: '#05509e'});
        mobileOk=res;
    }else{
        $('.user_tel').css({border: '2px solid #f00',color: '#f00'});
        mobileOk=null;
    }
    setTimeout(()=>$('.user_tel').css({borderWidth: '1px'}),3e3);
});






