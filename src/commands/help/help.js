'use strict'

const help = (() => {   

    let send = async (msg, args) => {
        
    }  
    
    let help = () => {
        return ({
            name: 'help',
            description: 'hello world.',
            usage: 'help',
            category: 'entreterimento'
        })
    }

    return {
        send,
        help
    }
    
})()

module.exports = help