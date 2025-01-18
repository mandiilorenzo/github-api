const user = {
    avatarUrl: '',
    name: '',
    bio:'',
    userName: '',
    seguidores: '',
    seguindo: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.seguidores = gitHubUser.followers
        this.seguindo = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }