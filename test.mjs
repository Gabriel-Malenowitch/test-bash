const path = ''
const commands = []

const errors = []

commands.forEach(command => {
    try{
        $`${path} ${command}`
    } catch (error) {
        console.log(error)
        errors.push(command)
    }
})

if(errors.length) {
    $`=================================================`
    $`echo We have problems to test some commands:`
    errors.forEach(error => {
        console.log(`- ${error}`)
    })
    $`=================================================`
}
