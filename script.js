let permission = confirm("Are you sure you want to continue with this website!")
if (permission) {
    let a = ["Initializig the programm...",
        "Connecting to android system...",
        "Connecting to server 1...",
        "Connection failed,Retrying....",
        "server 1 connected successfully...",
        "Connecting to server 2",
        "server 2 connected successfully",
        "Retriving USERNAME...",
        "Retriving PASSWORD...",
        "Password not found....",
        "Username detected",
        "Now trying Brute Force....",
        ".",
        ".",
        ".",
        ".",
        ".",
        "3000 passwords tried....",
        "Match not found,Retrying.....",
        "Another 2461 passwords tried....",
        "Trying...",
        "Trying....",
        "Match found",
        "Accessing account......",
        "Malware loaded successfully"
    ]


    //here we just create the sleep function so we can use it simply
    //multiply by 1000 bcz we need seconds,initialy it is in a milliseconds
    const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
        })
    }
    const show_hack = async (message) => {
        await sleep(2)
        console.log(message)
        text.innerHTML += message + "<br>"

    }

    const main = async () => {
        for (let i = 0; i < a.length; i++) {
            await show_hack(a[i])

        }


    }
    main()
}
