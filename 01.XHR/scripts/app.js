function loadRepos() {
   const resEl = document.getElementById('res');
   const url = 'https://api.github.com/users/testnakov/repos';

   // const xmlHttpRequest = new XMLHttpRequest();
   // xmlHttpRequest.addEventListener('readystatechange', state => {
   //    if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
   //       resEl.innerHTML = xmlHttpRequest.responseText;
   //    }
   // });

   // xmlHttpRequest.open('GET', url);
   // xmlHttpRequest.send();


   fetch(url)
      .then(res => {
         if (res.status === 200) {
            return res.json();
         } else if (res.status === 401) {
            console.warn('UNAUTHORIZED');
         } else if (res.status === 500) {
            console.log('Server Error');
         }
      })
      .then(data => {
         if (!data) {
            return;
         }
         console.log(data);
         resEl.innerHTML = JSON.stringify(data);
      });
}