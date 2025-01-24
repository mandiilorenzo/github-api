const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                <div class="data">
                <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                <p class="followers"><i class="fas fa-users"></i>${user.seguidores} Seguidores</p>
                <p class="following"><i class="fas fa-users"></i>${user.seguindo} Seguindo</p>
                </div>
            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
            <div class="itens-repositories"><span><i class="fas fa-code-branch"></i>${repo.forks_count}</span>
            <span><i class="fas fa-star"></i>${repo.stargazers_count}</span>
            <span><i class="fas fa-eye"></i>${repo.watchers_count}</span>
            <span>${repo.language}</span></div>
            </a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`
        }

        if(user.eventos.lenght > 0) {
            this.userProfile.innerHTML += '<div class="events"><h2>Eventos</h2></div>'
        }

        const events = user.eventos.filter((event) => {
            return event.type === 'PushEvent' || event.type === 'CreateEvent'
        })

        if(events.length > 0) {
            this.userProfile.innerHTML += '<div class="events"><h2>Eventos</h2></div>'
        }
        
        events.forEach((event) => { 
            if(event.type === 'PushEvent'){
                this.userProfile.innerHTML += `<div class="events">
                <h3>${event.repo.name}</h3> - ${event.payload.commits[0].message}</div>`
            } if(event.type === 'CreateEvent'){
                this.userProfile.innerHTML += `<div class="events"><h3>${event.repo.name}</h3><p>Sem mensagem de commit</p></div>`
            }
        })
    },
    
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }
