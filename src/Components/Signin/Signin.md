### Signin explanation

# getCurrentUser()
getCurrentUser that returns the user that currently is signedin
take the value of currentUser from localstorage and assign it to user
check if user is truthy
in case u8ser is truthy, return the parsed json and assign it userType
in case user is falsy,  we return null as currentUser