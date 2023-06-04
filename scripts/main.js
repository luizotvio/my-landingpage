function getProjects(){
    const urlGitHub = 'https://api.github.com/users/luizotvio/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none'
            showProjects(response)
        })
        .catch((e) => {
            console.log(e)
        })
}

function showProjects(data){

}

getProjects()