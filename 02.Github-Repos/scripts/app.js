const reposEl = document.querySelector('#repos');
const usernameEl = document.querySelector('#username');

function loadRepos() {
	reposEl.innerHTML = '<h1 id="loading">Loading...</h1>';
	const username = usernameEl.value;
	const url = `https://api.github.com/users/${username}/repos`;
	fetch(url)
		.then(res => res.json())
		.then(data => {
			document.getElementById('loading').remove();
			data.forEach(elem => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.href = elem.html_url;
				a.innerHTML = elem.full_name;
				li.appendChild(a);
				reposEl.appendChild(li);
			});
		})
}