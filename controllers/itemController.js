//SQL
const connection=require('../config/db');
//get all users
exports.getAllItems=(req,res)=>{
    connection.query('SELECT * FROM finance', (err, rows, fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};

// Search a user by id
// CRUD - Report
exports.getItemById=(req,res)=>{
    const id=req.params.id;
    connection.query('SELECT * FROM finance WHERE id=?', [id], (err, rows, fields)=>{
        if(err) throw err;
        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: "Item not found"});
    });
}

//Create a new user
//CRUD - Create
exports.createItem=(req,res)=>{
    const {title, amount, category, date}=req.body;
    connection.query('INSERT INTO finance (title, amount, category) VALUES (?, ?, ?)', [title, amount, category], (err, result)=>{
        if(err) throw err;
        res.json({message: 'Item created successfully', userId: result.insertId});
    })
}

//Edit a user
//CRUD - Update

exports.updateItem=(req,res)=>{
    const {id, title, amount, category, date}=req.body;
    connection.query('UPDATE finance SET title=?, amount=?, category=?, date=? WHERE id=?', [title, amount, category, date, id], (err, result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message: 'Item updated successfully'});
        else
            res.status(404).json({message: 'Item not found'});
        })
    }

//Delete a user
//CRUD - Delete
exports.deleteItem=(req,res)=>{
    const id=req.body.id;
    connection.query('DELETE FROM finance WHERE id=?', [id], (err, result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message: 'Item deleted successfully'});
        else
            res.status(404).json({message: 'Item not found'});
    })
}
