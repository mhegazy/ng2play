export class GithubNames {
  getUsers() {
    // Code in here is a temporary fix for a ZoneJs issue
    // https://github.com/angular/angular/issues/1913
    return Zone.bindPromiseFn(fetch)('https://api.github.com/users').then(function(response) {
      return response.json();
    });
  }
}