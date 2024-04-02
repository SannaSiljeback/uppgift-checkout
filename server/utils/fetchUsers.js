const fs = require('fs').promises;

const fetchUsers = async () => {
    const data = await fs.readFile('./data/users.json', 'utf-8');
    //i node/express utgår man från att man är i server filen för det är där anropet går in, så pathen baseras på den

    const users = JSON.parse(data);
    return users;
}

module.exports = fetchUsers;