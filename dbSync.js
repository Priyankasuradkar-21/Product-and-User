// const sequelize = require('./db/postgresConnection')
// const User = require('./model/user');
// const Post = require('./model/post');

// const syncDatabase = async() => {
//     try {
//         console.log();
//         await sequelize.sync({ force: true });
//         console.log();
//         console.log('Database synchronized successfully.');
//     } catch (error) {
//         console.error('Error synchronizing database:', error);
//     }
// }

// module.exports = syncDatabase;





const sortingInHistory = async (req, res) => {
    try {
      const email = req.user.email;
      const {
        byEntryDate,
        byLargestWin,
        byLargestLosses,
        byClosedMergedTrades,
      } = req.body;
  
      // console.log("DATA:::",email,req.body)
      const userData = await user.findOne({ email: email }).lean();
      userData.trades = userData.trades.filter((element) => {
        return element.isSubmit == true
      })
  
      console.log("USERDATA:::",userData.trades.length)
      if (!byEntryDate && !byLargestWin && !byLargestLosses && !byClosedMergedTrades) {
        userData.trades.sort((a, b) => {
          const dateA = new Date(a.editedDate);
          const dateB = new Date(b.editedDate);
          return dateB - dateA;
        });
        return res.status(200).json(userData.trades);
      }
  
      if (byEntryDate) {
        userData.trades.sort((a, b) => {
          
          const dateA = new Date(`${a.entryTime.Date} ${a.entryTime.time}`);
          const dateB = new Date(`${b.entryTime.Date} ${b.entryTime.time}`);
          console.log("DATE::",dateA,dateB)
          if (dateA > dateB) return -1;
          if (dateA < dateB) return 1;
   
          const ampmA = a.entryTime.time.split(" ")[1] ?? "";
          const ampmB = b.entryTime.time.split(" ")[1] ?? "";
          if (ampmA === "PM" && ampmB === "AM") return -1;
          if (ampmA === "AM" && ampmB === "PM") return 1;
   
          const timeA = new Date(`${a.entryTime.Date} ${a.entryTime.time}`);
          const timeB = new Date(`${b.entryTime.Date} ${b.entryTime.time}`);
          if (ampmA === "AM") {
            return timeB - timeA;
          } else {
            return timeA - timeB;
          }
        });
        return res.status(200).json(userData.trades);
      }
  
      if (byLargestWin) {
        userData.trades.sort((a, b) => b.profitable - a.profitable);
        return res.status(200).json(userData.trades);
      }
  
      if (byLargestLosses) {
        userData.trades.sort((a, b) => a.profitable - b.profitable);
        return res.status(200).json(userData.trades);
      }
  
      let mergeTrades
      if (byClosedMergedTrades) {
        mergeTrades = userData.trades.filter((element) => {
          if (element.isSubmit && element.tradeFrom == "MERGED")
            return element
        })
  
        mergeTrades.sort((a, b) => {
          const dateA = new Date(a.editedDate);
          const dateB = new Date(b.editedDate);
          return dateB - dateA;
        });
  
      }
      return res.status(200).json(mergeTrades);
    }
    catch (error) {
      console.log("ERROR:::", error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  };



  
  