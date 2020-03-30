import mysql from 'mysql';

import keys from './keys';

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
*/

const pool = mysql.createPool(keys.database);


pool.getConnection((err, connection) => {

    if (err) throw err; {
        connection.release();
        console.log("Db is conected");
    }

});


export default pool;  