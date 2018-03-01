const express = require('express'),
    friends = require('../data/friend'),
    router = express.Router();

router.route('/friends')
    .get((req, res) => res.json(friends))
    .post((req, res) => {
        let user = req.body,
            totals = [],
            bestFriend;
        
        for (let i in friends) {
            let diffArr = [],
                currentTest = friends[i].scores;
            // console.log('==============');
            // console.log(currentTest);
            for (let j in user.scores) {

                diffArr.push(Math.abs(parseInt(user.scores[j]) - currentTest[j]));
                // console.log(diffArr);
            }
            let totalDiff = diffArr.reduce((total, num) => total + num);
            // console.log(totalDiff);
            totals.push(totalDiff);
        }
        // console.log(totals);
        let min = Math.min(...totals);
        let index = totals.indexOf(min);
        bestFriend = friends[index];
        console.log(bestFriend);

        friends.push(user);

        res.json(bestFriend);
    });
module.exports = router;