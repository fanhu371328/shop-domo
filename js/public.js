

//数量加
function fnPlus(obj, numObj, lessObj){
	var n=$(obj).parent().find(numObj).eq(0).text();
	n++;
	$(obj).parent().find(numObj).eq(0).text(n);
	if(n>1){
		$(obj).siblings(lessObj).removeClass('failed');
	}
}

//数量减
function changeNum(obj){
	for(var i=0;i<$(obj).length;i++){

		$(obj)[i].onclick = (function(index){
			return function (){
				var num = parseInt($(obj).eq(index).siblings('.num').text());
				if(obj=='.add'){
					num++;
				}else if(obj=='.less' && num>0){
					num--;
				}
				
				$(obj).eq(index).siblings('.num').text(num);
				
				$(obj).eq(index).parents('.tag').next().find('.numb').text(num);
			}
		})(i);
	}
}


function fnCount(num, discount ,price ,total){
	var num=parseInt($(num).text());
	var discount=parseFloat($(discount).text());
	var price=$(price).val();
	var count=(num*discount*price).toFixed(2);
	$(total).html(count);
	
}



//选择商品
function fnGetSelected(obj){
	$(obj).bind("click",function(){
		var _this=$(this);

		if(_this.hasClass("cur")){
			_this.removeClass('cur');
			_this.find('.selected').remove();
		}else{
			var oSpan=$('<span></span>');
			oSpan.addClass("selected");
			oSpan.html('<img src="images/icon_select.png">');
			_this.append(oSpan);
			_this.addClass("cur");
			_this.siblings('.options').removeClass('cur');
			_this.siblings('.options').find('.selected').remove();
		}
	})
}

//计算金额
function sum(sumObj,subObj,subtotal){
	var sum=0;//总金额
	$(subObj).each(function(){
		var price=$(this).find(".price").val();
		var num=parseInt($(this).find(".num").eq(0).text());
		var subSum=price*num;
		sum+=subSum;
		$(this).find(subtotal).html(subSum.toFixed(2));
	});
	$(sumObj).html(sum.toFixed(2));
}