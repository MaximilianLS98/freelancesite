import type { User } from '@/payload-types'
import type { AccessArgs } from 'payload'

type hasapiaccess = (args: AccessArgs<User>) => boolean

export const apiaccess: hasapiaccess = ({ req: { user } }) => {
    console.log("user in apiaccess", user);
    if (!user) {
        return false
    }
    // THis is not safe code, but using it for now. 
    // if (user.apiKey) {
    //     return true
    // }
    return false
}
