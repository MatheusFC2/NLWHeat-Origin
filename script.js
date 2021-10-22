const linksSocialMedia = {
    github: "MatheusFC2",
    linkedin: "in/matheus-freitas-campos-235305137/",
    instagram: "omatheusfc",
    twitter: "matheusfc_2"
}

function changeSocialMediaLinks(){

    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

        //alert(li.children[0].href)
    }

}

changeSocialMediaLinks()

function getGithubProfileInfos () {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json() )
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGithubProfileInfos()