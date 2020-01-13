export async function getGitHubUser(username) {
  const response = await (await fetch(`https://api.github.com/users/${username}`)).json();
  return response;
}