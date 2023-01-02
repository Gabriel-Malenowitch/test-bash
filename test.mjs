const path = ''
const commands = []

// Array for keep errors and show after test
const errors = []

// Test each command
commands.forEach(command => {
    try{
        $`${path} ${command}`
    } catch (error) {
        console.log(error)
        errors.push({ command, err: error })
    }
})

// If we have errors, show them
if(errors.length) {
    $`=================================================`
    $`echo We have problems to test some commands:`
    errors.forEach(error => {
        console.log(`- Command "${error.command}" get: ${error.err}`)
    })
    $`=================================================`
}
