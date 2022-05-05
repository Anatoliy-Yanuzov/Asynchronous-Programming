function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';

   const xmlHttpRequest = new XMLHttpRequest();
   xmlHttpRequest.addEventListener('readystatechange', state => {
      if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
         console.log(xmlHttpRequest.responseText);
      }
   });
   
   xmlHttpRequest.open('GET', url);
   xmlHttpRequest.send();
}