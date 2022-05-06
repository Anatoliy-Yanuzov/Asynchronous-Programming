function loadRepos() {
	const reposEl = document.querySelector('#repos');
	const usernameEl = document.querySelector('#username');

	reposEl.innerHTML = '<h1 id="loading">Loading...</h1>';

	const username = usernameEl.value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(res => {
			if (res.status === 404) {
				let li = document.createElement('li');
				li.innerHTML = `Username ${username} Not Found`;
				reposEl.appendChild(li);
			} else {
				return res.json()
			}
		})
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