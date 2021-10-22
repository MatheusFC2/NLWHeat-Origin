/*
    camelCase
    PascalCase
    snake-case
*/

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