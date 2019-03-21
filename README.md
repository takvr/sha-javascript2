# sha-javascript2

https://takvr.github.io/sha-javascript2/index.html

This is a homework for Social Hackers Academy

Homework: 

Make a website that fetches (= to get) data asynchronously.

1.Create a new website with external js file

2.Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!'

3.Create a function that fetches from The Github API. For example from [this page] (https://api.github.com/orgs/SocialHackersCodeSchool/repos). For help on this check this SO post

4.Display the data that you get from the Github API on your web page.

5.Now link the two together: When you click the button -> get the data from the Github API and display it on your website



Take a look at this:
https://api.github.com/repos/SocialHackersCodeSchool/CommandLine
Make a function which takes a single argument. The function should make an Fetch request to https://api.github.com/repos/SocialHackersCodeSchool/[SearchTerm] where the search term will be the argument. This argument will be the input the user has given you, so make sure that when the user clicks the button you call this function with the argument.

Make all the repositories link their own page in Github. Use the value of the key: name to make this work (hint: Github urls always look like this https://api.github.com/repos/SocialHackersCodeSchool/[repositoryName] where [repositoryName] would be replaced by the actual name of the repository, for example CommandLine). Make sure the link opens in a new tab.

Make sure you handle user input well. That means you need to think about empty input, and input that doesn't yield any results.
So Github has this really nice documentation :octocat: : Check these out for example https://developer.github.com/v3/repos/collaborators/ https://developer.github.com/v3/repos/commits/

Extend your page with an input element. This is so the user will be able to type in text.

For each repository, show (in the right column) who the contributers are. You will need to use the contributors_url for this.
