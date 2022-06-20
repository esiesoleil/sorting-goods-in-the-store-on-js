document.querySelector('#sort-asc').onclick = function() {
	mySort('data-price');
}
document.querySelector('#sort-desc').onclick = function() {
	mySortDesc('data-price');
}
document.querySelector('#sort-rating').onclick = function() {
	mySortDesc('data-rating');
}

function mySort(sortType) {
	let nav = document.querySelector('.goods-wrap');
	for (let i = 0; i < nav.children.length; i++) {
		for (let j = i; j < nav.children.length; j++) {
			if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute('data-price')) {
				replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replacedNode, nav.children[i]);
			}
		}
	}
}

function mySortDesc(sortType) {
	let nav = document.querySelector('.goods-wrap');
	for (let i = 0; i < nav.children.length; i++) {
		for (let j = i; j < nav.children.length; j++) {
			if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute('data-price')) {
				replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replacedNode, nav.children[i]);
			}
		}
	}
}