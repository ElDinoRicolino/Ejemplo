const btnSwitch = document.querySelector('#switch');
const indica = document.querySelector('#indicador');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	//Guardamos le modo
	if (document.body.classList.contains('dark')) {
		localStorage.setItem('dark-mode', 'true');
	}else{
		localStorage.setItem('dark-mode', 'false');
	}
});

//Obtenemos el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
}else{
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}