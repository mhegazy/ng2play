export class GithubNames {
  getUsersSync() {
    //return ['john', 'dan', 'ward'];
    return [
      { login: 'john', avatar_url: 'sumtin' },
      { login: 'dan', avatar_url: 'sumtin' },
      { login: 'ward', avatar_url: 'sumtin' }
    ];
  }
  // getUsers() {
  // Code in here is a temporary fix for a ZoneJs issue
  // https://github.com/angular/angular/issues/1913
  // return Zone.bindPromiseFn(fetch)('https://api.github.com/users').then(function(response: any) {
  //   return response.json();
  // });
  // }
}